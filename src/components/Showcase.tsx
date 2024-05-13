import { Button } from '@/components/ui/button.tsx'
import tempImage from '../../assets/images/autoTemp.jpg'

function ShowcaseTile({ car }: { car: CarDataProps }) {
  return (
    <div className="group flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
      <img
        alt="Model X"
        className="aspect-[4/3] w-full overflow-hidden rounded-lg object-cover object-center"
        height="300"
        src={tempImage}
        width="400"
      />
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold">
          {car.brand} {car.model}
        </h3>
        <div className="space-x-3">
          <Button>Update</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default function Showcase({ data }: { data: CarDataProps[] }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
        {data.length === 0 ? (
          <div className="text-2xl text-red-600 text-center">
            You have no cars in your collection
          </div>
        ) : (
          data.map((car, id) => {
            return <ShowcaseTile key={id} car={car} />
          })
        )}
      </div>
    </section>
  )
}
