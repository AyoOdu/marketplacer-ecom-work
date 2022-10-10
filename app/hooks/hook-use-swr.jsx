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

// hook returns fetch data, and status of request: https://swr.vercel.app/
export const useSwrFetcher = (params) => {
  const { data, error } = useSWR(params, fetcher)
  const { validProducts, validProductsUuid } = data || {}
  return {
    validProducts,
    validProductsUuid,
    isLoading: !error && !data,
    isError: error,
  }
}
