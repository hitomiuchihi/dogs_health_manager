'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import HealthData from '@/types/healthData';
import Status from '@/types/Status';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface StatusChartProps {
    data: HealthData[];
}

const statusMapping: { [key in Status]: number } = {
    '元気': 3,
    '普通': 2,
    '不調': 1
};

// const StatusChart: React.FC<StatusChartProps> = ({ data }) => {
//     const chartData = {
//         labels: data.map(item => item.date.split('T')[0]),
//         datasets: [
//             {
//                 label: '状態',
//                 data: data.map(item => statusMapping[item.status] || 0),
//                 borderColor: 'rgba(75,192,192,1)',
//                 backgroundColor: 'rgba(75,192,192,0.2)',
//                 borderWidth: 1,
//             }
//         ]
//     };

//     return (
//         <div>
//             <h2 className="text-xl font-semibold mb-4">状態の折れ線グラフ</h2>
//             <Line data={chartData} />
//         </div>
//     );
// }

const StatusChart: React.FC<StatusChartProps> = ({ data }) => {
    try {
        const chartData = {
            labels: data.map(item => {
                if (!item.date) {
                    console.warn('Date is missing in one of the data points');
                }
                return item.date.split('T')[0];
            }),
            datasets: [
                {
                    label: '状態',
                    data: data.map(item => {
                        const statusValue = statusMapping[item.status];
                        if (statusValue === undefined) {
                            console.warn(`Invalid status: ${item.status}`);
                        }
                        return statusValue || 0;
                    }),
                    borderColor: 'rgba(75,192,192,1)',
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderWidth: 1,
                }
            ]
        };

        return (
            <div>
                <h2 className="text-xl font-semibold mb-4">状態の折れ線グラフ</h2>
                <Line data={chartData} />
            </div>
        );
    } catch (error) {
        console.error('Error rendering StatusChart:', error);
        return <div>チャートのレンダリングに失敗しました。</div>;
    }
};

export default StatusChart;
