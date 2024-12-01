import { QueryClientProvider } from '@tanstack/react-query'
import { TwelvedataContainer } from '../TwelveData/TwelvedataContainer'
import { queryClient } from '../../queryClient'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

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

export const ChartApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TwelvedataContainer />
    </QueryClientProvider>
  )
}
