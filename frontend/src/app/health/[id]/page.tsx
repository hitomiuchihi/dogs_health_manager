'use client'

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/public/Header';
import Sidebar from '@/components/public/Sidebar';
import Footer from '@/components/public/Footer';
import HealthData from '@/types/healthData';
import healthData from '@/dummyData/healthDummyData';
import HealthList from '@/components/healthPage/HealthList';

const HealthPage = () => {
    const params = useParams();
    const id = Number(params.id);

    // ページング用の状態
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // 1ページに表示する項目数

    // 指定した dogId に一致するデータをフィルタリング
    const filteredData: HealthData[] = healthData.filter(data => data.dogId === id);

    // 現在のページに表示されるデータ
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // 詳細を表示するための状態管理
    const [selectedData, setSelectedData] = useState<HealthData | null>(null);

    const handleDetails = (data: HealthData) => {
        setSelectedData(data);
    }

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        setSelectedData(null); // ページを切り替えた時に詳細表示をリセット
    }

    return(
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100 flex flex-col lg:flex-row lg:space-x-4">
                    <div className="lg:w-1/3">
                        <HealthList 
                            data={paginatedData} 
                            onDetails={handleDetails} 
                            totalItems={filteredData.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <div className="lg:w-2/3 mt-8 lg:mt-0">
                        {selectedData ? (
                            <div className="p-4 bg-white rounded shadow-md">
                                <h3 className="text-xl font-bold">詳細情報</h3>
                                <p>登録日時: {selectedData.date.split('T')[0]}</p>
                                <p>状態: {selectedData.status}</p>
                                <p>便の状態: {selectedData.stool}</p>
                                <p>体重: {selectedData.weight}kg</p>
                                <p>メモ: {selectedData.memo}</p>
                            </div>
                        ) : (
                            <div className="p-4 bg-gray-200 rounded shadow-md">
                                <p>リストから健康記録を選択してください。</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default HealthPage;
