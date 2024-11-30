import React from 'react'
import { Line } from 'react-chartjs-2'
import { getColorFromPalette, chartOptions } from './chartConfig'
import '../../utils/chartRegister'

interface StockLineChartProps {
  data: { label: string; values: number[] }[] // Each stock's name and corresponding values
  labels: string[] // X-axis labels (e.g., time periods or data points)
}

export const StockLineChart: React.FC<StockLineChartProps> = ({
  data,
  labels
}) => {
  console.log(
    'StockLineChart rendering with data:',
    data,
    'and labels:',
    labels
  )

  // Prepare chart data for react-chartjs-2
  const chartData = {
    labels, // X-axis labels
    datasets: data.map((item, index) => ({
      label: item.label, // Stock name
      data: item.values, // Y-axis values (e.g., prices)
      borderColor: getColorFromPalette(index), // Line color
      backgroundColor: getColorFromPalette(index), // Point color
      fill: false, // No fill under the line
      tension: 0.4 // Smooth lines
    }))
  }

  return (
    <div className="w-full max-w-6xl mx-auto h-[75vh] p-4">
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}
