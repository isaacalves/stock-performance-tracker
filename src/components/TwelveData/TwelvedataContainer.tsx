import React from 'react'
import { useTwelvedata } from './hooks/useTwelvedata'
import { StockLabel } from './types'
import { StockLineChart } from './StockLineChart'
import { mapStockToChart } from './utils/mapStockToChart'

interface TwelvedataContainerProps {
  symbol: StockLabel[]
  usePercentage: boolean
  className: string
}

export const TwelvedataContainer: React.FC<TwelvedataContainerProps> = ({ symbol, usePercentage, className }) => {
  const { data, error, isLoading } = useTwelvedata(symbol);

  if (isLoading) return <div>Loading data for {symbol.join(', ')}...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Error loading data</div>;

  const chartData = mapStockToChart({ rawData: data, usePercentage });

  return <div className={className}>
    <StockLineChart data={chartData} />
  </div>
};