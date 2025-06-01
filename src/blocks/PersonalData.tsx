// components/PersonalData.tsx

import React, {useEffect, useRef} from "react";
import {FaCopy} from "react-icons/fa6";
import {debounce} from "lodash";

const PersonalDataContent: React.FC = () => {
    const [copied, setCopied] = React.useState<"phone" | "mail" | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
    const mail = process.env.NEXT_PUBLIC_MAIL || "";
    const name = process.env.NEXT_PUBLIC_NAME || "";

    const copyToClipboard = debounce(async (text: string, type: "phone" | "mail") => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }
            setCopied(type);
            console.log("Copied:", type); // Для отладки
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setCopied(null);
                timerRef.current = null;
            }, 1000);
        } catch (err) {
            console.error("Ошибка копирования:", err);
        }
    }, 200);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <div className="flex flex-col">
            <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg pl-2 pb-2">Персональные данные</h3>
            <div className="pl-4 space-y-3 pe-2">
                {/* Name */}
                <div>
                    <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">{name}</h3>
                    <div
                        className="group relative flex items-center space-x-2"
                    >
                        <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                           11.04.1995 (30 лет)
                        </p>
                    </div>
                </div>
                {/* Phone */}
                <div>
                    <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">Телефон</h3>
                    <div
                        className="group relative flex items-center space-x-2 cursor-pointer"
                        onClick={() => copyToClipboard(phoneNumber, "phone")}
                    >
                        {/* Tooltips */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-6 hidden group-hover:flex bg-gray-400 text-gray-800 rounded py-1 px-2 text-xs sm:text-xs whitespace-nowrap">
                            Скопировать телефон
                        </div>
                        {copied === "phone" && (
                            <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-500 text-gray-300 rounded py-1 px-2 text-xs sm:text-xs animate-fadeIn">
                                Скопировано
                            </div>
                        )}

                        {/* Текст + иконка */}
                        <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            {phoneNumber}
                        </p>
                        <button
                            className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            aria-label={"Скопировать телефон"}
                        >
                            <FaCopy />
                        </button>
                    </div>
                </div>

                {/* Mail */}
                <div>
                    <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-base">{"Почта"}</h3>
                    <div
                        className="group relative flex items-center space-x-2 cursor-pointer"
                        onClick={() => copyToClipboard(mail, "mail")}
                    >
                        <div className="absolute left-1/2 -translate-x-1/2 -top-6 hidden group-hover:flex bg-gray-400 text-gray-800 rounded py-1 px-2 text-xs sm:text-xs whitespace-nowrap">
                            Скопировать почту
                        </div>
                        {copied === "mail" && (
                            <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-500 text-gray-300 rounded py-1 px-2 text-xs sm:text-xs animate-fadeIn">
                                Скопировано
                            </div>
                        )}
                        <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            {mail}
                        </p>
                        <button
                            className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            aria-label={"Скопировать почту"}
                        >
                            <FaCopy />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    0% {
                        opacity: 0.2;
                        transform: translateY(5px);
                    }
                    10% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    60% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(5px);
                    }
                }

                .animate-fadeIn {
                    animation-name: fadeIn;
                    animation-duration: 1s;
                    animation-timing-function: ease-in-out;
                }
            `}</style>

        </div>
    );
};


export default PersonalDataContent;