import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 86400000, // 1 day
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})
