// module/CircularImage.tsx
"use client"
import React from "react";

const InsideWorkExperience: React.FC = () => {

    return (

        <div className="pl-4 pt-4 space-y-2">
            {/* Experience */}
            <div>
                <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">Опыт работы</h3>
                <div className="group flex-col items-center space-x-2">
                    <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                        RBSOFT
                    </p>
                    <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                        Май 2023 — Июнь 2024 (1 год 2 месяца)
                    </p>
                </div>
            </div>
            {/* Description */}
            <div>
                <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">Описание</h3>
                <div className="group flex-col items-center space-x-2">
                    <p className="text-gray-400 text-ellipsis overflow-hidden  sm:text-sm md:text-base lg:text-lg">
                        Работал над разработкой приложением для мобильной торговли.<br />
                        Организовал релизную версию приложения. <br />
                        Перенес визуальный движок на чистый xml во избежания внутри структурных проблем предыдущего движка (Jetpack Compose),
                        а также улучшения быстродействия. <br />
                        Внутри приложения проводились улучшения визуального стиля, работа с базой данных.
                        Создание и визуализация аналитики.<br />

                    </p>
                </div>
            </div>

        </div>
    );
};

export default InsideWorkExperience;