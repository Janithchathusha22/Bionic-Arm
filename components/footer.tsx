import { Cpu, GraduationCap, User, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-16 relative overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg text-foreground">
                Bionic<span className="text-primary">Arm</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Affordable EMG-Controlled Prosthetic Arm for Upper-Limb Amputees – ITE 3962 Final Year Research Project
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Academic Information
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">University:</strong> University of Moratuwa
              </p>
              <p>
                <strong className="text-foreground">Faculty:</strong> Faculty of Information Technology
              </p>
              <p>
                <strong className="text-foreground">Program:</strong> Bachelor of Information Technology (External)
              </p>
              <p>
                <strong className="text-foreground">Course:</strong> ITE 3962 – Final Year Project
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Research
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Name:</strong> Bionic Arm
              </p>
              <p>
                <strong className="text-foreground">Researcher:</strong> Piumika JADN
              </p>
              <div className="pt-2 space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Contact via University
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Moratuwa, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Bionic Arm Project. All rights reserved.</p>
          <p>University of Moratuwa • Faculty of Information Technology • Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}
