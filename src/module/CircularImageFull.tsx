import React from 'react';
import Image from 'next/image';
import myPhoto from "../../public/assets/photo.png"; // Импортированное изображение
interface CircularImageProps {
    alt: string;
    width?: number;
    height?: number;
    containerClassName?: string; // Для кастомизации контейнера
}

const CircularImageFull: React.FC<CircularImageProps> = ({
                                                         alt
                                                     }) => {
    return (
        <div className="relative w-[80%] h-[80%] border-gray-700 sm:w-64 md:w-64 lg:w-100 sm:h-64 md:h-64 lg:h-100 rounded-full overflow-hidden">
            <Image
                src={myPhoto}
                alt={alt}
                fill
                placeholder="blur"
            />
        </div>
    );
};

export default CircularImageFull;