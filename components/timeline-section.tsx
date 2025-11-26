"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Circle } from "lucide-react"

const timelineItems = [
  { phase: "Phase 1", title: "Research & Planning", duration: "Week 1-2", status: "completed" },
  { phase: "Phase 2", title: "CAD Design & Modeling", duration: "Week 3-5", status: "completed" },
  { phase: "Phase 3", title: "3D Printing & Assembly", duration: "Week 6-8", status: "completed" },
  { phase: "Phase 4", title: "Electronics Integration", duration: "Week 9-10", status: "completed" },
  { phase: "Phase 5", title: "EMG Signal Processing", duration: "Week 11-12", status: "in-progress" },
  { phase: "Phase 6", title: "Testing & Validation", duration: "Week 13-14", status: "upcoming" },
  { phase: "Phase 7", title: "Documentation & Presentation", duration: "Week 15-16", status: "upcoming" },
]

export function TimelineSection() {
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
    <section id="timeline" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            Project Schedule
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground">A systematic approach to achieving our research goals</p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted -translate-x-1/2" />

            {timelineItems.map((item, index) => (
              <div
                key={item.phase}
                className={`relative flex items-center gap-8 mb-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-12 md:pl-0`}
                >
                  <div
                    className={`inline-block glass rounded-xl p-4 border ${
                      item.status === "completed"
                        ? "border-primary/30"
                        : item.status === "in-progress"
                          ? "border-accent/50 animate-pulse-glow"
                          : "border-muted/30"
                    }`}
                  >
                    <div className="text-xs text-primary font-medium mb-1">{item.phase}</div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background flex items-center justify-center z-10">
                  {item.status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : item.status === "in-progress" ? (
                    <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
