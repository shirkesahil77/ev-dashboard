// src/components/PieChartComponent.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChartComponent({ data }) {
    const makeCounts = data.reduce((acc, ev) => {
        acc[ev.Make] = (acc[ev.Make] || 0) + 1;
        return acc;
      }, {});
    
      // Prepare data for the pie chart
      const chartData = {
        labels: Object.keys(makeCounts),
        datasets: [
          {
            label: 'EV Count by Make',
            data: Object.values(makeCounts),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0'
            ],
          },
        ],
      };
    
      return (
        <div className="w-96 mx-auto">
          <h2 className="text-lg font-semibold mb-2">Pie Chart of EV Makes</h2>
          <Pie data={chartData} />
        </div>
      );
    }

export default PieChartComponent;
