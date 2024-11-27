import React, { useEffect, useState } from 'react'

import { StockLineChart } from './StockLineChart'
import {
  exampleStockData,
  type StockLineChartData
} from './mocks/exampleChartDataMocks'

export const StockChartContainer: React.FC = () => {
  const [stockData, setStockData] = useState<StockLineChartData[]>([])
  const [labels, setLabels] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const loadMockData = () => {
    console.log('Loading mock data...')
    setStockData(exampleStockData)
    setLabels(['Nov 20', 'Nov 21', 'Nov 22', 'Dec 22', 'Dec 21'])
    setLoading(false)
  }

  useEffect(() => {
    loadMockData()
  }, [])

  if (loading) {
    return <div>Loading stock data...</div>
  }

  console.log({ stockData, labels })
  return <StockLineChart data={stockData} labels={labels} />
}
