import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Data Input',
      data: [10, 20, 25, 54, 33, 64, 43, 22, 33, 20],
      borderColor: '#3F51B5',
      backgroundColor: '#fff',
      pointRadius: 0,
      borderWidth: 1.5,
    },
    {
      label: 'Data Output',
      data: [14, 24, 35, 64, 43, 54, 33, 12, 23, 10],
      borderColor: '#2A9498',
      backgroundColor: '#fff',
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      rtl: false,
      labels: {
        usePointStyle: false,
        boxWidth: 20,
        boxHeight: 8,
        pointStyle: "circle",
        pointStyleWidth: 13,
        padding: 10,
        font: {
          size: 12
        }
      }
    },
    title: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
  elements: {
    line: {
      tension: 0.6
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      }
    },
    y: {
      grid: {
        display: false,
      },
      min: 10,
      max: 100 
    },
  },
};

function DataIO() {
  return (
    <div>
      <Line options={options} data={data} className='line-chart' />
    </div>
  )
}
export default DataIO;