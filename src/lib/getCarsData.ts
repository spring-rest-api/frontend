import { useQuery } from '@tanstack/react-query'
import { api } from '@/api/axios.ts'

export default function getCarsData() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['cars'],
    queryFn: () => api.get<CarResponse[]>(`/api/v1/car`),
  })
  const cars = data?.data

  return { isLoading, isError, cars }
}
