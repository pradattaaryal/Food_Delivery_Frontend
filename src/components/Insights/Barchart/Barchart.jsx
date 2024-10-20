import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Barchart() {
    const UserData = [
        { id: 1, month: "Sunday", sales: 900 },
        { id: 2, month: "Monday", sales: 850 },
        { id: 3, month: "Tuesday", sales: 1000 },
        { id: 4, month: "Wednesday", sales: 950 },
        { id: 5, month: "Thursday", sales: 900 }, // Corrected spelling
        { id: 6, month: "Friday", sales: 1100 },
        { id: 7, month: "Saturday", sales: 950 },
    ];

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.month),
        datasets: [
            
            {
                axis: 'y',
                label: "Sales",
                data: UserData.map((data) => data.sales),
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Different color for sales
                borderWidth: 1,
            },
        ],
    });

    const options = {
        indexAxis: 'y', // This makes the bars horizontal
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Days',
                },
            },
        },
    };

    return (
        <div className="App">
            <h2 className="text-center text-lg font-semibold mb-4">Weekly Order</h2>
            <div >
                <Bar data={userData} options={options} />
            </div>
        </div>
    );
}

export default Barchart;
