import { FC } from 'react'
import { motion } from 'framer-motion'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

export const HeroSection: FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Dream. Design. Deploy.
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Transform your web designs with AI-powered optimization
        </p>
        <Link
          href="#input-section"
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          Get Started
        </Link>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-50 mix-blend-overlay"></div>
      </motion.div>
    </section>
  )
}