// components/LeftDownBlock.tsx

import React from "react";
import {FiZoomIn} from "react-icons/fi";

const LeftDownBlock: React.FC = () => {


    return (
        <div className="flex flex-col max-w-full">
            <div className="pl-2 space-y-2">
                {/* Expirience */}
                <div>
                    <div className="relative flex flex-row pb-2">
                        <h3 className="ml-2 text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">
                            Опыт работы
                        </h3>
                        <button
                            className="absolute top-1 right-1 text-gray-400 duration-200 z-10"
                            aria-label="Скопировать телефон"
                        >
                            <FiZoomIn className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="group flex-col items-center space-x-2 bg-gray-700 rounded-lg px-2 mx-2">
                        <p className="text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            Программист
                        </p>
                        <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            RBSOFT
                        </p>
                        <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-xs md:text-sm lg:text-base">
                            Май 2023 — Июнь 2024 (1 год 2 месяца)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftDownBlock;