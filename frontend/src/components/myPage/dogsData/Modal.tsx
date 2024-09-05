// components/Modal.tsx
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
