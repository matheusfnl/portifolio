import { api } from 'src/config/axios'

interface ApiResponse<T> {
  data: T
  headers: {
    link?: string
    [key: string]: string | undefined
  }
}

export const fetchApi = async <T>({
  url,
  method = 'get',
  params = {},
  handleError = () => {},
}: {
  url: string
  method?: 'get' | 'put' | 'post'
  params?: object
  handleError?: () => void
}): Promise<ApiResponse<T>> => {
  try {
    const parsed_params = new URLSearchParams({ ...params })
    const startTime = Date.now()
    const response = await api[method](url, { params: parsed_params })
    const elapsed = Date.now() - startTime
    if (elapsed < 600) {
      await new Promise((resolve) => setTimeout(resolve, 600 - elapsed))
    }

    return {
      data: response.data,
      headers: {
        link: response.headers['link'] as string,
        ...(response.headers as Record<string, string>),
      },
    }
  } catch (err) {
    handleError()
    throw err
  }
}
