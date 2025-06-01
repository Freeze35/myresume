// components/LeftDownBlock.tsx

import React from "react";

interface CentralBlockProps {
    openAboutMe: () => void;
}

const CentralBlock: React.FC<CentralBlockProps> = ({openAboutMe}) => {

    const personalSkill = process.env.NEXT_PUBLIC_PERSONAL_SKILLS || "";

    function stringToArray(input: string) {
        return input
            .split(",")             // Разделяем по запятой
            .map(item => item.trim()) // Удаляем пробелы вокруг
            .filter(item => item.length > 0); // Убираем пустые элементы
    }

    return (
        <div
            className="flex flex-col w-full h-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
            <div className="pl-2 space-y-2 rounded-lg bg-gray-800 py-2 my-2 ">
                <h3 className="text-gray-300 font-semibold sm:text-sm md:text-xl lg:text-xl">
                    Golang разработчик</h3>
            </div>

            {/* Пожелания по условиям */}
            <div className="pl-2 space-y-2 rounded-lg bg-gray-800 py-2">
                <div>
                    <h3 className="text-gray-300 font-semibold sm:text-sm md:text-lg lg:text-xl">
                        Пожелания по условиям</h3>
                    <h3 className="text-gray-400 font-semibold sm:text-sm md:text-base lg:text-l pl-2 pt-1">
                        График работы</h3>
                    <div className="group flex-col items-center space-x-2 p-2">
                        <p className="text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            Полный день, Гибкий график, Удалённая работа
                        </p>
                    </div>
                </div>
                {/* Пожелания по условиям */}
                <div>
                    <h3 className="text-gray-400 font-semibold sm:text-sm md:text-base lg:text-l pl-2">
                        График работы</h3>
                    <div className="group flex-col items-center space-x-2 p-2">
                        <p className="text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            Полный день, Гибкий график, Удалённая работа
                        </p>
                    </div>
                </div>
                {/* Желательное время в пути до работы */}
                <div>
                    <h3 className="text-gray-400 font-semibold sm:text-sm md:text-base lg:text-l pl-2">
                        Желательное время в пути до работы
                    </h3>
                    <div className="group flex-col items-center space-x-2 p-2">
                        <p className="text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            Не имеет значения
                        </p>
                    </div>
                </div>
                {/* Командировки */}
                <div>
                    <h3 className="text-gray-400 font-semibold sm:text-sm md:text-base lg:text-l pl-2">
                        Командировки
                    </h3>
                    <div className="group flex-col items-center space-x-2 p-2">
                        <p className="text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            Возможно
                        </p>
                    </div>
                </div>
            </div>

            {/* Образование */}
            <div className="pl-2 space-y-2 rounded-lg bg-gray-800 py-2 mt-2">
                <div>
                    <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">
                        Образование</h3>
                    <div className="group flex-col items-center space-x-2">
                        <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            Бакалавр <br/>
                            Восточно-Сибирский государственный университет технологий и управления, Улан-Удэ <br/>
                            2016<br/>
                            Менеджмент<br/>
                        </p>
                    </div>
                </div>
            </div>
            {/* График работы */}
            <div className="pl-2 space-y-2 rounded-lg bg-gray-800 py-2 mt-2">
                <div>
                    <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">
                        График работы</h3>
                    <div className="group flex-col items-center space-x-2">
                        <p className="text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap sm:text-sm md:text-base lg:text-lg">
                            Полный день, Гибкий график, Удалённая работа
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">Навыки</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {stringToArray(personalSkill).map((item: string, index: number) => (
                            <div
                                key={index}
                                className="bg-gray-200 px-3 py-1 rounded-full"
                            >
                                <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* О себе */}
            <div className="pl-2 space-y-2 rounded-lg bg-gray-800 py-2 mt-2 cursor-zoom-in"
                 onClick={() => openAboutMe()}>
                <div>
                    <h3 className="text-gray-300 text-lg font-semibold sm:text-sm md:text-base lg:text-lg">
                        О себе
                    </h3>
                    <div
                        className="group flex-col items-center space-x-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent pr-2">
                        <div className="text-gray-400 flex flex-col rounded-lg px-2 ">
                            <div className="bg-gray-900 rounded-lg p-4 ">
                                <p className="text-gray-200 pr-2 py-1 sm:text-sm md:text-base lg:text-lg">
                                    CRM-система
                                </p>
                                <div>
                                    <a href="https://github.com/Freeze35/CRM_System <br/>"
                                       className="text-blue-400 hover:text-blue-500 ">
                                        Ссылка на github
                                    </a>
                                </div>

                                <p>
                                    Спроектировал архитектуру системы, включающую 10+ микросервисов (авторизация, чаты, таймеры,
                                    администрирование, логирование, Redis, база данных и др.), с визуализацией внутренней
                                    структуры в Figma (CRM_DIAGRAM). <br/>
                                    CRM-система на основе микросервисной архитектуры (в разработке) <br/>
                                    построенную на микросервисной архитектуре. <br/>
                                    Система включает модули авторизации, управления чатами, таймерами, администрирования,
                                    отправки писем, логирования и кэширования. <br/>
                                    Реализовал безопасное взаимодействие через gRPC и HTTPS с использованием NGINX как шлюза
                                    для маршрутизации и JWT-аутентификации. <br/>
                                    Проект направлен на упрощение процессов управления клиентами и автоматизацию задач,
                                    таких как уведомления и учет времени. <br/>
                                    Настроил NGINX как обратный прокси и балансировщик нагрузки с поддержкой TLS <br/>
                                    Интегрировал PostgreSQL для хранения данных, Redis для кэширования (с TTL и SetNX),
                                    RabbitMQ для асинхронной обработки задач (уведомления, сообщения) и Loki/Grafana для
                                    логирования и мониторинга. <br/>
                                    Реализовал меры безопасности: TLS-шифрование, JWT-аутентификация, gRPC keepalive,
                                    транзакции SQL, изоляция в Docker-сети (crm-network), и защита от паники с
                                    RecoveryInterceptor. <br/>
                                    Контейнеризировал сервисы с помощью Docker и Docker Compose, обеспечив модульность и
                                    простоту развертывания. <br/>
                                    Документировал архитектуру и микросервисы в Markdown, включая описания функциональности,
                                    эндпоинтов и мер безопасности. <br/>
                                </p>
                                <p className="text-gray-200 pr-2 py-1 sm:text-sm md:text-base lg:text-lg">
                                    Технологии
                                </p>
                                <p>
                                    Языки и фреймворки: Go, gRPC, REST API <br/>
                                    Инфраструктура: Docker, Docker Compose, NGINX <br/>
                                    Базы данных и очереди: PostgreSQL, Redis, RabbitMQ <br/>
                                    Логирование и мониторинг: Loki, Grafana <br/>
                                    Безопасность: TLS, JWT , HSTS <br/>
                                    Инструменты: Figma, Git <br/>
                                </p>
                                <p className="text-gray-200 pr-2 py-1 sm:text-sm md:text-base lg:text-lg">
                                    Результаты
                                </p>
                                <p>
                                    Создал функциональную CRM-систему с модульной архитектурой, готовой к
                                    масштабированию.<br/>
                                    Обеспечил высокую безопасность и производительность благодаря TLS, JWT, Redis и
                                    асинхронной обработке.<br/>
                                    Продолжаю развивать проект, добавляя новые функции (например, интеграцию с внешними API)
                                    и улучшая производительность.<br/>
                                </p>
                            </div>

                            <p className="text-gray-200 pr-2 py-2 sm:text-sm md:text-base lg:text-lg ">
                                Другие проекты
                            </p>

                            <div className="bg-gray-900 rounded-lg p-4 ">
                                <p className="text-gray-200 pr-2 py-2 sm:text-sm md:text-base lg:text-lg">
                                    Онлайн-магазин
                                </p>
                                <div>
                                    <a href="https://github.com/Freeze35/online-store"
                                       className="inline-block text-blue-400 hover:text-blue-500  ">
                                        Ссылка на github
                                    </a>
                                </div>
                                <div>
                                    <a href="https://store-petr-elshin-github-freeze35.netlify.app/shop"
                                       className="text-blue-400 hover:text-blue-500 ">
                                        Ссылка на проект
                                    </a>
                                </div>
                                <p>
                                    Разработал полнофункциональный онлайн-магазин с каталогом товаров, корзиной и
                                    оформлением заказов.<br/>
                                    Реализовал фронтенд и интегрировал тестовый бэкенд, который активируется с задержкой
                                    из-за ограничений бесплатного хостинга.<br/>
                                </p>

                                <p>
                                    (Может быть задержка серверных данных из за деплоя на бесплатный сервер 2 минуты.)<br/>
                                    Создал адаптивный интерфейс с использованием современных JavaScript-фреймворков.<br/>
                                    Интегрировал REST API для управления товарами и заказами.<br/>
                                    Настроил деплой на Vercel и Netlify, оптимизировав загрузку страниц.<br/>
                                    Технологии: JavaScript, HTML, CSS, REST API, Vercel, Netlify<br/>
                                    CI/CD инттеграция проекта с и Vercel, Netlify<br/>
                                </p>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-4 mt-4">
                                <p className="text-gray-200 pr-2 pb-2 sm:text-sm md:text-base lg:text-lg">
                                    Мессенджер на основе WhatsApp Green API
                                </p>
                                <p>
                                    Реализовал веб-приложение для обмена сообщениями с использованием WhatsApp Green
                                    API, обеспечивающее отправку и получение сообщений в реальном времени.<br/>
                                    Разработал интерфейс для взаимодействия с API WhatsApp.<br/>
                                    Реализовал асинхронную обработку сообщений.<br/>
                                    Оптимизировал приложение для работы на Netlify.<br/>
                                    Технологии: JavaScript, WhatsApp Green API, Netlify<br/>
                                </p>
                            </div>

                            <div className="bg-gray-900 rounded-lg p-4 mt-4">
                                <p className="text-gray-200 pr-2 pb-2 sm:text-sm md:text-base lg:text-lg">
                                    Поиск книг с Google Books API
                                </p>
                                <div>
                                    <a href="https://github.com/Freeze35/online-store"
                                       className="https://github.com/Freeze35/react-search-books">
                                        Ссылка на github
                                    </a>
                                </div>
                                <div>
                                    <a href="https://githubfreeze35petrelshin.netlify.app/"
                                       className="text-blue-400 hover:text-blue-500 ">
                                        Ссылка на проект
                                    </a>
                                </div>
                                <p>
                                    Создал веб-приложение для поиска книг с использованием Google Books API,
                                    позволяющее пользователям находить книги по ключевым словам и просматривать детали.
                                    Реализовал поисковую систему с фильтрацией результатов.
                                    Разработал адаптивный интерфейс для удобного взаимодействия.
                                    Настроил деплой на Netlify.
                                    Технологии: JavaScript, Google Books API, Netlify
                                </p>
                            </div>

                            <p className="text-gray-200 pr-2 py-2 sm:text-sm md:text-base lg:text-lg">
                                P.S
                            </p>
                            <p>
                                Я стремлюсь развивать свои навыки в программировании, изучая новые технологии и
                                подходы. <br/>
                                Несмотря на трудности и ошибки, я продолжаю учиться, решать сложные задачи и
                                совершенствовать свои проекты. <br/>
                                Моя цель — создавать надежные и масштабируемые решения, которые приносят пользу
                                пользователям.<br/>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CentralBlock;