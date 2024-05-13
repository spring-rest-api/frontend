import Showcase from '@/components/Showcase.tsx'
import useCarsData from '@/lib/useCarsData.ts'

export default function Collection() {
  const { isLoading, isError, refetch, cars } = useCarsData()

  console.log('DATA', cars)
  return (
    <>
      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>Error</div> : null}
      {cars ? (
        <Showcase data={cars} refetch={refetch} />
      ) : (
        <div>No response data</div>
      )}
    </>
  )
}
