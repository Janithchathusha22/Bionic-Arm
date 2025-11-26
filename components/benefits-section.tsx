"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, DollarSign, MapPin, Smile, Zap } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Increased Independence",
    description:
      "Allows amputees to perform day-to-day tasks such as gripping a glass, holding tools, and handling objects.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: DollarSign,
    title: "Affordable Alternative",
    description:
      "Cost is around LKR 150,000, significantly cheaper than imported prosthetic hands costing up to LKR 1,000,000.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    title: "Locally Manufactured",
    description: "Reduces dependency on foreign devices and supports local innovation in Sri Lanka.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smile,
    title: "User-Friendly & Comfortable",
    description: "Lightweight 3D-printed structure and ergonomic design for long-term wear and natural movement.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Reliable Technology",
    description: "EMG signal detection + microcontroller + servo motors ensure precise and responsive hand motion.",
    color: "from-primary to-accent",
  },
]

export function BenefitsSection() {
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
    <section id="benefits" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            Key Advantages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-muted-foreground">
            Empowering users to regain independence, confidence, and improved quality of life
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative rounded-2xl p-6 glass border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${index === 4 ? "lg:col-span-1 md:col-span-2 lg:mx-auto lg:max-w-md" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
