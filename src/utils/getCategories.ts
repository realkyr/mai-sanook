import { baseUrl } from '@/utils/request'

export const getCategories = async () => {
  const response = await fetch(`${baseUrl}/categories`)
  return await response.json()
}
