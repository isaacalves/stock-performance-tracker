import React from 'react'
import { Line } from 'react-chartjs-2'
import type { ChartData } from './convertRawDataToChartData' // Ensure this matches the type above
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

interface StockLineChartProps {
  data: ChartData
}

export const StockLineChart: React.FC<StockLineChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Closing Price'
        }
      }
    }
  }

  return <Line data={data} options={options} />
}
