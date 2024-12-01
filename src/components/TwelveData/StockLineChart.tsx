import React from 'react'
import { Line } from 'react-chartjs-2'
import type { ChartData } from './types' // Ensure this matches the type above
import '../../utils/chartRegister'

interface StockLineChartProps {
  data: ChartData
}

export const StockLineChart: React.FC<StockLineChartProps> = ({ data }) => {
  const options = {
    animation: false as const, // as const needed to satisfy TS
    responsive: true,
    // aspectRatio: 3, // control height/width with CSS
    maintainAspectRatio: false, // control height/width with CSS
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

  return (
    <div className="w-full h-full flex-grow relative">
      <Line data={data} options={options} />
    </div>
  )
}
