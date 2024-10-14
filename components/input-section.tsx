import { FC, useState } from 'react'
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

export const InputSection: FC = () => {
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setProcessing(true)
    try {
      // Here you would call your API to process the image
      await new Promise(resolve => setTimeout(resolve, 2000))
      setResult('https://source.unsplash.com/random/1200x800?webdesign')
      toast({
        title: "Design optimized successfully",
        description: "Your new design is ready to view.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your design.",
        variant: "destructive",
      })
    } finally {
      setProcessing(false)
    }
  }

  return (
    <section id="input-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Optimize Your Design</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Enter URL or Upload Image</CardTitle>
            <CardDescription>Provide a website URL or upload an image of your current design</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input type="url" placeholder="Enter website URL" {...register('url')} />
                {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>}
              </div>
              <div>
                <Input type="file" accept="image/*" {...register('image')} />
                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
              </div>
              <Button type="submit" disabled={processing}>
                {processing ? 'Optimizing...' : 'Optimize Design'}
              </Button>
            </form>
          </CardContent>
          {result && (
            <CardFooter>
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-2">Optimized Design:</h3>
                <img src={result} alt="Optimized Design" className="w-full rounded-lg shadow-lg" />
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  )
}