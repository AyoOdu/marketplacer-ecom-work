import useSWR from 'swr'

const fetcher = (...args) => {
  const [url, body] = args
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
    .then((response) => {
      if (!response.ok) return { error: { message: response.status, statusCode: response.statusText } }
      return response.json()
    })
    .then((json) => {
      return json
    })
    .catch((error) => ({
      error,
      error: {
        message: 'Error setting up request',
      },
    }))
}

export const useSwrFetcher = (params) => {
  const { data, error } = useSWR(params, fetcher)
  const { products } = data || {}
  return {
    products,
    isLoading: !error && !data,
    isError: error,
  }
}
