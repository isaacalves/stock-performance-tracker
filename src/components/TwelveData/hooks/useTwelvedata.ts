import { useEffect, useState } from 'react'
import type { StockLabel, StockData } from '../types'
import { stockDataObjects } from '../mocks/stockDataObjects' // Hardcoded mock data source

const API_KEY = import.meta.env.PUBLIC_TWELVEDATA_API_KEY
const USE_MOCK = import.meta.env.PUBLIC_USE_MOCK_DATA === 'true'

export const useTwelvedata = ({ symbol }: { symbol: StockLabel }) => {
  const [data, setData] = useState<StockData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (USE_MOCK) {
          const mockData = stockDataObjects[symbol]
          if (!mockData) {
            throw new Error(`No mock data found for symbol: ${symbol}`)
          }
          setData(mockData)
        } else {
          const endpoint = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`
          const response = await fetch(endpoint)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          const result = await response.json()
          setData(result)
        }
      } catch (err) {
        setError((err as Error).message || 'Failed to load stock data.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [symbol])

  return { data, error, loading }
}
