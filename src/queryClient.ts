import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Adjust as needed
      retry: false,
      staleTime: 0 // Adjust for caching needs
    }
  }
})
