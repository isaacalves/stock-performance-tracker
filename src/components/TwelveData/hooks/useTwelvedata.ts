import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.PUBLIC_TWELVEDATA_API_KEY

// todo: adapt useTwelvedata() so it can be used with multiple symbols (can it be done in one request or needs multiple?)

export const useTwelvedata = ({ symbol }: { symbol: string }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`

      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const result = await response.json()
        setData(result)
        console.log('Fetched Data:', result) // Debugging
      } catch (err) {
        console.error('Error fetching data:', err)
        setError((err as any).message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [symbol]) // Refetch data when the symbol changes

  return { data, error, loading }
}
