import { useEffect, useState } from 'react'
import type { StockData, StockLabel } from '../types'
import { stockDataObjects } from '../mocks/stockDataObjects' // Hardcoded stock data source

interface UseMockTwelvedataArgs {
  symbol: StockLabel | StockLabel[]
}

interface UseMockTwelvedataResult {
  data: StockData[] | null
  loading: boolean
  error: string | null
}

export const useMockTwelvedata = ({
  symbol
}: UseMockTwelvedataArgs): UseMockTwelvedataResult => {
  const [data, setData] = useState<StockData[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        const symbolList = Array.isArray(symbol) ? symbol : [symbol]

        // Filter data for the provided symbols
        const stockData = symbolList.map((sym) => {
          const data = stockDataObjects[sym as keyof typeof stockDataObjects]
          if (!data) {
            throw new Error(`No data found for symbol: ${sym}`)
          }
          return data
        })

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
