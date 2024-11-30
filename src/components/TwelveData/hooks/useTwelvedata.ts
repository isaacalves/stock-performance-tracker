import { useEffect, useState } from 'react'
import type { StockLabel, StockData } from '../types'
import { stockDataObjects } from '../mocks/stockDataObjects' // Hardcoded mock data source

const API_KEY = import.meta.env.PUBLIC_TWELVEDATA_API_KEY
const USE_MOCK = import.meta.env.PUBLIC_USE_MOCK_DATA === 'true'

export const useTwelvedata = ({
  symbol
}: {
  symbol: StockLabel | StockLabel[]
}) => {
  const [data, setData] = useState<StockData | StockData[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const symbolList = Array.isArray(symbol) ? symbol : [symbol] // Ensure symbolList is an array

        if (USE_MOCK) {
          const mockData = symbolList.map((sym) => {
            const data = stockDataObjects[sym]
            if (!data) {
              throw new Error(`No mock data found for symbol: ${sym}`)
            }
            return data
          })

          setData(symbolList.length === 1 ? mockData[0] : mockData) // Single or multiple symbols
        } else {
          const requests = symbolList.map(async (sym) => {
            const endpoint = `https://api.twelvedata.com/time_series?symbol=${sym}&interval=1day&apikey=${API_KEY}`
            const response = await fetch(endpoint)
            if (!response.ok) {
              throw new Error(
                `HTTP error! Status: ${response.status} for symbol: ${sym}`
              )
            }
            return response.json()
          })

          const result = await Promise.all(requests)
          setData(symbolList.length === 1 ? result[0] : result) // Single or multiple symbols
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
