import type { StockData } from './types'

export interface ChartData {
  labels: string[] // X-axis labels (dates)
  datasets: {
    label: string // Dataset name
    data: number[] // Y-axis data (closing prices)
    borderColor: string // Line color
    backgroundColor: string // Fill color
    fill: boolean // Whether to fill under the line
    tension: number // Smoothness of the line
  }[]
}

export const convertRawDataToChartData = (rawData: StockData): ChartData => {
  const reversedValues = [...rawData.values].reverse()

  const labels = reversedValues.map((entry) => entry.datetime) // Extract dates
  const closePrices = reversedValues.map((entry) => parseFloat(entry.close)) // Extract closing prices

  return {
    labels,
    datasets: [
      {
        label: `Closing Prices - ${rawData.meta.symbol}`,
        data: closePrices,
        borderColor: 'rgb(75, 192, 192)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color
        fill: true, // Fill under the line
        tension: 0.4 // Smoothness of the line
      }
    ]
  }
}
