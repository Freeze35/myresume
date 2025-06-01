import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    origin: { x: number; y: number };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, origin }) => {
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;


    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            <motion.div
                className="absolute inset-0 bg-black/90 flex items-center justify-center"
                onClick={handleBackgroundClick}
                initial={false}
                animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="bg-gray-800 h-[60%] w-[40%] rounded-lg flex items-center justify-center relative"
                    initial={false}
                    animate={{
                        x: isOpen ? 0 : origin.x - centerX,
                        y: isOpen ? 0 : origin.y - centerY,
                        scale: isOpen ? 1 : 0.2,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 50 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-5 text-gray-500 hover:text-gray-700 text-lg cursor-pointer"
                    >
                        ✕
                    </button>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Modal;
