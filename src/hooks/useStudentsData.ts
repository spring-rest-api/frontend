import { useQuery } from '@tanstack/react-query'
import { api } from '@/api/axios.ts'

export default function useStudentsData() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['students'],
    queryFn: () => api.get<StudentResponse>(`/api/v1/student`),
  })
  const students = data?.data

  return { isLoading, isError, students }
}
