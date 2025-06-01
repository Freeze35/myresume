// components/LeftDownBlock.tsx

import React from "react";

const LeftDownBlock: React.FC = () => {


    return (
        <div className="flex flex-col max-w-full">
            <div className="pl-2 space-y-2">
                {/* Expirience */}
                <div>
                    <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">Опыт работы</h3>
                    <div className="group flex-col items-center space-x-2 bg-gray-700 rounded-lg pl-2">
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