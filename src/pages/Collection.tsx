import Showcase from '@/components/Showcase.tsx'
import getCarsData from '@/lib/getCarsData.ts'

export default function Collection() {
  const { isLoading, isError, cars } = getCarsData()

  console.log('DATA', cars)
  return (
    <>
      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>Error</div> : null}
      {cars ? <Showcase data={cars} /> : <div>No response data</div>}
    </>
  )
}
