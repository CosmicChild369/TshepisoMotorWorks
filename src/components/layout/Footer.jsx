import React from "react"
import { Link } from "react-router-dom"
import { Wrench, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-white text-lg block">Tshepang</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Motor Works</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Professional auto repair and panel beating services. Quality workmanship you can trust.
            </p>
            <p className="text-xs text-accent font-heading font-semibold mt-3 italic">umphand&apos;oyimele Ltd</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/Home" },
                { label: "Services", path: "/Services" },
                { label: "About Us", path: "/About" },
                { label: "Gallery", path: "/Gallery" },
                { label: "Book a Service", path: "/BookService" },
                { label: "Contact", path: "/Contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Our Services</h4>
            <div className="space-y-2 text-sm text-white/50">
              <p>Panel Beating</p>
              <p>Car Spray Painting</p>
              <p>Engine Repairs</p>
              <p>Mechanical Diagnostics</p>
              <p>Accident Damage Repair</p>
              <p>Car Body Restoration</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:0796419092" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                079 641 9092
              </a>
              <a
                href="https://wa.me/27796419092"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                WhatsApp Us
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>9 Inququ St, Sali, Katlehong, Gauteng</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
                  <p>Sat: 8:00 AM – 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Tshepang Motor Works. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
