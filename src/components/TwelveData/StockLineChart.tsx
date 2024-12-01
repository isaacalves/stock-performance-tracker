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

  // ! if the <div> wrapping <Line> is removed, nothing is rendered
  // todo: make it (more) responsive. Currently it adapts as viewport scales down but not when it scales up
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}
