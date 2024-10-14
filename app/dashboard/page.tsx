"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const formSchema = z.object({
  url: z.string().url().optional(),
  image: z.instanceof(File).optional(),
}).refine((data) => data.url || data.image, {
  message: "Either URL or image must be provided",
})

export default function Dashboard() {
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setProcessing(true)
    try {
      // Here you would call your API to process the image
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      setResult('https://picsum.photos/400/300') // Placeholder result
      toast({
        title: "Image processed successfully",
        description: "Your image has been processed and is ready to view.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your image.",
        variant: "destructive",
      })
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Processor Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Process New Image</CardTitle>
          <CardDescription>Enter a URL or upload an image to process</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input type="url" placeholder="Enter image URL" {...register('url')} />
              {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>}
            </div>
            <div>
              <Input type="file" accept="image/*" {...register('image')} />
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
            </div>
            <Button type="submit" disabled={processing}>
              {processing ? 'Processing...' : 'Process Image'}
            </Button>
          </form>
        </CardContent>
        {result && (
          <CardFooter>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2">Processed Image:</h3>
              <img src={result} alt="Processed" className="w-full max-w-md mx-auto" />
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}