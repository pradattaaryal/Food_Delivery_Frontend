import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Title } from "chart.js";

// Register the necessary Chart.js components
Chart.register(ArcElement, Tooltip, Title);

const Piechart = () => {
  // Array containing data for multiple charts
  const chartsData = [
    {
      percentage: 60,
      data: [60, 40],
      backgroundColor: ["rgba(255, 99, 132, 0.8)", "#F2F2F2"], // RGB color 1
      label: "Total Order",
    },
    {
      percentage: 70,
      data: [70, 30],
      backgroundColor: ["rgba(50, 255, 80, 0.8)", "#F2F2F2"], // RGB color 2
      label: "Customer Growth",
    },
    {
      percentage: 50,
      data: [50, 50],
      backgroundColor: ["rgba(50, 50, 255, 0.8)", "#F2F2F2"], // RGB color 3
      label: "Revenue",
    },
  ];

  // Chart options common for all charts
  const chartOptions = {
    cutout: "40%",
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="p-8 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Pie Charts</h2>
      </div>

      {/* Use map to dynamically render the charts */}
      <div className="flex justify-between space-x-4">
        {chartsData.map((chart, index) => (
          <div key={index} className="flex flex-col  items-center">
            <div className="relative w-40 h-40">
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: chart.data,
                      backgroundColor: chart.backgroundColor,
                      borderWidth: 0.1,
                    },
                  ],
                }}
                options={chartOptions}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold">{chart.percentage}%</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-center font-semibold">
              {chart.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piechart;
