'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import dogs from '../../../dummyData/dogsDummyData'
import Header from '@/components/public/Header';
import Sidebar from '@/components/public/Sidebar';
import Footer from '@/components/public/Footer';
import Dog from '../../../types/dogData'

const VaccinePage = () => {
    const params = useParams();
    const id = Number(params.id);

    console.log(id)
// idから犬の情報を特定する
const getDogById = (id: number): Dog | undefined => {
    return dogs.find(dog => dog.id === id);
}
// 特定した犬の情報を dog に格納する
const dog = getDogById(id)

console.log('取得した犬の情報', dog)

return(
    <div className="flex h-screen flex-col">
    <Header />
    <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100">
        
            <h2 className="text-3xl font-semibold mb-4">{dog?.name}</h2>
            <h3>dog ID : {id}</h3>
            <h3>birthday: {dog?.birthday}</h3>
        </main>
    </div>
    <Footer />
</div>
)
}


export default VaccinePage;