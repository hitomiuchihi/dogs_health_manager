import React, { useEffect, useState } from 'react';
import HealthData from '@/types/healthData';
import healthData from '@/dummyData/healthDummyData';
import HealthRecordEditForm from './__HealthRecordEditForm'; // 編集フォームコンポーネント

interface HealthRecordListProps {
    onEdit: (record: HealthData) => void;
    onDelete: (record: HealthData) => void;
}

const HealthRecordList: React.FC<HealthRecordListProps> = ({ onEdit, onDelete }) => {
    const [healthRecords, setHealthRecords] = useState<HealthData[]>([]);
    const [editingRecord, setEditingRecord] = useState<HealthData | null>(null);

    // レンダリングと同時にダミーデータをhealthrecordsにセットする
    useEffect(()=>{
        setHealthRecords(healthData)
    }, [])

    // 編集ボタンが押されたら
    const handleEditClick = (record: HealthData) => {
        setEditingRecord(record); // 編集する記録を設定
    };

    const handleSave = (updatedRecord: HealthData) => {
        onEdit(updatedRecord); // 編集内容を保存
        setEditingRecord(null); // 編集モードを終了
    };

    // 削除ボタンが押されたら
    const handleDeleteClick = (record: HealthData) => {
        const confirmDelete = window.confirm(`${record.date} の記録を削除しますか？`);
        if (confirmDelete) {
            onDelete(record); // 記録を削除
        }
    };

    return (
        <div className="flex">
            <div className="w-1/2">
                <ul>
                    {healthRecords.map((record) => (
                        <li key={record.id} className="flex justify-between items-center mb-2 p-2 border border-gray-300 rounded-md">
                            <div>
                                <p><strong>日付:</strong> {new Date(record.date).toLocaleDateString()}</p>
                                <p><strong>状態:</strong> {record.status}</p>
                                <p><strong>便:</strong> {record.stool}</p>
                                <p><strong>体重:</strong> {record.weight} kg</p>
                                {record.memo && <p><strong>メモ:</strong> {record.memo}</p>}
                            </div>
                            <div className="flex space-x-2">
                                <button onClick={() => handleEditClick(record)} className="bg-blue-500 text-white px-4 py-2 rounded-md">編集</button>
                                <button onClick={() => handleDeleteClick(record)} className="bg-red-500 text-white px-4 py-2 rounded-md">削除</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 pl-4">
                {editingRecord && (
                    <HealthRecordEditForm
                        record={editingRecord}
                        onSave={handleSave}
                        onCancel={() => setEditingRecord(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default HealthRecordList;
