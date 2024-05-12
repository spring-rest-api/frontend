import { Button } from '@/components/ui/button.tsx'

function ShowcaseTile({ title, image }: { title: string; image: string }) {
  return (
    <div className="group flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
      <img
        alt="Model X"
        className="aspect-[4/3] w-full overflow-hidden rounded-lg object-cover object-center"
        height="300"
        src={image}
        width="400"
      />
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <Button>Configure</Button>
      </div>
    </div>
  )
}

export default function Showcase({ data }: { data: StudentResponse[] }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
        {data.map((el, id) => {
          return <ShowcaseTile key={id} title={el.email} image="/xx" />
        })}
      </div>
    </section>
  )
}
