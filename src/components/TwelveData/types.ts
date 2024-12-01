export enum StockLabel {
  AAPL = 'AAPL',
  QQQ = 'QQQ',
  VFIAX = 'VFIAX',
  BTA = 'BTA',
  BTC = 'BTC',
  PETR4 = 'PETR4'
}

export type StockMetadata = {
  symbol: string // Stock ticker symbol
  interval: string // Data interval (e.g., '1day')
  currency: string // Currency code (e.g., 'USD')
  exchange_timezone: string // Exchange timezone
  exchange: string // Exchange name
  mic_code: string // Market Identifier Code
  type: string // Stock type (e.g., 'Common Stock')
}

export type StockValue = {
  datetime: string // Date and time of the data point
  open: string // Opening price
  high: string // Highest price
  low: string // Lowest price
  close: string // Closing price
  volume?: string // Trading volume
}

export type StockData = {
  meta: StockMetadata
  values: StockValue[]
}

export interface ChartData {
  labels: string[] // X-axis labels (dates)
  datasets: {
    label: string // Dataset name
    data: number[] // Y-axis data (closing prices)
    borderColor: string // Line color
    backgroundColor: string // Fill color
    fill: boolean // Whether to fill under the line
    tension: number // Smoothness of the line
  }[]
}
