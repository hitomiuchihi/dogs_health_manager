import React, { useState } from 'react';
import HealthData from '@/types/healthData';
import Status from '@/types/Status';
import Stool from '@/types/Stool';

interface HealthRecordEditFormProps {
    record: HealthData;
    onSave: (updatedRecord: HealthData) => void;
    onCancel: () => void;
}

const statusOptions: Status[] = ['元気', '普通', '不調'];
const stoolOptions: Stool[] = ['快便', '硬め', '便秘', '軟便', '下痢', '水様便'];

const HealthRecordEditForm: React.FC<HealthRecordEditFormProps> = ({ record, onSave, onCancel }) => {
    const [status, setStatus] = useState<Status>(record.status);
    const [stool, setStool] = useState<Stool>(record.stool);
    const [weight, setWeight] = useState(record.weight);
    const [date, setDate] = useState(record.date);
    const [memo, setMemo] = useState(record.memo || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...record,
            status,
            stool,
            weight,
            date,
            memo
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-md shadow-md">
            <div>
                <label htmlFor="status" className="block text-lg font-semibold text-gray-700 mb-1">状態</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as Status)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                >
                    {statusOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="stool" className="block text-lg font-semibold text-gray-700 mb-1">便</label>
                <select
                    id="stool"
                    value={stool}
                    onChange={(e) => setStool(e.target.value as Stool)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                >
                    {stoolOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="weight" className="block text-lg font-semibold text-gray-700 mb-1">体重</label>
                <input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg"
                />
            </div>
            <div>
                <label htmlFor="date" className="block text-lg font-semibold text-gray-700 mb-1">日付</label>
                <input
                    id="date"
                    type="date"
                    value={date.split('T')[0]} // Format date to YYYY-MM-DD
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
                />
            </div>
            <div className="flex space-x-4 mt-4">
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md text-lg">保存</button>
                <button type="button" onClick={onCancel} className="bg-gray-500 text-white py-2 px-4 rounded-md text-lg">キャンセル</button>
            </div>
        </form>
    );
};

export default HealthRecordEditForm;

