import React, { useState } from 'react';
import Image from 'next/image';
import Dog from '@/types/dogData';

interface DogEditFormProps {
    dog: Dog;
    onSave: (updatedDog: Dog) => void;
    onCancel: () => void;
}

const DogEditForm: React.FC<DogEditFormProps> = ({ dog, onSave, onCancel }) => {
    const [name, setName] = useState(dog.name);
    const [birthday, setBirthday] = useState(dog.birthday);
    const [profileImage, setProfileImage] = useState(dog.profileImage);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
        setProfileImage(event.target.files[0]);
        }
    };

    const handleSave = () => {
        onSave({ ...dog, name, birthday, profileImage });
    };

    return (
        <form onSubmit={handleSave} className="p-4 bg-white rounded-md shadow-md">
        <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-1">名前</label>
            <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
            />
        </div>
        <div>
            <label htmlFor="birthday" className="block text-lg font-semibold text-gray-700 mb-1">誕生日</label>
            <input
            id="birthday"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
            />
        </div>
        <div>
            <label htmlFor="profileImage" className="block text-lg font-semibold text-gray-700 mb-1">プロフィール画像</label>
                {profileImage instanceof File ? (
                    <p>画像ファイルが選択されています。</p>
                ) : profileImage ? (
                    <div className="relative w-24 h-24">
                        <Image
                            src={profileImage.src}
                            alt="Current"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full mx-auto mb-4"
                        />
                    </div>
                ) : null}
                
            <input
                id="profileImage"
                type="file"
                onChange={handleImageChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
            />
        </div>
        <div className="flex space-x-4">
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md text-lg">保存</button>
            <button type="button" onClick={onCancel} className="w-full bg-gray-500 text-white py-2 px-4 rounded-md text-lg">キャンセル</button>
        </div>
        </form>
    );
};

export default DogEditForm;
