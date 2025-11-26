"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/b-1.jpg",
    alt: "Robotic bionic hand with metallic fingers",
    title: "EMG Sensor Module",
    description: "Precision muscle activity detection",
  },
  {
    src: "/images/b-3.jpg",
    alt: "Sleek black and gold bionic arm prosthetic",
    title: "Complete Arm Assembly",
    description: "3D-printed structure with servo motors",
  },
  {
    src: "/images/b-2.jpg",
    alt: "Person examining futuristic bionic arm",
    title: "Prototype Testing",
    description: "User fitting and calibration",
  },
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            Visual Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prototype <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground">Explore the physical components and assembly of our bionic arm</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
