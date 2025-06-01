import React from 'react';
import Image from 'next/image';
import myPhoto from '../../assets/favicon.ico'; // Импортированное изображение

interface CircularImageProps {
    alt: string;
    width?: number;
    height?: number;
    containerClassName?: string; // Для кастомизации контейнера
}

const CircularImage: React.FC<CircularImageProps> = ({
                                                         alt
                                                     }) => {
    return (
        <div className="relative w-[100%] h-[100%] border-gray-700 sm:w-32 md:w-64 lg:w-100 sm:h-32 md:h-64 lg:h-100 rounded-full overflow-hidden">
            <Image
                src={myPhoto}
                alt={alt}
                fill
            />
        </div>
    );
};

export default CircularImage;