// pages/index.tsx
import CircularImage from "@/module/CircularImage";
import React, { useRef, useState } from "react";
import Modal from "@/modals/ModalWindowImage";
import CircularImageFull from "@/module/CircularImageFull";
import PersonalData from "@/blocks/PersonalData";
import LeftDownBlock from "@/blocks/LeftDownBlock";
import InsideWorkExperience from "@/module/InsideWorkExpirience";
import ModalLeftBlock from "@/modals/ModalWindowLeftBlock";
import CentralBlock from "@/blocks/CentralBlock";
import ModalCentralBlock from "@/modals/ModalWindowCentralBlock";
import InsideAboutMe from "@/module/InsideAboutMe";

export default function Home() {
    const [stateModalTop, setOpenModalTop] = useState(false);
    const [stateModalBottom, setOpenModalBottom] = useState(false);
    const [stateModalAboutMe, setOpenModalAboutMe] = useState(false);

    const [originTop, setOriginTop] = useState({ x: 0, y: 0 });
    const [originBottom, setOriginBottom] = useState({ x: 0, y: 0 });
    const [originAboutMe, setOriginAboutMe] = useState({ x: 0, y: 0 });

    const avatarRef = useRef<HTMLDivElement | null>(null);
    const leftBottomRef = useRef<HTMLDivElement | null>(null);

    const handleOpenModal = () => {
        if (avatarRef.current) {
            const rect = avatarRef.current.getBoundingClientRect();
            setOriginTop({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        }
        setOpenModalTop(true);
    };

    const handleOpenModalFromBottom = () => {
        if (leftBottomRef.current) {
            const rect = leftBottomRef.current.getBoundingClientRect();
            setOriginBottom({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
            setOpenModalBottom(true);
        }
    };

    const handleOpenModalAboutMe = () => {
        if (leftBottomRef.current) {
            const rect = leftBottomRef.current.getBoundingClientRect();
            setOriginAboutMe({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
            setOpenModalAboutMe(true);
        }
    };




    return (
        <div className="flex flex-col min-h-screen bg-gray-500 px-[5%]">
            <Modal isOpen={stateModalTop} onClose={() => setOpenModalTop(false)} origin={originTop}>
                    <CircularImageFull alt="user photo full" />
            </Modal>
            <ModalLeftBlock isOpen={stateModalBottom} onClose={() => setOpenModalBottom(false)} origin={originBottom}>
                <div className="pl-1 space-y-2">
                    <InsideWorkExperience/>
                </div>
            </ModalLeftBlock>
            <ModalCentralBlock isOpen={stateModalAboutMe} onClose={() => setOpenModalAboutMe(false)} origin={originAboutMe}>
                <div className="pl-1 space-y-2">
                    <InsideAboutMe/>
                </div>
            </ModalCentralBlock>
            <div className="flex flex-col md:flex-row flex-1 pt-[2%] pb-[2%]">
                <div className="w-full md:w-[20%] flex flex-col rounded-tl-lg rounded-bl-lg shadow-xl max-w-full overflow-hidden">
                    <div
                        ref={avatarRef}
                        className="h-[25%] cursor-zoom-in bg-gray-800 rounded-tl-lg flex items-center justify-center"
                        onClick={handleOpenModal}
                    >
                        <CircularImage alt="user photo" />
                    </div>
                    <hr className="border-t border-gray-400 b-1"/>
                    <div className="h-[35%] bg-gray-800 p-2 overflow-hidden">
                        <PersonalData />
                    </div>
                    <hr className="border-t border-gray-400 b-1" />
                    <div className="h-[40%] bg-gray-800 p-2 rounded-bl-lg overflow-hidden cursor-zoom-in" ref={leftBottomRef}
                         onClick={handleOpenModalFromBottom}>
                        <LeftDownBlock />
                    </div>
                </div>
                <div className="w-px bg-gray-400"></div>
                <div className="w-full md:w-[80%] bg-gray-700 rounded-br-lg rounded-tr-lg p-2">
                    <CentralBlock openAboutMe={handleOpenModalAboutMe}/>
                </div>
            </div>
        </div>
    );
}