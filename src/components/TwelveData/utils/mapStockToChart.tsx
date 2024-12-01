import { calculatePercentageChanges } from './calculatePercentageChanges';
import { getColorFromPalette } from '../../../utils/chartColors';
import type { ChartData, StockData } from '../types'

export const mapStockToChart = ({ rawData, usePercentage = false }: {
  rawData: StockData | StockData[],
  usePercentage?: boolean
}): ChartData => {
  if (!rawData) {
    throw new Error('Invalid rawData: rawData cannot be null or undefined');
  }

  const stockArray = Array.isArray(rawData) ? rawData : [rawData];

  const datasets = stockArray.map((stock, index) => {
    const data = usePercentage
      ? calculatePercentageChanges(stock)
      : stock.values.map((entry) => parseFloat(entry.close)).reverse();

    return {
      label: stock.meta.symbol,
      data,
      borderColor: getColorFromPalette(index),
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.1
    };
  });

  const labels = stockArray[0]?.values.map((entry) => entry.datetime).reverse() || [];

  return {
    labels,
    datasets
  };
}
