"use client";

import React, { useState, useEffect } from 'react';
import Dog from '@/types/dogData';

interface NewHealthRecordFormProps {
    dogs: Dog[];
    onSubmit: (data: any) => void;
}

const NewHealthRecordForm: React.FC<NewHealthRecordFormProps> = ({ dogs, onSubmit }) => {
    const [selectedDog, setSelectedDog] = useState<string>('');
    const [dogId, setDogId] = useState<number | null>(null);
    const [condition, setCondition] = useState<string>('');
    const [stool, setStool] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [memo, setMemo] = useState<string>('');

    useEffect(() => {
        const selectedDogData = dogs.find(dog => dog.name === selectedDog);
        setDogId(selectedDogData ? selectedDogData.id : null);
    }, [selectedDog, dogs]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({
            dogId,
            condition,
            stool,
            weight,
            date,
            memo
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4 bg-white rounded-md shadow-md">
            <div>
                <label htmlFor="dogName" className="block text-lg font-semibold text-gray-700 mb-1">犬の名前</label>
                <select
                    id="dogName"
                    value={selectedDog}
                    onChange={(e) => setSelectedDog(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                >
                    <option value="">選択してください</option>
                    {dogs.map(dog => (
                        <option key={dog.id} value={dog.name}>{dog.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="condition" className="block text-lg font-semibold text-gray-700 mb-1">体調</label>
                <select
                    id="condition"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                >
                    <option value="">選択してください</option>
                    <option value="元気">元気</option>
                    <option value="普通">普通</option>
                    <option value="不調">不調</option>
                </select>
            </div>
            <div>
                <label htmlFor="stool" className="block text-lg font-semibold text-gray-700 mb-1">うんち</label>
                <select
                    id="stool"
                    value={stool}
                    onChange={(e) => setStool(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                >
                    <option value="">選択してください</option>
                    <option value="快便">快便</option>
                    <option value="硬め">硬め</option>
                    <option value="便秘">便秘</option>
                    <option value="軟便">軟便</option>
                    <option value="下痢">下痢</option>
                    <option value="水様便">水様便</option>
                </select>
            </div>
            <div>
                <label htmlFor="weight" className="block text-lg font-semibold text-gray-700 mb-1">体重</label>
                <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                    min="0"
                    step="0.1"
                />
            </div>
            <div>
                <label htmlFor="date" className="block text-lg font-semibold text-gray-700 mb-1">登録日</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                />
            </div>
            <div>
                <label htmlFor="memo" className="block text-lg font-semibold text-gray-700 mb-1">メモ</label>
                <textarea
                    id="memo"
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                    rows={4}
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg">追加</button>
        </form>
    );
};

export default NewHealthRecordForm;
