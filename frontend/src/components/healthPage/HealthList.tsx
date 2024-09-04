'use client'

import React from 'react';

interface HealthListProps {
    data: any[];
    onDetails: (data: any) => void;
}

const HealthList: React.FC<HealthListProps> = ({ data, onDetails }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">記録一覧</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id} className="mb-2 p-4 bg-white rounded shadow-md">
                        <p>登録日時: {item.date.split('T')[0]}</p>
                        <button
                            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => onDetails(item)}
                        >
                            詳細を見る
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HealthList;
