import autoTemp from '../../assets/images/autoTemp.jpg'

export default function HomeIntro() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Add Your Dream Cars
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Explore our wide range of car models and configure them to your
            exact specifications. Get the car of your dreams with our
            easy-to-use configuration tool.
          </p>
        </div>
        <img
          alt="Car"
          className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="650"
          src={autoTemp}
          width="900"
        />
      </div>
    </section>
  )
}
