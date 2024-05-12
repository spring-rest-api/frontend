import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Textarea } from '@/components/ui/textarea.tsx'
import { Button } from '@/components/ui/button.tsx'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export default function CarForm() {
  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="mx-auto max-w-md space-y-6 py-12 md:py-20">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Creation Form</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill in the form and create your dream car
          </p>
        </div>
        {/*{errors ? (*/}
        {/*  <div className="text-red-600 text-center">Some error</div>*/}
        {/*) : null}*/}
        {/*{isSubmitted ? <div>Submitted</div> : null}*/}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Input
                {...register('brand')}
                id="brand"
                placeholder="Enter car brand"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Year</Label>
              <Input
                {...register('year')}
                id="year"
                placeholder="Enter production year"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input
              {...register('model')}
              id="model"
              placeholder="Enter car model"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Color</Label>
            <Input
              {...register('color')}
              id="color"
              placeholder="Enter car color"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Description (optional)</Label>
            <Textarea
              {...register('desc')}
              className="min-h-[100px]"
              id="desc"
              placeholder="Describe the car"
            />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}
