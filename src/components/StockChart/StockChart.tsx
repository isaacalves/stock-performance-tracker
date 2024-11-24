import React from 'react'
import { Line } from 'react-chartjs-2'
import { getColorFromPalette, chartOptions } from './chartConfig'
import './chartSetup'

interface StockChartProps {
  data: { label: string; values: number[] }[] // `label` is the stock name, `values` are prices over time
  labels: string[] // X-axis labels (e.g., time periods)
}

const StockChart: React.FC<StockChartProps> = ({ data, labels }) => {
  // Prepare chart data
  const chartData = {
    labels, // X-axis labels
    datasets: data.map((item, index) => ({
      label: item.label, // Stock name
      data: item.values, // Y-axis values
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

export default StockChart
