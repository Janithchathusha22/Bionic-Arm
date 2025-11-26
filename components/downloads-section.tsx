"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Download } from "lucide-react"

export function DownloadsSection() {
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
    <section id="downloads" ref={sectionRef} className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div
            className={`group glass rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 max-w-md w-full ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors mx-auto">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-foreground mb-2 text-center">Project Proposal</h3>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              ITE 3962 – Final Year Project Proposal including introduction, background, objectives, proposed solution
              and technologies
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10">PDF</span>
              <span>2.4 MB</span>
            </div>
            <a
              href="/documents/bionic-arm-proposal.pdf"
              download="Bionic-Arm-Project-Proposal.pdf"
              className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
