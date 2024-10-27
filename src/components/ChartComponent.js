import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register the necessary components from Chart.js
Chart.register(...registerables);

function ChartComponent({ data }) {
  // Prepare bar chart data
  const barChartData = {
    labels: data.map((ev) => ev.name), // Use 'name' for labels
    datasets: [
      {
        label: "Number of EVs by Make",
        data: data.map((ev) => ev.value), // Use 'value' for data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">Number of EVs by Make</h3>
      <div style={{ height: "400px", width:'600px', position: "relative" }}>
        <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
}

export default ChartComponent;
