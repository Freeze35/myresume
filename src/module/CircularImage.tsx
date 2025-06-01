// module/CircularImage.tsx
import React from "react";
import Image from "next/image";
import myPhoto from "../../public/assets/photo.png";

interface CircularImageProps {
    alt: string;
    containerClassName?: string; // Для кастомизации контейнера
}

const CircularImage: React.FC<CircularImageProps> = ({ alt, containerClassName }) => {
    return (
        <div
            className={`relative w-full max-w-[200px] aspect-square rounded-full overflow-hidden border-1 border-gray-700 ${containerClassName || ""}`}
        >
            <Image
                src={myPhoto}
                alt={alt}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
            />
        </div>
    );
};

export default CircularImage;