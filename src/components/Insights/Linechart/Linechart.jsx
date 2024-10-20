import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Linechart = () => {
  const chartRef = useRef(null);

  const UserData = [
    { id: 1, month: "January", revenue: 800, sales: 900 },
    { id: 2, month: "February", revenue: 900, sales: 850 },
    { id: 3, month: "March", revenue: 950, sales: 1000 },
    { id: 4, month: "April", revenue: 1100, sales: 950 },
    { id: 5, month: "May", revenue: 1150, sales: 900 },
    { id: 6, month: "June", revenue: 1200, sales: 1100 },
    { id: 7, month: "July", revenue: 1000, sales: 950 },
    { id: 8, month: "August", revenue: 1250, sales: 1050 },
    { id: 9, month: "September", revenue: 1400, sales: 1200 },
    { id: 10, month: "October", revenue: 1000, sales: 800 },
    { id: 11, month: "November", revenue: 900, sales: 850 },
    { id: 12, month: "December", revenue: 1100, sales: 900 },
  ];

  useEffect(() => {
    const chart = chartRef.current;
    const ctx = chart?.ctx;
    if (ctx) {
      // Gradient for Revenue (Red to White)
      const revenueGradient = ctx.createLinearGradient(0, 0, 0, 400);
      revenueGradient.addColorStop(0, "rgba(255, 0, 0, 0.2)"); // Red
      revenueGradient.addColorStop(1, "rgba(255, 255, 255, 1)"); // White

      // Gradient for Sales (Green to White)
      const salesGradient = ctx.createLinearGradient(0, 0, 0, 400);
      salesGradient.addColorStop(0, "rgba(0, 255, 0, 0.2)"); // Green
      salesGradient.addColorStop(1, "rgba(255, 255, 255, 1)"); // White

      chart.data.datasets[0].backgroundColor = revenueGradient; // Apply red-to-white gradient for Revenue
      chart.data.datasets[1].backgroundColor = salesGradient; // Apply green-to-white gradient for Sales
      chart.update();
    }
  }, []);

  const data = {
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: UserData.map((data) => data.revenue),
        borderColor: "rgba(255, 0, 0, 1)", // Red line for Revenue
        tension: 0.4, // Line tension to smoothen the curve
        fill: true, // Filling the line area
        pointRadius: 0, // Remove dots
        pointHoverRadius: 0, // Remove hover effect on dots
        borderWidth: 2,
      },
      {
        label: "Sales",
        data: UserData.map((data) => data.sales),
        borderColor: "rgba(0, 255, 0, 1)", // Green line for Sales
        tension: 0.4, // Line tension to smoothen the curve
        fill: true, // Filling the line area
        pointRadius: 0, // Remove dots
        pointHoverRadius: 0, // Remove hover effect on dots
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true, // Use circular point styles for legend
          pointStyle: 'circle', // Make the point style a circle
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200,
        },
      },
    },
  };

  return (
    <div className="w-full">
      <h2 className="text-center text-lg font-semibold mb-4">Revenue and Sales</h2>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Linechart;
