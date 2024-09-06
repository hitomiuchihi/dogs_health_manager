'use client'

import React, { useState } from 'react';
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import Sidebar from '@/components/public/Sidebar';
import ToggleAddDog from '@/components/myPage/addDog/ToggleAddDog';
import ToggleAddNewHealthRecord from '@/components/myPage/addNewHealthRecord/ToggleAddNewHealthRecord';
import ToggleAddNewVaccineRecord from '@/components/myPage/addNewVaccineRecord/ToggleAddNewVaccine';
import DogInfo from '@/components/myPage/dogsData/DogInfo';
import Modal from '@/components/myPage/dogsData/Modal';
import DogEditForm from '@/components/myPage/dogsData/DogEditForm';
import Dog from '@/types/dogData';
import dogs from '@/dummyData/dogsDummyData'

export default function MyPage() {
    // 愛犬情報の状態管理
    const [editingDog, setEditingDog] = useState<Dog | null>(null);
    const [selectedDogId, setSelectedDogId] = useState<number | null>(null);

    const handleAddHealthRecord = (data: any) => {
        console.log('フォーム送信データ:', data);
        // ここでデータをサーバーに送信するなどの処理を行う
    };

    const handleAddDog = (formData: FormData) => {
        // ここでフォームデータを処理します（例: APIへ送信）
        console.log('フォームデータ:', formData);
    };

    const handleAddVaccineRecord = (formData: any) => {
        console.log('ワクチン接種記録データ:', formData);
        // ここでワクチン接種記録データをサーバーに送信する処理を行う
    };

    const handleDeleteDogInfo = (dog: Dog) => {
        const confirmDelete = window.confirm(`${dog.name}の情報を削除しますか？`);
        if (confirmDelete) {
            console.log('削除されたデータ:', dog);
            // サーバーに削除リクエストを送信する処理を行います
        }
    };
    const handleEditDogInfo = (dog: Dog) => {
        setEditingDog(dog);
    };

    const handleUpdateDogInfo = (updatedDog: Dog) => {
        console.log('更新された犬のデータ:', updatedDog);
        setEditingDog(null);
        // ここで更新されたデータをサーバーに送信する処理を行う
    };

    
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100">
                    <h2 className="text-3xl font-semibold mb-4">マイページ</h2>

                    <h3 className="text-2xl font-semibold mb-4">愛犬情報を管理する</h3>
                    <div className="flex flex-wrap gap-4 justify-start">
                        {dogs.map((dog) => (
                            <DogInfo
                                key={dog.id}
                                dog={dog}
                                onEdit={() => handleEditDogInfo(dog)}
                                onDelete={() => handleDeleteDogInfo(dog)}
                            />
                        ))}
                    </div>

                    <Modal isOpen={!!editingDog} onClose={() => setEditingDog(null)}>
                        {editingDog && (
                            <DogEditForm
                                dog={editingDog}
                                onSave={handleUpdateDogInfo}
                                onCancel={() => setEditingDog(null)}
                            />
                        )}
                    </Modal>

                    {/* <h3 className="text-2xl font-semibold mb-4">新しく愛犬情報を追加する</h3>
                    <AddDogForm onSubmit={handleAddDog} /> */}
                    <ToggleAddDog />

                    {/* <h3 className="text-2xl font-semibold mb-4">新しく健康記録を追加する</h3>
                    <NewHealthRecordForm dogs={dogs} onSubmit={handleAddHealthRecord} /> */}
                    <ToggleAddNewHealthRecord 
                        dogs={dogs}
                        handleAddHealthRecord={handleAddHealthRecord}
                    />

                    {/* <h3 className="text-2xl font-semibold mb-4">新しくワクチン記録を追加する</h3>
                    <AddVaccineRecordForm dogs={dogs} onSubmit={handleAddVaccineRecord} /> */}
                    <ToggleAddNewVaccineRecord 
                        dogs={dogs}
                        handleAddVaccineRecord={handleAddVaccineRecord}
                    />
                    
                </main>
            </div>
            <Footer />
        </div>
    );
}
