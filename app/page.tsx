import { Metadata } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"
import { HeroSection } from "@/components/hero-section"
import { FeatureShowcase } from "@/components/feature-showcase"
import { InputSection } from "@/components/input-section"

export const metadata: Metadata = {
  title: "Dreaming Landing - AI-Powered Web Design Optimization",
  description: "Transform your web designs with AI-powered optimization. Upload your existing UI or enter a URL to get stunning, high-converting landing pages in seconds.",
  keywords: "AI web design, landing page optimization, UI enhancement, web conversion, design automation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dreaminglanding.com",
    site_name: "Dreaming Landing",
    images: [
      {
        url: "https://dreaminglanding.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dreaming Landing - AI-Powered Web Design Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dreaminglanding",
    creator: "@dreaminglanding",
  },
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">Dreaming Landing</span>
            </Link>
          </div>
          <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeatureShowcase />
        <InputSection />
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Dreaming Landing
            </a>
            . The source code is available on{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}