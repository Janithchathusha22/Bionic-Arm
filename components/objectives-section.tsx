"use client"

import { useEffect, useRef, useState } from "react"
import { Target, AlertTriangle, Lightbulb, Users } from "lucide-react"

const problemStatements = [
  {
    icon: AlertTriangle,
    title: "High Cost of Prosthetics",
    description:
      "Imported prosthetic devices cost up to LKR 1,000,000, making them inaccessible to most amputees in Sri Lanka.",
  },
  {
    icon: Users,
    title: "Limited Accessibility",
    description:
      "Many amputees lack access to advanced prosthetic technology due to geographical and economic barriers.",
  },
  {
    icon: Target,
    title: "Dependency on Imports",
    description:
      "Sri Lanka heavily relies on foreign prosthetic devices, with limited local manufacturing capabilities.",
  },
]

const objectives = [
  "Design and develop an affordable EMG-controlled bionic arm",
  "Utilize 3D printing for lightweight and customizable components",
  "Implement EMG signal processing for intuitive control",
  "Create a locally manufacturable solution for Sri Lankan amputees",
  "Validate functionality through prototype testing and user feedback",
]

export function ObjectivesSection() {
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
    <section id="objectives" ref={sectionRef} className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            Research Focus
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Problem & <span className="gradient-text">Objectives</span>
          </h2>
          <p className="text-muted-foreground">
            Addressing the critical gap in prosthetic accessibility through innovative engineering
          </p>
        </div>

        {/* Problem Statements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problemStatements.map((problem, index) => (
            <div
              key={problem.title}
              className={`glass rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div
          className={`glass rounded-2xl p-8 border border-accent/20 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Research Objectives</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-accent">{index + 1}</span>
                </div>
                <p className="text-sm text-muted-foreground">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
