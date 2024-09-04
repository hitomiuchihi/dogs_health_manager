'use client'

import React, { useState } from 'react';
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import Sidebar from '@/components/public/Sidebar';
import NewHealthRecordForm from '@/components/myPage/NewHealthRecordForm';
import Dog from '@/types/dogData';
import dogs from '@/dummyData/dogsDummyData'


export default function MyPage() {
    const handleFormSubmit = (data: any) => {
        console.log('フォーム送信データ:', data);
        // ここでデータをサーバーに送信するなどの処理を行う
    };

    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100">
                    <h2 className="text-3xl font-semibold mb-4">マイページ</h2>
                    <p>愛犬情報を追加する</p>
                    <p>愛犬情報を編集、削除する</p>
                    <p>健康記録を追加する</p>
                    <p>健康記録を編集、削除する</p>
                    <p>ワクチン記録を追加する</p>
                    <p>ワクチン記録を編集、削除する</p>
                    <NewHealthRecordForm dogs={dogs} onSubmit={handleFormSubmit} />
                </main>
            </div>
            <Footer />
        </div>
    );
}
