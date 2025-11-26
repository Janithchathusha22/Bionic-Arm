"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section id="intro" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
              Research Introduction
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Restoring <span className="gradient-text">Human Capability</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to the <strong className="text-foreground">Bionic Arm Project</strong> — an innovative and
                affordable prosthetic solution designed to restore essential hand functions for individuals with
                upper-limb amputations in Sri Lanka.
              </p>
              <p>
                Our bionic arm uses <strong className="text-primary">Electromyography (EMG) sensors</strong> to read
                muscle activity and convert those signals into smooth, intuitive hand movements.
              </p>
              <p>
                The system is built using{" "}
                <strong className="text-foreground">
                  3D-printed components, servo motors, and a microcontroller-based control system
                </strong>
                , offering reliable gripping, holding, and everyday functionality.
              </p>
              <p>
                Designed with a focus on{" "}
                <strong className="text-accent">cost-effectiveness, comfort, and local manufacturability</strong>, this
                solution aims to make advanced prosthetic technology accessible to low-resource communities.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-primary/20">
              <Image
                src="/images/b-2.jpg"
                alt="Person examining futuristic bionic arm with blue LED lights"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <p className="text-sm text-foreground font-medium">Advanced Prosthetic Technology</p>
                <p className="text-xs text-muted-foreground">EMG-controlled precision movement</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl glass border border-primary/30 flex items-center justify-center animate-float">
              <span className="text-3xl font-bold gradient-text">EMG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
