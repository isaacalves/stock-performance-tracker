import type { StockData } from '../types'

/**
 * Calculates percentage change for a stock's closing prices.
 * @param stockData - The raw stock data containing closing prices.
 * @returns An array of percentage changes relative to the first closing price.
 */
export const calculatePercentageChanges = (stockData: StockData) => {
  const firstPrice = parseFloat(stockData.values[0].close) // Use the first closing price as the baseline
  return stockData.values.map((value) => {
    const closePrice = parseFloat(value.close)
    return ((closePrice - firstPrice) / firstPrice) * 100 // Percentage change formula
  })
}
