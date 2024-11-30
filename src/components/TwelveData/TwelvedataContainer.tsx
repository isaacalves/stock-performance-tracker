import React from 'react'
import { useTwelvedata } from './hooks/useTwelvedata'
import { StockLabel } from './types'
import { StockLineChart } from './StockLineChart'
import { convertRawDataToChartData } from './convertRawDataToChartData'

// const symbol = [StockLabel.VFIAX, StockLabel.BTC]
const symbol = StockLabel.BTC

export const TwelvedataContainer = () => {
  const { data, error, loading } = useTwelvedata({ symbol })

  if (loading) return <div>Loading data for {symbol}...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return <div>Error loading data</div>

  const chartData = convertRawDataToChartData(data)

  return (
    <div>
      <h2>Fetched Data for {symbol}:</h2>
      <StockLineChart data={chartData} />
    </div>
  )
}
