'use client'

import React, { useState } from 'react';
import VaccineData from '@/types/vaccineData';

interface VaccineListProps {
    data: VaccineData[];
    onDetails: (data: VaccineData) => void;
}

const VaccineList: React.FC<VaccineListProps> = ({ data, onDetails }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">ワクチン記録一覧</h2>
            <ul>
                {currentData.map(item => (
                    <li key={item.id} className="mb-2 p-4 bg-white rounded shadow-md">
                        <p>接種日時: {item.date.split('T')[0]}</p>
                        <p>ワクチンタイプ: {item.vaccineType}</p>
                        <button
                            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => onDetails(item)}
                        >
                            詳細を見る
                        </button>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default VaccineList;
