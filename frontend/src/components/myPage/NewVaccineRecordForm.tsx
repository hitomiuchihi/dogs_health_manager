'use client'
import React, { useState } from 'react';
import Dog from '@/types/dogData'

interface NewVaccineRecordFormProps {
    dogs: Dog[];
    onSubmit: (data: any) => void;
}

const  AddVaccineRecordForm: React.FC<NewVaccineRecordFormProps> = ({ dogs, onSubmit }) => {
    const [selectedDog, setSelectedDog] = useState<string>('');
    const [vaccineType, setVaccineType] = useState<string>('');
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [certificate, setCertificate] = useState<File|null>(null);

    // フォーム送信の制御関数
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        //必須項目の確認
        if (!selectedDog || !vaccineType || !date) {
            alert('全ての必須項目を入力してください。');
            return;
        }
        
        // DBに送信するデータ
        const formData = {
            dogId: dogs.find(dog => dog.name === selectedDog)?.id,
            vaccineType,
            date,
            certificate,
        };

        // データ送信
        onSubmit(formData);
    };

    // 証明書のアップロード制御関数
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files){
            setCertificate(event.target.files[0]);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4 bg-white rounded-md shadow-md">
        <div>
            <label htmlFor="dogName" className="block text-lg font-semibold text-gray-700 mb-1">愛犬の名前</label>
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
            <label htmlFor="vaccineType" className="block text-lg font-semibold text-gray-700 mb-1">接種したワクチン</label>
            <select
                id="vaccineType"
                value={vaccineType}
                onChange={(e) => setVaccineType(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
            >
            <option value="">選択してください</option>
            <option value="5種">5種</option>
            <option value="6種">6種</option>
            <option value="7種">7種</option>
            <option value="8種">8種</option>
            <option value="狂犬病">狂犬病</option>
            </select>
        </div>

        <div>
            <label htmlFor="date" className="block text-lg font-semibold text-gray-700 mb-1">ワクチン接種日</label>
            <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
            />
        </div>
        <div>
            <label htmlFor="certificate" className="block text-lg font-semibold text-gray-700 mb-1">証明書</label>
            <input
                id="certificate"
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
            />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg">追加</button>
        </form>
    );
}

export default AddVaccineRecordForm;
