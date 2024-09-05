import React from 'react';
import Dog from '@/types/dogData';
import Image from 'next/image';

interface DogInfoProps {
    dog: Dog;
    onEdit: () => void;
    onDelete: () => void;
}

const DogInfo: React.FC<DogInfoProps> = ({ dog, onEdit, onDelete }) => {
    return (
        <div className="p-4 bg-white rounded-md shadow-md max-w-xs flex-shrink-0">
            {dog.profileImage instanceof File ? (
                <p>画像ファイルが選択されています。</p>
            ) : dog.profileImage ? (
                <div className="relative w-32 h-32 mb-4 mx-auto">
                    <Image
                        src={dog.profileImage.src}
                        alt={dog.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
            ) : (
                <p>画像がありません</p>
            )}
            <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">{dog.name}</h3>
            <p className="text-gray-600 mb-4 text-center">誕生日: {dog.birthday}</p>
            <div className="flex justify-center space-x-2">
                <button onClick={onEdit} className="bg-blue-500 text-white py-2 px-4 rounded-md">編集する</button>
                <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded-md">削除する</button>
            </div>
        </div>
    );
};

export default DogInfo;
