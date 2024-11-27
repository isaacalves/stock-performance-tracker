import { useEffect, useState } from 'react'
import type { StockData, StockLabel } from '../types'
import { stockDataObjects } from '../mocks/stockDataObjects' // Hardcoded stock data source

export const useMockTwelvedata = ({ symbol }: { symbol: StockLabel }) => {
  const [data, setData] = useState<StockData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        const stockData =
          stockDataObjects[symbol as keyof typeof stockDataObjects]

        if (!stockData) {
          throw new Error(`No data found for symbol: ${symbol}`)
        }

        setData(stockData)
      } catch (err) {
        setError((err as Error).message || 'Failed to load stock data.')
      } finally {
        setLoading(false)
      }
    }

    fetchStockData()
  }, [symbol])

  return { data, loading, error }
}
