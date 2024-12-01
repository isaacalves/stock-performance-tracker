import React from 'react'
import { useTwelvedata } from './hooks/useTwelvedata'
import { StockLabel } from './types'
import { StockLineChart } from './StockLineChart'
import { convertRawDataToChartDataWithPercentages } from './utils/convertRawDataToChartDataWithPercentages'
// import { convertRawDataToChartData } from './utils/convertRawDataToChartData'

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

  // const chartData = convertRawDataToChartData(data)
  const chartData = convertRawDataToChartDataWithPercentages(data)

  return <StockLineChart data={chartData} />
}
