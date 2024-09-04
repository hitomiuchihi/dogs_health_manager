'use client'

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import dogs from '@/dummyData/dogsDummyData';
import vaccineData from '@/dummyData/vaccineDummyData';
import Header from '@/components/public/Header';
import Sidebar from '@/components/public/Sidebar';
import Footer from '@/components/public/Footer';
import Dog from '@/types/dogData';
import VaccineList from '@/components/vaccinePage/VaccineList';
import VaccineData from '@/types/vaccineData';

const VaccinePage = () => {
    const params = useParams();
    const id = Number(params.id);

    const dog = dogs.find(dog => dog.id === id);

    // 指定した dogId に一致するワクチンデータをフィルタリング
    const filteredData: VaccineData[] = vaccineData.filter(data => data.dogId === id);

    // 詳細を表示するための状態管理
    const [selectedData, setSelectedData] = useState<VaccineData | null>(null);

    const handleDetails = (data: VaccineData) => {
        setSelectedData(data);
    }

    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100 lg:flex lg:flex-row">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-semibold mb-4">{dog?.name}のワクチン記録</h2>
                        <VaccineList data={filteredData} onDetails={handleDetails} />
                    </div>
                    <div className="lg:w-2/3 lg:ml-4 mt-8 lg:mt-0">
                        {selectedData ? (
                            <div className="p-4 bg-white rounded shadow-md">
                                <h3 className="text-xl font-bold">詳細情報</h3>
                                <p>ワクチンタイプ: {selectedData.vaccineType}</p>
                                <p>接種日時: {selectedData.date.split('T')[0]}</p>
                                <p>証明書:</p>
                                {selectedData.certificateImage ? (
                                    <Image
                                        src={selectedData.certificateImage}
                                        alt="証明書"
                                        width={500}
                                        height={300}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-[500px] h-[300px] bg-gray-200 text-gray-600">
                                        証明書の画像データがありません
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="p-4 bg-gray-200 rounded shadow-md">
                                <p>リストからワクチン記録を選択してください。</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default VaccinePage;
