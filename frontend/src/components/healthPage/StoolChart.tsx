'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import HealthData from '@/types/healthData';
import Stool from '@/types/Stool';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface StoolChartProps {
    data: HealthData[];
}

const stoolMapping: { [key in Stool]: number } = {
    '快便': 6,
    '硬め': 5,
    '便秘': 4,
    '軟便': 3,
    '下痢': 2,
    '水様便': 1
};

const StoolChart: React.FC<StoolChartProps> = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date.split('T')[0]),
        datasets: [
            {
                label: '便の状態',
                data: data.map(item => stoolMapping[item.stool] || 0),
                borderColor: 'rgba(153,102,255,1)',
                backgroundColor: 'rgba(153,102,255,0.2)',
                borderWidth: 1,
            }
        ]
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">便の状態の折れ線グラフ</h2>
            <Line data={chartData} />
        </div>
    );
}

export default StoolChart;
