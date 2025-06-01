// pages/index.tsx
import CircularImage from "@/module/CircularImage";
import React, {useEffect, useRef, useState} from "react";
import Modal from "@/modals/ModalWindowImage";
import CircularImageFull from "@/module/CircularImageFull";
import PersonalData from "@/blocks/PersonalData";
import LeftDownBlock from "@/blocks/LeftDownBlock";
import InsideWorkExperience from "@/module/InsideWorkExpirience";
import ModalLeftBlock from "@/modals/ModalWindowLeftBlock";
import CentralBlock from "@/blocks/CentralBlock";
import ModalCentralBlock from "@/modals/ModalWindowCentralBlock";
import InsideAboutMe from "@/module/InsideAboutMe";
import {FiZoomIn} from "react-icons/fi";

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

    useEffect(() => {
        const handlePopState = () => {
            if (stateModalTop) {
                setOpenModalTop(false);
            } else if (stateModalBottom) {
                setOpenModalBottom(false);
            } else if (stateModalAboutMe) {
                setOpenModalAboutMe(false);
            }
        };

        if (stateModalTop || stateModalBottom || stateModalAboutMe) {
            window.addEventListener("popstate", handlePopState);
        }

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [stateModalTop, stateModalBottom, stateModalAboutMe]);

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
                <div className="p-2 sm:p-1 space-y-2">
                    <InsideWorkExperience />
                </div>
            </ModalLeftBlock>
            <ModalCentralBlock isOpen={stateModalAboutMe} onClose={() => setOpenModalAboutMe(false)} origin={originAboutMe}>
                <div className="p-2 sm:p-1 space-y-2">
                    <InsideAboutMe />
                </div>
            </ModalCentralBlock>
            <div className="flex flex-col md:flex-row flex-1 gap-2 sm:gap-1">
                <div className="w-full md:w-[25%] my-2 flex flex-col rounded-lg shadow-xl max-w-full overflow-hidden">
                    <div
                        ref={avatarRef}
                        className="relative h-[25%] cursor-zoom-in bg-gray-800 rounded-tl-lg flex items-center justify-center"
                        onClick={handleOpenModal}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-400 duration-200 z-10"
                            aria-label="Скопировать телефон"
                        >
                            <FiZoomIn className="w-6 h-6" />
                        </button>
                        <CircularImage alt="user photo" />
                    </div>
                    <hr className="border-t border-gray-400" />
                    <div className="h-[35%] sm:h-[40%] bg-gray-800 p-2 sm:p-1 overflow-hidden">
                        <PersonalData />
                    </div>
                    <hr className="border-t border-gray-400" />
                    <div
                        className="h-[40%] sm:h-[40%] bg-gray-800 p-2 sm:p-1 rounded-bl-lg overflow-hidden cursor-zoom-in"
                        ref={leftBottomRef}
                        onClick={handleOpenModalFromBottom}
                    >
                        <LeftDownBlock />
                    </div>
                </div>

                <div className=" my-2 w-full md:w-[75%] bg-gray-700 rounded-lg sm:rounded-md p-2 sm:p-3 ">
                    <CentralBlock openAboutMe={handleOpenModalAboutMe} />
                </div>
            </div>
        </div>
    );
}