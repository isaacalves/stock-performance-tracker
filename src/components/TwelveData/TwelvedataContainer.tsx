import React from 'react'
import { useTwelvedata } from './hooks/useTwelvedata'
import { StockLabel } from './types'

// const symbol = [StockLabel.VFIAX, StockLabel.BTC]
const symbol = StockLabel.BTC

export const TwelvedataContainer = () => {
  const { data, error, loading } = useTwelvedata({ symbol })

  if (loading) return <div>Loading data for {symbol}...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Fetched Data for {symbol}:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
