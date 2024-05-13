import { useQuery } from '@tanstack/react-query'
import { api } from '@/api/axios.ts'

export default function useCarsData() {
  const { isLoading, isError, refetch, data } = useQuery({
    queryKey: ['cars'],
    queryFn: () => api.get<CarResponse[]>(`/api/v1/car`),
  })
  const cars = data?.data

  return { isLoading, isError, refetch, cars }
}
