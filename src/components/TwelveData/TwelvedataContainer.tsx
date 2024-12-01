import React from 'react'
import { useTwelvedata } from './hooks/useTwelvedata'
import { StockLabel } from './types'
import { StockLineChart } from './StockLineChart'
// import { mapStockToChartWithPercentages } from './utils/mapStockToChartWithPercentages'
import { mapStockToChart } from './utils/mapStockToChart'

const symbol = [
  StockLabel.AAPL,
  StockLabel.QQQ,
  StockLabel.VFIAX,
  StockLabel.BTA,
  StockLabel.PETR4
]

// const symbol = StockLabel.BTC

export const TwelvedataContainer = () => {
  const { data, error, isLoading } = useTwelvedata(symbol)

  if (isLoading) return <div>Loading data for {symbol}...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>Error loading data</div>

  const chartData = mapStockToChart({ rawData: data, usePercentage: true })
  // const chartData = mapStockToChartWithPercentages(data)

  return <StockLineChart data={chartData} />
}
