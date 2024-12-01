import type { ChartOptions } from 'chart.js'

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
