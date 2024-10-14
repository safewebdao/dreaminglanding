import { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: "AI-Powered Design",
    description: "Our advanced AI algorithms analyze and enhance your designs for maximum impact.",
    image: "https://source.unsplash.com/random/800x600?ai",
  },
  {
    title: "Instant Optimization",
    description: "Get stunning, high-converting landing pages in seconds, not hours.",
    image: "https://source.unsplash.com/random/800x600?optimization",
  },
  {
    title: "Customizable Templates",
    description: "Choose from a wide range of industry-specific templates to kickstart your design.",
    image: "https://source.unsplash.com/random/800x600?template",
  },
]

export const FeatureShowcase: FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Stunning Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={800}
                height={600}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}