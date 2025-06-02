// module/CircularImage.tsx
"use client"
import React from "react";

const InsideWorkExperience: React.FC = () => {

    return (

        <div className="pl-4 pt-4 space-y-2">
            {/* Experience */}
            <div>
                <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">Опыт работы</h3>
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-400 sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
                        RBSOFT
                    </p>
                    <p className="text-gray-400 sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
                        Май 2023 — Июнь 2024 (1 год 2 месяца)
                    </p>
                </div>
            </div>
            {/* Description */}
            <div>
                <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">Описание</h3>
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-400 sm:text-sm md:text-base lg:text-lg overflow-wrap break-word">
                        Работал над разработкой приложения для мобильной торговли.<br />
                        Организовал релизную версию приложения.<br />
                        Перенес визуальный движок на чистый XML во избежание внутриструктурных проблем предыдущего движка (Jetpack Compose), а также для улучшения быстродействия.<br />
                        Внутри приложения проводились улучшения визуального стиля, работа с базой данных. Создание и визуализация аналитики.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InsideWorkExperience;