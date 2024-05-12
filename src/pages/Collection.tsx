import Showcase from '@/components/Showcase.tsx'
import useStudentsData from '@/hooks/useStudentsData.ts'

export default function Collection() {
  const { isLoading, isError, students } = useStudentsData()

  return (
    <>
      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>Error</div> : null}
      {students ? <Showcase data={students} /> : <div>No response data</div>}
    </>
  )
}
