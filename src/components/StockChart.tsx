import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import type { ChartOptions } from 'chart.js' // Explicit type-only import

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Define the props for the component
interface StockChartProps {
  data: { label: string; values: number[] }[] // `label` is the stock name, `values` are prices over time
  labels: string[] // X-axis labels (e.g., time periods)
}

const StockChart: React.FC<StockChartProps> = ({ data, labels }) => {
  // Prepare chart data
  const chartData = {
    labels, // X-axis labels
    datasets: data.map((item, index) => ({
      label: item.label, // Dataset name (e.g., stock name)
      data: item.values, // Y-axis values
      fill: false, // No fill under the line
      borderColor: `rgba(75, 192, 192, ${1 - index * 0.1})`, // Line color
      backgroundColor: `rgba(75, 192, 192, ${0.4})`, // Point color
      tension: 0.4 // Smooth lines (adjust tension for curves)
    }))
  }

  // Define chart options
  const options: ChartOptions<'line'> = {
    animation: false, // Disable animation
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Stock Performance Over Time'
      }
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Price'
        }
      }
    }
  }

  return (
    <div className="w-full h-screen">
      <Line data={chartData} options={options} />
    </div>
  )
}

export default StockChart
