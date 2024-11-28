import React from 'react'
import { useTwelvedata } from './hooks/useTwelvedata'
import { useMockTwelvedata } from './hooks/useMockTwelvedata'
import { StockLabel } from './types'

export const useMocks = import.meta.env.PUBLIC_USE_MOCK_DATA === 'true'

export const TwelvedataStockChart = () => {
  const symbol = [StockLabel.VFIAX, StockLabel.BTC]

  const { data, error, loading } = useMocks
    ? useMockTwelvedata({ symbol })
    : useTwelvedata({ symbol })

  console.log({ data })
  // const stock = stockDataObjects['AAPL']
  // console.log(stock.meta.symbol) // "AAPL"
  // console.log(stock.values[0].close) // "235.06000"

  if (loading) return <div>Loading data for {symbol}...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Fetched Data for {symbol}:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
