"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, Settings, Box, Code, BarChart3, Wrench } from "lucide-react"

const hardwareTech = [
  { icon: Cpu, name: "EMG Sensors", description: "Muscle activity detection" },
  { icon: Settings, name: "Servo Motors", description: "Finger & grip movement" },
  { icon: Box, name: "3D-Printed Parts", description: "Lightweight PLA structure" },
  { icon: Cpu, name: "Arduino/ESP32", description: "Microcontroller system" },
]

const softwareTech = [
  { icon: Code, name: "Arduino IDE", description: "C/C++ signal processing" },
  { icon: BarChart3, name: "Python", description: "Data visualization" },
  { icon: BarChart3, name: "MATLAB", description: "EMG signal analysis" },
  { icon: Wrench, name: "Fusion 360", description: "3D CAD modeling" },
]

export function TechnologySection() {
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
    <section id="technology" ref={sectionRef} className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            Technical Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies <span className="gradient-text">Used</span>
          </h2>
          <p className="text-muted-foreground">A perfect blend of hardware and software engineering</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hardware */}
          <div
            className={`glass rounded-2xl p-8 border border-primary/20 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Hardware Technologies</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {hardwareTech.map((tech, index) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-all group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Software */}
          <div
            className={`glass rounded-2xl p-8 border border-accent/20 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Software Technologies</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {softwareTech.map((tech, index) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl bg-background/50 border border-border hover:border-accent/30 transition-all group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <tech.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
