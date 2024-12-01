import React from 'react'
import { useTwelvedata } from './hooks/useTwelvedata'
import { StockLabel } from './types'
import { StockLineChart } from './StockLineChart'
import { convertRawDataToChartData } from './utils/convertRawDataToChartData'

// const symbol = [
//   StockLabel.AAPL,
//   StockLabel.QQQ,
//   StockLabel.VFIAX,
//   StockLabel.BTA,
//   StockLabel.PETR4
// ]

const symbol = StockLabel.BTC

export const TwelvedataContainer = () => {
  const { data, error, isLoading } = useTwelvedata(symbol)

  if (isLoading) return <div>Loading data for {symbol}...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>Error loading data</div>

  const chartData = convertRawDataToChartData(data)

  console.log('TwelvedataContainer')
  console.log({ chartData })
  return <StockLineChart data={chartData} />
}
