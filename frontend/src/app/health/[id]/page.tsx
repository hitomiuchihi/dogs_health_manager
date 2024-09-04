'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dogs from '@/dummyData/dogsDummyData'
import Header from '@/components/public/Header';
import Sidebar from '@/components/public/Sidebar';
import Footer from '@/components/public/Footer';
import Dog from '@/types/dogData'
import healthData from '@/dummyData/healthDummyData';
import HealthData from '@/types/healthData';
import HealthList from '@/components/healthPage/HealthList';
import StatusChart from '@/components/healthPage/StatusChart';
import StoolChart from '@/components/healthPage/StoolChart';
import WeightChart from '@/components/healthPage/WeightChart';

const HealthPage = () => {
    const params = useParams();
    const id = Number(params.id);

    // 指定した dogId に一致するデータをフィルタリング
    const filteredData: HealthData[] = healthData.filter(data => data.dogId === id);

    // 詳細を表示するための状態管理
    const [selectedData, setSelectedData] = useState<HealthData | null>(null);

    const handleDetails = (data: HealthData) => {
        setSelectedData(data);
    }

    return(
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100">
                    <h2 className="text-3xl font-semibold mb-4">犬の健康記録</h2>
                    <HealthList data={filteredData} onDetails={handleDetails} />
                    {selectedData && (
                        <div className="mt-8 p-4 bg-white rounded shadow-md">
                            <h3 className="text-xl font-bold">詳細情報</h3>
                            <p>登録日時: {selectedData.date.split('T')[0]}</p>
                            <p>状態: {selectedData.status}</p>
                            <p>便の状態: {selectedData.stool}</p>
                            <p>体重: {selectedData.weight}kg</p>
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    )
}


export default HealthPage;