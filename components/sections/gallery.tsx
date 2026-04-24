"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/hero-students.jpg",
    alt: "Students in electrical workshop",
    category: "Workshop",
  },
  {
    src: "/images/workshop.jpg",
    alt: "Tailoring and dressmaking class",
    category: "Training",
  },
  {
    src: "/images/ict-lab.jpg",
    alt: "ICT computer laboratory",
    category: "Facilities",
  },
  {
    src: "/images/beauty-therapy.jpg",
    alt: "Beauty therapy training",
    category: "Training",
  },
  {
    src: "/images/graduation.jpg",
    alt: "Graduation ceremony",
    category: "Graduation",
  },
  {
    src: "/images/campus.jpg",
    alt: "College campus",
    category: "Campus",
  },
  {
    src: "/images/1.jpeg",
    alt: "Students in electrical workshop",
    category: "Workshop",
  },
  {
    src: "/images/2.jpeg",
    alt: "Tailoring and dressmaking class",
    category: "Training",
  },
  {
    src: "/images/3.jpeg",
    alt: "ICT computer laboratory",
    category: "Facilities",
  },
  {
    src: "/images/4.jpeg",
    alt: "Beauty therapy training",
    category: "Training",
  },
  {
    src: "/images/graduation.jpg",
    alt: "Graduation ceremony",
    category: "Graduation",
  },
  {
    src: "/images/campus.jpg",
    alt: "College campus",
    category: "Campus",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Campus Life</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Experience Our Vibrant Community
          </h2>
          <p className="text-muted-foreground text-pretty">
            Take a glimpse into life at Our Lady of Mercy College – from
            hands-on training to memorable graduation moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group relative aspect-square overflow-hidden cursor-pointer border-0"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {image.category}
                  </span>
                  <p className="text-sm text-foreground mt-1">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
