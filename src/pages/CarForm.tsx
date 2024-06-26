import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Textarea } from '@/components/ui/textarea.tsx'
import { Button } from '@/components/ui/button.tsx'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { api, imageApi } from '@/api/axios.ts'
import { useRef, useState } from 'react'

export default function CarForm() {
  const [message, setMessage] = useState<string | null>(null)
  const { register, handleSubmit } = useForm()
  const ref = useRef<HTMLFormElement>(null)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const imageResponse = await api.get(`/api/v1/image`)
      const imageUrl = imageResponse.data
      const image = data.image[0]

      const uploadResponse = await imageApi.postForm(imageUrl, { file: image })
      const newImageUrl = uploadResponse.data.result.variants[0]
      console.log('HERE IS THE IMAGE URL BEING SENT')

      const newCarData: CarDataProps = {
        model: data.model,
        brand: data.brand,
        description: data.description,
        year: parseInt(data.year, 10),
        imageUrl: newImageUrl,
      }

      await api.post('/api/v1/car', newCarData)
      setMessage('Car added')
      ref.current?.reset()
    } catch (error) {
      console.log(error)
      // @ts-ignore
      setMessage(error.response.data.message)
    }
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
        {message ? (
          <div
            className={`text-center ${message === 'Car added' ? 'text-green-600' : 'text-red-600'}`}
          >
            {message}
          </div>
        ) : null}
        <form
          ref={ref}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          method="post"
          encType="multipart/form-data"
        >
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
            <Label htmlFor="message">Description (optional)</Label>
            <Textarea
              {...register('description')}
              className="min-h-[100px]"
              id="description"
              placeholder="Describe the car"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <Label htmlFor="image">Image</Label>
            <input {...register('image')} id="image" type="file" />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}
