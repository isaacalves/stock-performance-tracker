import React from 'react'
import { useTwelvedata } from './hooks/useTwelvedata'
import { useMockTwelvedata } from './hooks/useMockTwelvedata'
import type { StockLabel } from './types'

export const useMocks = import.meta.env.PUBLIC_USE_MOCK_DATA === 'true'

export const TwelvedataStockChart: React.FC<{ symbol: StockLabel }> = ({
  symbol
}) => {
  console.log({ symbol })
  const { data, error, loading } = useMocks
    ? useMockTwelvedata({ symbol })
    : useTwelvedata({ symbol })

  if (loading) return <div>Loading data for {symbol}...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Fetched Data for {symbol}:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
