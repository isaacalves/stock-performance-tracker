import type { ChartData, StockData } from '../types'

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

export const convertRawDataToChartData = (
  rawData: StockData | StockData[]
): ChartData => {
  const datasets = (Array.isArray(rawData) ? rawData : [rawData]).map(
    (stock, index) => {
      const reversedValues = [...stock.values].reverse()

      const data = reversedValues.map((entry) => parseFloat(entry.close)) // Closing prices

      return {
        label: `Closing Prices - ${stock.meta.symbol}`,
        data,
        borderColor: `hsl(${index * 100}, 70%, 50%)`, // Unique color for each dataset
        backgroundColor: `hsl(${index * 100}, 70%, 80%)`, // Fill color
        fill: true,
        tension: 0.4
      }
    }
  )

  const labels =
    rawData instanceof Array
      ? rawData[0]?.values.map((entry) => entry.datetime).reverse() || []
      : rawData.values.map((entry) => entry.datetime).reverse()

  return {
    labels,
    datasets
  }
}
