export interface StockLineChartData {
  label: string
  values: number[]
}

export const exampleStockData: StockLineChartData[] = [
  { label: 'AAPL', values: [150, 150, 150, 300, 1500] },
  { label: 'MSFT', values: [2100, 210, 210, 415, 1220] },
  { label: 'GOOGL', values: [2800, 2850, 2100, 2050, 2100] }
]

export const exampleLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
