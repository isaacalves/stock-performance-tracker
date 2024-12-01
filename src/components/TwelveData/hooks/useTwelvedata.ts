import { useQuery } from '@tanstack/react-query'
import { StockLabel, type StockData } from '../types'
import { fetchStockData } from '../api/twelvedata'

export const useTwelvedata = (symbols: StockLabel | StockLabel[]) => {
  return useQuery<StockData | StockData[]>({
    queryKey: ['stockData', symbols],
    queryFn: () => fetchStockData(symbols),
    staleTime: 60 * 60 * 1000, // Cache for 1 hour
    refetchOnWindowFocus: false // Optional
  })
}
