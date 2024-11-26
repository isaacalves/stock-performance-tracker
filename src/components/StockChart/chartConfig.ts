import type { ChartOptions } from 'chart.js'

const colors = [
  '#14b8a6', // Teal (cyan-500)
  '#f87171', // Red (red-400)
  '#3b82f6', // Blue (blue-500)
  '#facc15', // Yellow (yellow-400)
  '#a855f7' // Purple (purple-500)
]

export const getColorFromPalette = (index: number): string => colors[index]

export const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' // Legend above the chart
    },
    title: {
      display: true,
      text: 'Stock Performance Over Time' // Title text
    }
  },
  scales: {
    x: {
      type: 'category',
      title: {
        display: true,
        text: 'Time' // X-axis label
      }
    },
    y: {
      beginAtZero: false, // Start Y-axis at the lowest value in the data
      title: {
        display: true,
        text: 'Price' // Y-axis label
      }
    }
  },
  animation: false
}
