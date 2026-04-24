"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    type: "image",
    src: "/images/hero-students.jpg",
    title: "Empowering Skills for a Better Future",
    description:
      "Join a vibrant learning community focused on practical, hands-on training that prepares you for real-world success.",
    tag: "Admissions Open",
  },
  {
    type: "image",
    src: "/images/classroom.jpg",
    title: "Modern Classrooms & Expert Training",
    description:
      "Experience industry-standard facilities and learn from experienced instructors dedicated to your growth.",
    tag: "Our Classrooms",
  },
  {
    type: "video",
    src: "/videos/graduation.mp4",
    title: "Celebrate Your Achievement",
    description:
      "Graduate with confidence and step into the workforce equipped with skills that employers value.",
    tag: "Graduation Success",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20 text-white">
        <div className="max-w-3xl transition-all duration-700">
          {/* Dynamic Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary mb-6 backdrop-blur">
            {slide.tag}
          </div>

          {/* Dynamic Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {slide.title}
          </h1>

          {/* Dynamic Description */}
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="#admissions">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 text-white border-white hover:bg-white hover:text-black">
              <Link href="#programs">
                <Play className="h-4 w-4" />
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center z-10">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
        >
          <ChevronLeft />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center z-10">
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index ? "w-8 bg-primary" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
