import { Button } from '@/components/ui/button.tsx'
import { api } from '@/api/axios.ts'

function ShowcaseTile({
  car,
  refetch,
}: {
  car: CarResponse
  refetch: () => void
}) {
  const deleteCar = async () => {
    try {
      await api.delete(`/api/v1/car/${car.id}`)
      refetch()
    } catch (error) {
      console.log(error)
    }
  }

  const updateCar = async (newBrand: string, newModel: string) => {
    try {
      await api.put(`/api/v1/car/${car.id}?brand=${newBrand}&model=${newModel}`)
      refetch()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="group flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
      <img
        alt="Model X"
        className="aspect-[4/3] w-full overflow-hidden rounded-lg object-cover object-center"
        height="300"
        src={car.imageUrl}
        width="400"
      />
      <div className="space-y-2 text-center">
        <p className="text-xl font-bold">{`brand: ${car.brand}`}</p>
        <p className="text-xl font-bold">{`model: ${car.model}`}</p>
        <p className="text-xl font-bold">{`year: ${car.year}`}</p>
        <div className="space-x-3">
          <Button onClick={() => updateCar('hyundai', 'i30')}>Update</Button>
          <Button onClick={() => deleteCar()}>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default function Showcase({
  data,
  refetch,
}: {
  data: CarResponse[]
  refetch: () => void
}) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
        {data.length === 0 ? (
          <div className="text-2xl text-red-600 text-center">
            You have no cars in your collection
          </div>
        ) : (
          data.map((car, id) => {
            return <ShowcaseTile key={id} car={car} refetch={refetch} />
          })
        )}
      </div>
    </section>
  )
}
