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
        <div className="relative w-[80%] h-[80%] sm:w-80 md:w-84 lg:w-100 sm:h-80 md:h-84 lg:h-100 rounded-full overflow-hidden">
            <Image
                src={myPhoto}
                alt={alt}
                fill
                objectFit="cover" // Ensures the image maintains aspect ratio
                objectPosition="center" // Centers the image within the container
                placeholder="blur"
            />
        </div>
    );
};

export default CircularImageFull;