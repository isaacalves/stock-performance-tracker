import { calculatePercentageChanges } from './calculatePercentageChanges'
import type { StockData } from '../types'
import { getColorFromPalette } from '../../../utils/chartColors'

export const convertRawDataToChartDataWithPercentages = (
  rawData: StockData | StockData[]
) => {
  const dataArray = Array.isArray(rawData) ? rawData : [rawData]

  const datasets = dataArray.map((stock, index) => {
    const percentageChanges = calculatePercentageChanges(stock)

    return {
      label: `Performance - ${stock.meta.symbol}`,
      data: percentageChanges,
      borderColor: getColorFromPalette(index),
      backgroundColor: 'transparent'
    }
  })

  return {
    labels: dataArray[0].values.map((value) => value.datetime), // X-axis dates
    datasets
  }
}
