// https://support.twelvedata.com/en/articles/5335783-trial

import type { StockData } from '../../types'

const AAPL = {
  meta: {
    symbol: 'AAPL',
    interval: '1day',
    currency: 'USD',
    exchange_timezone: 'America/New_York',
    exchange: 'NASDAQ',
    mic_code: 'XNGS',
    type: 'Common Stock'
  },
  values: [
    {
      datetime: '2024-11-26',
      open: '233.33000',
      high: '235.57001',
      low: '233.33000',
      close: '235.06000',
      volume: '44991117'
    },
    {
      datetime: '2024-11-25',
      open: '231.46001',
      high: '233.25000',
      low: '229.74001',
      close: '232.87000',
      volume: '90152800'
    },
    {
      datetime: '2024-11-22',
      open: '228.06000',
      high: '230.72000',
      low: '228.06000',
      close: '229.87000',
      volume: '38168300'
    },
    {
      datetime: '2024-11-21',
      open: '228.88000',
      high: '230.16000',
      low: '225.71001',
      close: '228.52000',
      volume: '42108300'
    },
    {
      datetime: '2024-11-20',
      open: '228.06000',
      high: '229.92999',
      low: '225.89000',
      close: '229.00000',
      volume: '35169600'
    },
    {
      datetime: '2024-11-19',
      open: '226.98000',
      high: '230.16000',
      low: '226.66000',
      close: '228.28000',
      volume: '36211800'
    },
    {
      datetime: '2024-11-18',
      open: '225.25000',
      high: '229.74001',
      low: '225.17000',
      close: '228.02000',
      volume: '44686000'
    },
    {
      datetime: '2024-11-15',
      open: '226.39999',
      high: '226.92000',
      low: '224.27000',
      close: '225.00000',
      volume: '47923700'
    },
    {
      datetime: '2024-11-14',
      open: '225.02000',
      high: '228.87000',
      low: '225.00000',
      close: '228.22000',
      volume: '44923900'
    },
    {
      datetime: '2024-11-13',
      open: '224.00999',
      high: '226.64999',
      low: '222.75999',
      close: '225.12000',
      volume: '48566200'
    },
    {
      datetime: '2024-11-12',
      open: '224.55000',
      high: '225.59000',
      low: '223.36000',
      close: '224.23000',
      volume: '40398300'
    },
    {
      datetime: '2024-11-11',
      open: '225.00000',
      high: '225.70000',
      low: '221.50000',
      close: '224.23000',
      volume: '42005600'
    },
    {
      datetime: '2024-11-08',
      open: '227.17000',
      high: '228.66000',
      low: '226.41000',
      close: '226.96001',
      volume: '38328800'
    },
    {
      datetime: '2024-11-07',
      open: '224.63000',
      high: '227.88000',
      low: '224.57001',
      close: '227.48000',
      volume: '42137700'
    },
    {
      datetime: '2024-11-06',
      open: '222.61000',
      high: '226.07001',
      low: '221.19000',
      close: '222.72000',
      volume: '54561100'
    },
    {
      datetime: '2024-11-05',
      open: '221.80000',
      high: '223.95000',
      low: '221.14000',
      close: '223.45000',
      volume: '28111300'
    },
    {
      datetime: '2024-11-04',
      open: '220.99001',
      high: '222.78999',
      low: '219.71001',
      close: '222.00999',
      volume: '44944500'
    },
    {
      datetime: '2024-11-01',
      open: '220.97000',
      high: '225.35001',
      low: '220.27000',
      close: '222.91000',
      volume: '65276700'
    },
    {
      datetime: '2024-10-31',
      open: '229.34000',
      high: '229.83000',
      low: '225.37000',
      close: '225.91000',
      volume: '64370100'
    },
    {
      datetime: '2024-10-30',
      open: '232.61000',
      high: '233.47000',
      low: '229.55000',
      close: '230.10001',
      volume: '47070900'
    },
    {
      datetime: '2024-10-29',
      open: '233.10001',
      high: '234.33000',
      low: '232.32001',
      close: '233.67000',
      volume: '35417200'
    },
    {
      datetime: '2024-10-28',
      open: '233.32001',
      high: '234.73000',
      low: '232.55000',
      close: '233.39999',
      volume: '36087100'
    },
    {
      datetime: '2024-10-25',
      open: '229.74001',
      high: '233.22000',
      low: '229.57001',
      close: '231.41000',
      volume: '38802300'
    },
    {
      datetime: '2024-10-24',
      open: '229.98000',
      high: '230.82001',
      low: '228.41000',
      close: '230.57001',
      volume: '31109500'
    },
    {
      datetime: '2024-10-23',
      open: '234.08000',
      high: '235.14000',
      low: '227.75999',
      close: '230.75999',
      volume: '52287000'
    },
    {
      datetime: '2024-10-22',
      open: '233.89000',
      high: '236.22000',
      low: '232.60001',
      close: '235.86000',
      volume: '38846600'
    },
    {
      datetime: '2024-10-21',
      open: '234.45000',
      high: '236.85001',
      low: '234.45000',
      close: '236.48000',
      volume: '36254500'
    },
    {
      datetime: '2024-10-18',
      open: '236.17999',
      high: '236.17999',
      low: '234.00999',
      close: '235.00000',
      volume: '46431500'
    },
    {
      datetime: '2024-10-17',
      open: '233.42999',
      high: '233.85001',
      low: '230.52000',
      close: '232.14999',
      volume: '32993800'
    },
    {
      datetime: '2024-10-16',
      open: '231.60001',
      high: '232.12000',
      low: '229.84000',
      close: '231.78000',
      volume: '34082200'
    }
  ],
  status: 'ok'
}

const VFIAX = {
  meta: {
    symbol: 'VFIAX',
    interval: '1day',
    currency: 'USD',
    exchange_timezone: 'America/New_York',
    exchange: 'NASDAQ',
    mic_code: 'XNAS',
    type: 'Mutual Fund'
  },
  values: [
    {
      datetime: '2024-11-25',
      open: '553.51001',
      high: '553.51001',
      low: '553.51001',
      close: '553.51001'
    },
    {
      datetime: '2024-11-22',
      open: '551.84003',
      high: '551.84003',
      low: '551.84003',
      close: '551.84003'
    },
    {
      datetime: '2024-11-21',
      open: '549.90997',
      high: '549.90997',
      low: '549.90997',
      close: '549.90997'
    },
    {
      datetime: '2024-11-20',
      open: '546.90002',
      high: '546.90002',
      low: '546.90002',
      close: '546.90002'
    },
    {
      datetime: '2024-11-19',
      open: '546.88000',
      high: '546.88000',
      low: '546.88000',
      close: '546.88000'
    },
    {
      datetime: '2024-11-18',
      open: '544.71002',
      high: '544.71002',
      low: '544.71002',
      close: '544.71002'
    },
    {
      datetime: '2024-11-15',
      open: '542.50000',
      high: '542.50000',
      low: '542.50000',
      close: '542.50000'
    },
    {
      datetime: '2024-11-14',
      open: '549.69000',
      high: '549.69000',
      low: '549.69000',
      close: '549.69000'
    },
    {
      datetime: '2024-11-13',
      open: '552.96997',
      high: '552.96997',
      low: '552.96997',
      close: '552.96997'
    },
    {
      datetime: '2024-11-12',
      open: '552.82001',
      high: '552.82001',
      low: '552.82001',
      close: '552.82001'
    },
    {
      datetime: '2024-11-11',
      open: '554.39001',
      high: '554.39001',
      low: '554.39001',
      close: '554.39001'
    },
    {
      datetime: '2024-11-08',
      open: '553.85999',
      high: '553.85999',
      low: '553.85999',
      close: '553.85999'
    },
    {
      datetime: '2024-11-07',
      open: '551.66998',
      high: '551.66998',
      low: '551.66998',
      close: '551.66998'
    },
    {
      datetime: '2024-11-06',
      open: '547.58002',
      high: '547.58002',
      low: '547.58002',
      close: '547.58002'
    },
    {
      datetime: '2024-11-05',
      open: '534.07001',
      high: '534.07001',
      low: '534.07001',
      close: '534.07001'
    },
    {
      datetime: '2024-11-04',
      open: '527.59998',
      high: '527.59998',
      low: '527.59998',
      close: '527.59998'
    },
    {
      datetime: '2024-11-01',
      open: '529.06000',
      high: '529.06000',
      low: '529.06000',
      close: '529.06000'
    },
    {
      datetime: '2024-10-31',
      open: '526.88000',
      high: '526.88000',
      low: '526.88000',
      close: '526.88000'
    },
    {
      datetime: '2024-10-30',
      open: '536.83002',
      high: '536.83002',
      low: '536.83002',
      close: '536.83002'
    },
    {
      datetime: '2024-10-29',
      open: '538.59998',
      high: '538.59998',
      low: '538.59998',
      close: '538.59998'
    },
    {
      datetime: '2024-10-28',
      open: '537.72998',
      high: '537.72998',
      low: '537.72998',
      close: '537.72998'
    },
    {
      datetime: '2024-10-25',
      open: '536.29999',
      high: '536.29999',
      low: '536.29999',
      close: '536.29999'
    },
    {
      datetime: '2024-10-24',
      open: '536.46002',
      high: '536.46002',
      low: '536.46002',
      close: '536.46002'
    },
    {
      datetime: '2024-10-23',
      open: '535.31000',
      high: '535.31000',
      low: '535.31000',
      close: '535.31000'
    },
    {
      datetime: '2024-10-22',
      open: '540.27002',
      high: '540.27002',
      low: '540.27002',
      close: '540.27002'
    },
    {
      datetime: '2024-10-21',
      open: '540.52002',
      high: '540.52002',
      low: '540.52002',
      close: '540.52002'
    },
    {
      datetime: '2024-10-18',
      open: '541.48999',
      high: '541.48999',
      low: '541.48999',
      close: '541.48999'
    },
    {
      datetime: '2024-10-17',
      open: '539.32001',
      high: '539.32001',
      low: '539.32001',
      close: '539.32001'
    },
    {
      datetime: '2024-10-16',
      open: '539.40997',
      high: '539.40997',
      low: '539.40997',
      close: '539.40997'
    },
    {
      datetime: '2024-10-15',
      open: '536.89001',
      high: '536.89001',
      low: '536.89001',
      close: '536.89001'
    }
  ],
  status: 'ok'
}

const QQQ = {
  meta: {
    symbol: 'QQQ',
    interval: '1day',
    currency: 'USD',
    exchange_timezone: 'America/New_York',
    exchange: 'NASDAQ',
    mic_code: 'XNMS',
    type: 'ETF'
  },
  values: [
    {
      datetime: '2024-11-26',
      open: '508.07999',
      high: '510.14001',
      low: '507.23639',
      close: '509.31000',
      volume: '25854013'
    },
    {
      datetime: '2024-11-25',
      open: '509.89999',
      high: '511.45001',
      low: '504.26001',
      close: '506.59000',
      volume: '26375200'
    },
    {
      datetime: '2024-11-22',
      open: '504.42001',
      high: '506.53000',
      low: '502.78000',
      close: '505.79001',
      volume: '23826600'
    },
    {
      datetime: '2024-11-21',
      open: '506.23999',
      high: '506.95999',
      low: '497.56000',
      close: '504.98001',
      volume: '34526700'
    },
    {
      datetime: '2024-11-20',
      open: '503.16000',
      high: '503.48001',
      low: '496.56000',
      close: '503.17001',
      volume: '29565500'
    },
    {
      datetime: '2024-11-19',
      open: '497.42001',
      high: '503.95001',
      low: '497.07999',
      close: '503.45999',
      volume: '24523000'
    },
    {
      datetime: '2024-11-18',
      open: '498.13000',
      high: '502.14001',
      low: '496.73001',
      close: '500.01999',
      volume: '27192700'
    },
    {
      datetime: '2024-11-15',
      open: '502.94000',
      high: '503.32999',
      low: '494.48999',
      close: '496.57001',
      volume: '51461100'
    },
    {
      datetime: '2024-11-14',
      open: '511.91000',
      high: '512.78998',
      low: '507.76999',
      close: '508.69000',
      volume: '28679500'
    },
    {
      datetime: '2024-11-13',
      open: '512.40002',
      high: '514.97998',
      low: '509.95001',
      close: '512.25000',
      volume: '24567400'
    },
    {
      datetime: '2024-11-12',
      open: '513.77002',
      high: '514.65997',
      low: '509.82999',
      close: '512.90997',
      volume: '25835300'
    },
    {
      datetime: '2024-11-11',
      open: '515.37000',
      high: '515.58002',
      low: '510.92001',
      close: '513.84003',
      volume: '24167500'
    },
    {
      datetime: '2024-11-08',
      open: '513.03998',
      high: '514.91998',
      low: '512.40997',
      close: '514.14001',
      volume: '22924500'
    },
    {
      datetime: '2024-11-07',
      open: '508.39999',
      high: '514.33002',
      low: '508.34000',
      close: '513.53998',
      volume: '32853100'
    },
    {
      datetime: '2024-11-06',
      open: '500.56000',
      high: '506.41000',
      low: '499.60001',
      close: '505.57999',
      volume: '43082200'
    },
    {
      datetime: '2024-11-05',
      open: '487.60999',
      high: '492.88000',
      low: '487.51999',
      close: '492.20999',
      volume: '24353600'
    },
    {
      datetime: '2024-11-04',
      open: '486.82001',
      high: '489.38000',
      low: '484.25000',
      close: '486.01001',
      volume: '23291600'
    },
    {
      datetime: '2024-11-01',
      open: '485.50000',
      high: '490.75000',
      low: '485.20001',
      close: '487.42999',
      volume: '33655800'
    },
    {
      datetime: '2024-10-31',
      open: '492.38000',
      high: '492.42999',
      low: '483.75000',
      close: '483.85001',
      volume: '41245200'
    },
    {
      datetime: '2024-10-30',
      open: '499.39001',
      high: '500.35001',
      low: '495.89001',
      close: '496.38000',
      volume: '29756000'
    },
    {
      datetime: '2024-10-29',
      open: '495.72000',
      high: '501.35001',
      low: '493.85001',
      close: '500.16000',
      volume: '28014100'
    },
    {
      datetime: '2024-10-28',
      open: '498.45999',
      high: '498.51999',
      low: '495.10001',
      close: '495.39999',
      volume: '20477800'
    },
    {
      datetime: '2024-10-25',
      open: '495.14001',
      high: '500.28000',
      low: '494.42999',
      close: '495.32001',
      volume: '38762100'
    },
    {
      datetime: '2024-10-24',
      open: '492.10999',
      high: '493.00000',
      low: '489.44000',
      close: '492.32001',
      volume: '22024900'
    },
    {
      datetime: '2024-10-23',
      open: '493.59000',
      high: '494.25000',
      low: '485.04999',
      close: '488.35999',
      volume: '39346600'
    },
    {
      datetime: '2024-10-22',
      open: '492.73001',
      high: '497.45001',
      low: '491.97000',
      close: '495.95999',
      volume: '26685800'
    },
    {
      datetime: '2024-10-21',
      open: '493.25000',
      high: '496.23001',
      low: '491.31000',
      close: '495.42001',
      volume: '30336500'
    },
    {
      datetime: '2024-10-18',
      open: '494.06000',
      high: '495.57001',
      low: '493.29999',
      close: '494.47000',
      volume: '25335000'
    },
    {
      datetime: '2024-10-17',
      open: '496.44000',
      high: '496.48999',
      low: '491.19000',
      close: '491.25000',
      volume: '27210700'
    },
    {
      datetime: '2024-10-16',
      open: '491.17999',
      high: '491.69000',
      low: '487.57001',
      close: '490.91000',
      volume: '22996800'
    }
  ],
  status: 'ok'
}

// BT.A:LSE (BT Group PLC)
const BTA = {
  meta: {
    symbol: 'BT.A',
    interval: '1day',
    currency: 'GBp',
    exchange_timezone: 'Europe/London',
    exchange: 'LSE',
    mic_code: 'XLON',
    type: 'Common Stock'
  },
  values: [
    {
      datetime: '2024-11-26',
      open: '155.00000',
      high: '157.10001',
      low: '154.74030',
      close: '156.14999',
      volume: '11802139'
    },
    {
      datetime: '2024-11-25',
      open: '151.55000',
      high: '156.39999',
      low: '151.14301',
      close: '154.95000',
      volume: '42827910'
    },
    {
      datetime: '2024-11-22',
      open: '148.35001',
      high: '152.00000',
      low: '148.35001',
      close: '151.25000',
      volume: '28953794'
    },
    {
      datetime: '2024-11-21',
      open: '149.95000',
      high: '150.64999',
      low: '147.06700',
      close: '147.70000',
      volume: '11135297'
    },
    {
      datetime: '2024-11-20',
      open: '150.00000',
      high: '150.80000',
      low: '148.45000',
      close: '149.85001',
      volume: '18829182'
    },
    {
      datetime: '2024-11-19',
      open: '145.00000',
      high: '149.80000',
      low: '144.95000',
      close: '149.80000',
      volume: '20276765'
    },
    {
      datetime: '2024-11-18',
      open: '141.75000',
      high: '144.75000',
      low: '141.75000',
      close: '144.75000',
      volume: '10990949'
    },
    {
      datetime: '2024-11-15',
      open: '139.25000',
      high: '142.64999',
      low: '139.25000',
      close: '142.00000',
      volume: '12669171'
    },
    {
      datetime: '2024-11-14',
      open: '137.05000',
      high: '140.25000',
      low: '136.64999',
      close: '140.00000',
      volume: '15571213'
    },
    {
      datetime: '2024-11-13',
      open: '137.75000',
      high: '138.50000',
      low: '136.00000',
      close: '136.70000',
      volume: '12090116'
    },
    {
      datetime: '2024-11-12',
      open: '139.50000',
      high: '140.39999',
      low: '137.75000',
      close: '137.85001',
      volume: '14323653'
    },
    {
      datetime: '2024-11-11',
      open: '141.25000',
      high: '142.00000',
      low: '140.14999',
      close: '140.45000',
      volume: '12324866'
    },
    {
      datetime: '2024-11-08',
      open: '136.20000',
      high: '140.35001',
      low: '136.00000',
      close: '140.00000',
      volume: '19219469'
    },
    {
      datetime: '2024-11-07',
      open: '139.00000',
      high: '139.95000',
      low: '130.95000',
      close: '137.00000',
      volume: '45816436'
    },
    {
      datetime: '2024-11-06',
      open: '148.55000',
      high: '148.67599',
      low: '141.02000',
      close: '142.10001',
      volume: '44029437'
    },
    {
      datetime: '2024-11-05',
      open: '142.25000',
      high: '147.39999',
      low: '142.20000',
      close: '147.39999',
      volume: '24735716'
    },
    {
      datetime: '2024-11-04',
      open: '140.25000',
      high: '143.84500',
      low: '139.89999',
      close: '142.14999',
      volume: '12869361'
    },
    {
      datetime: '2024-11-01',
      open: '137.95000',
      high: '141.20000',
      low: '137.85001',
      close: '140.25000',
      volume: '10840229'
    },
    {
      datetime: '2024-10-31',
      open: '138.50000',
      high: '139.30000',
      low: '137.20000',
      close: '138.25000',
      volume: '15790406'
    },
    {
      datetime: '2024-10-30',
      open: '138.64999',
      high: '141.89999',
      low: '138.30000',
      close: '139.75000',
      volume: '15314038'
    },
    {
      datetime: '2024-10-29',
      open: '143.45000',
      high: '143.55000',
      low: '138.92200',
      close: '139.39999',
      volume: '14033688'
    },
    {
      datetime: '2024-10-28',
      open: '144.95000',
      high: '145.55000',
      low: '140.39999',
      close: '142.80000',
      volume: '11969701'
    },
    {
      datetime: '2024-10-25',
      open: '144.95000',
      high: '145.25000',
      low: '143.64999',
      close: '144.39999',
      volume: '14173658'
    },
    {
      datetime: '2024-10-24',
      open: '143.70000',
      high: '145.30000',
      low: '143.50000',
      close: '144.50000',
      volume: '13423895'
    },
    {
      datetime: '2024-10-23',
      open: '143.95000',
      high: '144.25000',
      low: '142.35001',
      close: '142.89999',
      volume: '9458792'
    },
    {
      datetime: '2024-10-22',
      open: '145.30000',
      high: '145.70599',
      low: '142.53101',
      close: '144.20000',
      volume: '9231439'
    },
    {
      datetime: '2024-10-21',
      open: '146.00000',
      high: '146.85001',
      low: '145.39999',
      close: '145.95000',
      volume: '8326919'
    },
    {
      datetime: '2024-10-18',
      open: '147.80000',
      high: '148.10001',
      low: '145.89999',
      close: '146.25000',
      volume: '8954170'
    },
    {
      datetime: '2024-10-17',
      open: '146.35001',
      high: '148.20700',
      low: '145.60001',
      close: '148.20000',
      volume: '15571800'
    },
    {
      datetime: '2024-10-16',
      open: '146.35001',
      high: '147.08299',
      low: '145.39999',
      close: '146.14999',
      volume: '37378584'
    }
  ],
  status: 'ok'
}

// BTC/USD
// const BTC = {
//   meta: {
//     symbol: 'BTC',
//     interval: '1day',
//     currency: 'USD',
//     exchange_timezone: 'America/New_York',
//     exchange: 'NYSE',
//     mic_code: 'ARCX',
//     type: 'ETF'
//   },
//   values: [
//     {
//       datetime: '2024-11-26',
//       open: '40.87000',
//       high: '42.03000',
//       low: '40.20000',
//       close: '40.32000',
//       volume: '1686635'
//     },
//     {
//       datetime: '2024-11-25',
//       open: '43.17000',
//       high: '43.22000',
//       low: '41.84100',
//       close: '42.16000',
//       volume: '2153200'
//     },
//     {
//       datetime: '2024-11-22',
//       open: '43.34000',
//       high: '44.29000',
//       low: '43.12000',
//       close: '44.05000',
//       volume: '2335300'
//     },
//     {
//       datetime: '2024-11-21',
//       open: '43.20000',
//       high: '43.98000',
//       low: '42.40000',
//       close: '43.60000',
//       volume: '2695900'
//     },
//     {
//       datetime: '2024-11-20',
//       open: '41.97000',
//       high: '42.14000',
//       low: '41.37000',
//       close: '41.84000',
//       volume: '1355100'
//     },
//     {
//       datetime: '2024-11-19',
//       open: '40.65000',
//       high: '41.75000',
//       low: '40.45000',
//       close: '41.10000',
//       volume: '3631860'
//     },
//     {
//       datetime: '2024-11-18',
//       open: '40.15000',
//       high: '41.10000',
//       low: '39.77500',
//       close: '40.65000',
//       volume: '3808420'
//     },
//     {
//       datetime: '2024-11-15',
//       open: '39.65000',
//       high: '40.65000',
//       low: '38.90000',
//       close: '40.60000',
//       volume: '4386120'
//     },
//     {
//       datetime: '2024-11-14',
//       open: '40.55000',
//       high: '40.75000',
//       low: '38.75000',
//       close: '38.85000',
//       volume: '4882080'
//     },
//     {
//       datetime: '2024-11-13',
//       open: '39.95000',
//       high: '41.50000',
//       low: '39.60000',
//       close: '39.85000',
//       volume: '5549940'
//     },
//     {
//       datetime: '2024-11-12',
//       open: '7.64000',
//       high: '7.99000',
//       low: '7.56000',
//       close: '7.96000',
//       volume: '31154600'
//     },
//     {
//       datetime: '2024-11-11',
//       open: '7.27000',
//       high: '7.77000',
//       low: '7.24000',
//       close: '7.73000',
//       volume: '30186000'
//     },
//     {
//       datetime: '2024-11-08',
//       open: '6.77000',
//       high: '6.87000',
//       low: '6.71000',
//       close: '6.80000',
//       volume: '13026200'
//     },
//     {
//       datetime: '2024-11-07',
//       open: '6.65000',
//       high: '6.83000',
//       low: '6.61000',
//       close: '6.80000',
//       volume: '13447100'
//     },
//     {
//       datetime: '2024-11-06',
//       open: '6.59000',
//       high: '6.79000',
//       low: '6.52000',
//       close: '6.76000',
//       volume: '13814500'
//     },
//     {
//       datetime: '2024-11-05',
//       open: '6.15000',
//       high: '6.25600',
//       low: '6.09500',
//       close: '6.16000',
//       volume: '10389500'
//     },
//     {
//       datetime: '2024-11-04',
//       open: '6.08000',
//       high: '6.10000',
//       low: '5.95500',
//       close: '5.97000',
//       volume: '11595300'
//     },
//     {
//       datetime: '2024-11-01',
//       open: '6.23000',
//       high: '6.35200',
//       low: '6.09200',
//       close: '6.14000',
//       volume: '12230200'
//     },
//     {
//       datetime: '2024-10-31',
//       open: '6.39000',
//       high: '6.39000',
//       low: '6.19000',
//       close: '6.21000',
//       volume: '14148800'
//     },
//     {
//       datetime: '2024-10-30',
//       open: '6.37000',
//       high: '6.43000',
//       low: '6.33200',
//       close: '6.37000',
//       volume: '8388800'
//     },
//     {
//       datetime: '2024-10-29',
//       open: '6.32000',
//       high: '6.53900',
//       low: '6.29000',
//       close: '6.44000',
//       volume: '14295000'
//     },
//     {
//       datetime: '2024-10-28',
//       open: '6.12000',
//       high: '6.20000',
//       low: '6.06800',
//       close: '6.17000',
//       volume: '14157600'
//     },
//     {
//       datetime: '2024-10-25',
//       open: '6.03000',
//       high: '6.11000',
//       low: '5.84000',
//       close: '5.92000',
//       volume: '12811700'
//     },
//     {
//       datetime: '2024-10-24',
//       open: '6.00000',
//       high: '6.06000',
//       low: '5.96400',
//       close: '6.06000',
//       volume: '5771000'
//     },
//     {
//       datetime: '2024-10-23',
//       open: '5.90000',
//       high: '5.93000',
//       low: '5.77400',
//       close: '5.88000',
//       volume: '5817900'
//     },
//     {
//       datetime: '2024-10-22',
//       open: '5.95000',
//       high: '6.00000',
//       low: '5.90000',
//       close: '5.98000',
//       volume: '6063100'
//     },
//     {
//       datetime: '2024-10-21',
//       open: '6.02000',
//       high: '6.03000',
//       low: '5.92000',
//       close: '6.01000',
//       volume: '9505100'
//     },
//     {
//       datetime: '2024-10-18',
//       open: '6.01000',
//       high: '6.13000',
//       low: '6.00500',
//       close: '6.08000',
//       volume: '6915900'
//     },
//     {
//       datetime: '2024-10-17',
//       open: '5.95000',
//       high: '6.00800',
//       low: '5.91000',
//       close: '5.92000',
//       volume: '8568200'
//     },
//     {
//       datetime: '2024-10-16',
//       open: '6.02000',
//       high: '6.07000',
//       low: '5.95500',
//       close: '6.01000',
//       volume: '8191000'
//     }
//   ],
//   status: 'ok'
// }

const BTC = {
  meta: {
    symbol: 'BTC',
    interval: '1day',
    currency: 'USD',
    exchange_timezone: 'America/New_York',
    exchange: 'NYSE',
    mic_code: 'ARCX',
    type: 'ETF'
  },
  values: [
    {
      datetime: '2024-11-29',
      open: '43.22000',
      high: '43.90000',
      low: '43.06000',
      close: '43.09000',
      volume: '927600'
    },
    {
      datetime: '2024-11-27',
      open: '41.93000',
      high: '43.22000',
      low: '41.80000',
      close: '42.93000',
      volume: '1417600'
    },
    {
      datetime: '2024-11-26',
      open: '40.87000',
      high: '42.03000',
      low: '40.20000',
      close: '40.32000',
      volume: '1696900'
    },
    {
      datetime: '2024-11-25',
      open: '43.17000',
      high: '43.22000',
      low: '41.84100',
      close: '42.16000',
      volume: '2153200'
    },
    {
      datetime: '2024-11-22',
      open: '43.34000',
      high: '44.29000',
      low: '43.12000',
      close: '44.05000',
      volume: '2335300'
    },
    {
      datetime: '2024-11-21',
      open: '43.20000',
      high: '43.98000',
      low: '42.40000',
      close: '43.60000',
      volume: '2695900'
    },
    {
      datetime: '2024-11-20',
      open: '41.97000',
      high: '42.14000',
      low: '41.37000',
      close: '41.84000',
      volume: '1355100'
    },
    {
      datetime: '2024-11-19',
      open: '40.65000',
      high: '41.75000',
      low: '40.45000',
      close: '41.10000',
      volume: '3631860'
    },
    {
      datetime: '2024-11-18',
      open: '40.15000',
      high: '41.10000',
      low: '39.77500',
      close: '40.65000',
      volume: '3808420'
    },
    {
      datetime: '2024-11-15',
      open: '39.65000',
      high: '40.65000',
      low: '38.90000',
      close: '40.60000',
      volume: '4386120'
    },
    {
      datetime: '2024-11-14',
      open: '40.55000',
      high: '40.75000',
      low: '38.75000',
      close: '38.85000',
      volume: '4882080'
    },
    {
      datetime: '2024-11-13',
      open: '39.95000',
      high: '41.50000',
      low: '39.60000',
      close: '39.85000',
      volume: '5549940'
    },
    {
      datetime: '2024-11-12',
      open: '7.64000',
      high: '7.99000',
      low: '7.56000',
      close: '7.96000',
      volume: '31154600'
    },
    {
      datetime: '2024-11-11',
      open: '7.27000',
      high: '7.77000',
      low: '7.24000',
      close: '7.73000',
      volume: '30186000'
    },
    {
      datetime: '2024-11-08',
      open: '6.77000',
      high: '6.87000',
      low: '6.71000',
      close: '6.80000',
      volume: '13026200'
    },
    {
      datetime: '2024-11-07',
      open: '6.65000',
      high: '6.83000',
      low: '6.61000',
      close: '6.80000',
      volume: '13447100'
    },
    {
      datetime: '2024-11-06',
      open: '6.59000',
      high: '6.79000',
      low: '6.52000',
      close: '6.76000',
      volume: '13814500'
    },
    {
      datetime: '2024-11-05',
      open: '6.15000',
      high: '6.25600',
      low: '6.09500',
      close: '6.16000',
      volume: '10389500'
    },
    {
      datetime: '2024-11-04',
      open: '6.08000',
      high: '6.10000',
      low: '5.95500',
      close: '5.97000',
      volume: '11595300'
    },
    {
      datetime: '2024-11-01',
      open: '6.23000',
      high: '6.35200',
      low: '6.09200',
      close: '6.14000',
      volume: '12230200'
    },
    {
      datetime: '2024-10-31',
      open: '6.39000',
      high: '6.39000',
      low: '6.19000',
      close: '6.21000',
      volume: '14148800'
    },
    {
      datetime: '2024-10-30',
      open: '6.37000',
      high: '6.43000',
      low: '6.33200',
      close: '6.37000',
      volume: '8388800'
    },
    {
      datetime: '2024-10-29',
      open: '6.32000',
      high: '6.53900',
      low: '6.29000',
      close: '6.44000',
      volume: '14295000'
    },
    {
      datetime: '2024-10-28',
      open: '6.12000',
      high: '6.20000',
      low: '6.06800',
      close: '6.17000',
      volume: '14157600'
    },
    {
      datetime: '2024-10-25',
      open: '6.03000',
      high: '6.11000',
      low: '5.84000',
      close: '5.92000',
      volume: '12811700'
    },
    {
      datetime: '2024-10-24',
      open: '6.00000',
      high: '6.06000',
      low: '5.96400',
      close: '6.06000',
      volume: '5771000'
    },
    {
      datetime: '2024-10-23',
      open: '5.90000',
      high: '5.93000',
      low: '5.77400',
      close: '5.88000',
      volume: '5817900'
    },
    {
      datetime: '2024-10-22',
      open: '5.95000',
      high: '6.00000',
      low: '5.90000',
      close: '5.98000',
      volume: '6063100'
    },
    {
      datetime: '2024-10-21',
      open: '6.02000',
      high: '6.03000',
      low: '5.92000',
      close: '6.01000',
      volume: '9505100'
    },
    {
      datetime: '2024-10-18',
      open: '6.01000',
      high: '6.13000',
      low: '6.00500',
      close: '6.08000',
      volume: '6915900'
    }
  ],
  status: 'ok'
}

// PETR4:Bovespa (Petroleo Brasileiro S.A. - Petrobras)
const PETR4 = {
  meta: {
    symbol: 'PETR4',
    interval: '1day',
    currency: 'BRL',
    exchange_timezone: 'America/Paramaribo',
    exchange: 'Bovespa',
    mic_code: 'BVMF',
    type: 'Common Stock'
  },
  values: [
    {
      datetime: '2024-11-26',
      open: '39.36000',
      high: '39.51000',
      low: '39.06000',
      close: '39.13000',
      volume: '30215400'
    },
    {
      datetime: '2024-11-25',
      open: '39.38000',
      high: '39.86000',
      low: '39.15000',
      close: '39.18000',
      volume: '41119500'
    },
    {
      datetime: '2024-11-22',
      open: '38.71000',
      high: '39.83000',
      low: '38.47000',
      close: '39.42000',
      volume: '85234900'
    },
    {
      datetime: '2024-11-21',
      open: '37.97000',
      high: '38.13000',
      low: '37.55000',
      close: '37.91000',
      volume: '36048400'
    },
    {
      datetime: '2024-11-19',
      open: '38.10000',
      high: '38.30000',
      low: '37.65000',
      close: '37.80000',
      volume: '26002700'
    },
    {
      datetime: '2024-11-18',
      open: '37.20000',
      high: '38.30000',
      low: '37.20000',
      close: '38.20000',
      volume: '39004100'
    },
    {
      datetime: '2024-11-17',
      open: '37.20000',
      high: '38.30000',
      low: '37.20000',
      close: '38.20000',
      volume: '39004100'
    },
    {
      datetime: '2024-11-15',
      open: '37.27000',
      high: '37.27000',
      low: '37.27000',
      close: '37.27000',
      volume: '30060900'
    },
    {
      datetime: '2024-11-14',
      open: '36.92000',
      high: '37.33000',
      low: '36.86000',
      close: '37.27000',
      volume: '30262100'
    },
    {
      datetime: '2024-11-13',
      open: '36.95000',
      high: '37.07000',
      low: '36.53000',
      close: '36.88000',
      volume: '34090000'
    },
    {
      datetime: '2024-11-12',
      open: '36.36000',
      high: '37.11000',
      low: '36.34000',
      close: '36.93000',
      volume: '39412300'
    },
    {
      datetime: '2024-11-11',
      open: '36.36000',
      high: '37.11000',
      low: '36.34000',
      close: '36.93000',
      volume: '39412300'
    },
    {
      datetime: '2024-11-08',
      open: '35.85000',
      high: '36.32000',
      low: '35.54000',
      close: '36.18000',
      volume: '49865100'
    },
    {
      datetime: '2024-11-07',
      open: '35.49000',
      high: '35.89000',
      low: '35.27000',
      close: '35.51000',
      volume: '34081200'
    },
    {
      datetime: '2024-11-06',
      open: '35.05000',
      high: '35.46000',
      low: '35.04000',
      close: '35.40000',
      volume: '28440800'
    },
    {
      datetime: '2024-11-05',
      open: '35.50000',
      high: '35.60000',
      low: '35.03000',
      close: '35.39000',
      volume: '23990600'
    },
    {
      datetime: '2024-11-04',
      open: '35.90000',
      high: '35.95000',
      low: '35.38000',
      close: '35.50000',
      volume: '24003600'
    },
    {
      datetime: '2024-11-01',
      open: '36.20000',
      high: '36.37000',
      low: '35.30000',
      close: '35.42000',
      volume: '30605300'
    },
    {
      datetime: '2024-10-31',
      open: '35.87000',
      high: '36.05000',
      low: '35.63000',
      close: '35.91000',
      volume: '25597000'
    },
    {
      datetime: '2024-10-30',
      open: '36.12000',
      high: '36.37000',
      low: '35.85000',
      close: '35.85000',
      volume: '26144700'
    },
    {
      datetime: '2024-10-29',
      open: '36.33000',
      high: '36.42000',
      low: '35.80000',
      close: '36.01000',
      volume: '26090200'
    },
    {
      datetime: '2024-10-28',
      open: '35.49000',
      high: '36.13000',
      low: '35.34000',
      close: '36.09000',
      volume: '27507100'
    },
    {
      datetime: '2024-10-25',
      open: '35.96000',
      high: '36.49000',
      low: '35.85000',
      close: '36.15000',
      volume: '32585900'
    },
    {
      datetime: '2024-10-24',
      open: '35.85000',
      high: '36.03000',
      low: '35.56000',
      close: '35.90000',
      volume: '23058900'
    },
    {
      datetime: '2024-10-23',
      open: '35.91000',
      high: '35.94000',
      low: '35.57000',
      close: '35.66000',
      volume: '30769100'
    },
    {
      datetime: '2024-10-22',
      open: '36.20000',
      high: '36.30000',
      low: '35.99000',
      close: '36.11000',
      volume: '29144300'
    },
    {
      datetime: '2024-10-21',
      open: '37.00000',
      high: '37.05000',
      low: '36.20000',
      close: '36.25000',
      volume: '28390000'
    },
    {
      datetime: '2024-10-18',
      open: '36.98000',
      high: '37.07000',
      low: '36.41000',
      close: '36.83000',
      volume: '32000800'
    },
    {
      datetime: '2024-10-17',
      open: '37.21000',
      high: '37.21000',
      low: '36.69000',
      close: '36.93000',
      volume: '22174300'
    },
    {
      datetime: '2024-10-16',
      open: '37.55000',
      high: '37.58000',
      low: '37.19000',
      close: '37.21000',
      volume: '23041200'
    }
  ],
  status: 'ok'
}

// ABML/IXIC not working

// EXPORTS

export const US = { AAPL, QQQ, VFIAX }
export const UK = { BTA }
export const BR = { PETR4 }
export const crypto = { BTC }

export const stockDataObjects: Record<string, StockData> = {
  ...US,
  ...UK,
  ...BR,
  ...crypto
}
