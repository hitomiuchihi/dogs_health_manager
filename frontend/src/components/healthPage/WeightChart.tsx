'use client'

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface WeightChartProps {
    data: any[];
}

const WeightChart: React.FC<WeightChartProps> = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date.split('T')[0]),
        datasets: [
            {
                label: '体重',
                data: data.map(item => item.weight),
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderWidth: 1,
            }
        ]
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">体重の折れ線グラフ</h2>
            <Line data={chartData} />
        </div>
    );
}

export default WeightChart;
