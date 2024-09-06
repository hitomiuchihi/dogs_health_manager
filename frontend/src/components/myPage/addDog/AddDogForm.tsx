"use client";

import React, { useState } from 'react';

interface AddDogFormProps {
    onSubmit: (data: any) => void;
}

const AddDogForm: React.FC<AddDogFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [photo, setPhoto] = useState<File | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('birthDate', birthDate);
        if (photo) formData.append('photo', photo);
        onSubmit(formData);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setPhoto(event.target.files[0]);
        }
    };

    return (
        <div className="flex justify-center items-center flex-1">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4 bg-white rounded-md shadow-md">
                <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-1">愛犬の名前</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                        placeholder="例: ぺこ"
                    />
                </div>
                <div>
                    <label htmlFor="birthDate" className="block text-lg font-semibold text-gray-700 mb-1">誕生日</label>
                    <input
                        id="birthDate"
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                    />
                </div>
                <div>
                    <label htmlFor="photo" className="block text-lg font-semibold text-gray-700 mb-1">愛犬の写真</label>
                    <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg">追加</button>
            </form>
        </div>
    );
};

export default AddDogForm;
