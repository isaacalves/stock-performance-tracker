import { stockDataObjects } from './mocks/stockDataObjects'
import type { StockData, StockLabel } from '../types'

const API_KEY = import.meta.env.PUBLIC_TWELVEDATA_API_KEY
const USE_MOCK = import.meta.env.PUBLIC_USE_MOCK_DATA === 'true'

export const fetchStockData = async (
  symbols: StockLabel | StockLabel[]
): Promise<StockData | StockData[]> => {
  const symbolList = Array.isArray(symbols) ? symbols : [symbols]

  if (USE_MOCK) {
    const mockData = symbolList.map((sym) => {
      const data = stockDataObjects[sym]
      if (!data) {
        throw new Error(`No mock data found for symbol: ${sym}`)
      }
      return data
    })
    return symbolList.length === 1 ? mockData[0] : mockData
  }

  const requests = symbolList.map(async (sym) => {
    const endpoint = `https://api.twelvedata.com/time_series?symbol=${sym}&interval=1day&apikey=${API_KEY}`
    console.log(`Fetching ${sym}...`, endpoint)
    
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} for symbol: ${sym}`
      )
    }
    
    const data = await response.json()
    console.log(`Data received for ${sym}:`, data)
    
    // Validate the response shape matches what we expect
    if (!data.values || !Array.isArray(data.values)) {
      console.error(`Invalid data structure for ${sym}:`, data)
      throw new Error(`Invalid data structure received for symbol: ${sym}`)
    }
    
    return data
  })

  const result = await Promise.all(requests)
  console.log('All results:', result)
  
  return symbolList.length === 1 ? result[0] : result
}
