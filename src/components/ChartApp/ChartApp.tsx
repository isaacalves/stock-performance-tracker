import { QueryClientProvider } from '@tanstack/react-query'
import { TwelvedataContainer } from '../TwelveData/TwelvedataContainer'
import { queryClient } from '../../queryClient'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { StockLabel } from '../TwelveData/types'

// This wrapper ensures the QueryClientProvider is instantiated before TwelvedataContainer is rendered.

// QueryClientProvider cannot be placed directly inside TwelvedataContainer because React Query hooks
// in TwelvedataContainer require the provider to exist higher up in the tree.

// QueryClientProvider also cannot be placed directly in index.astro with client:load due to
// timing issues when loading the provider and the container simultaneously.

let persister
if (typeof window !== 'undefined') {
  persister = createSyncStoragePersister({
    storage: window.localStorage
  })

  persistQueryClient({
    queryClient,
    persister
  })
}

const allSymbols = [
  StockLabel.AAPL,
  StockLabel.PETR4,
  StockLabel.QQQ,
  StockLabel.VFIAX,
  StockLabel.BTA,
  StockLabel.BTC,
]

// todo: verify it's not repeating requests unnecessarily
// we're passing the symbol and loading the data internally in each TwelvedataContainer
// however, the responses should be cached

export const ChartApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col space-y-4">
        <TwelvedataContainer className="h-96" symbol={allSymbols.filter(s => s !== 'BTC')} usePercentage={true} />
        {allSymbols.map((symbol) => (
          <TwelvedataContainer
            key={symbol}
            className="h-96"
            symbol={[symbol]}
            usePercentage={false}
          />
        ))}
      </div>
    </QueryClientProvider>
  )
}
