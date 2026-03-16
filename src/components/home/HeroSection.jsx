import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80"
          alt="Auto repair workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">Trusted Auto Repair</span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Professional Auto Repair &amp; Panel Beating Services <span className="text-accent">You Can Trust</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              From panel beating to engine repairs, we deliver precision workmanship and reliable service for all vehicle types.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/BookService">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8 h-14 w-full sm:w-auto">
                  Book a Service
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/Services">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-heading font-semibold text-base px-8 h-14 w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, label: "Quality Guaranteed" },
              { icon: Clock, label: "Fast Turnaround" },
              { icon: Award, label: "Expert Technicians" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/50">
                <Icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
