import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Hammer, Paintbrush, Settings, Search, Car, RotateCcw, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  { icon: Hammer, title: "Panel Beating", desc: "Expert body repair to restore your vehicle's original form." },
  { icon: Paintbrush, title: "Car Spray Painting", desc: "Flawless paint finishes with premium automotive coatings." },
  { icon: Settings, title: "Engine Repairs", desc: "Complete engine diagnostics, repair, and rebuilding services." },
  { icon: Search, title: "Mechanical Diagnostics", desc: "Advanced diagnostic tools to pinpoint vehicle issues." },
  { icon: Car, title: "Accident Damage Repair", desc: "Full collision repair restoring your vehicle to pre-accident condition." },
  { icon: RotateCcw, title: "Car Body Restoration", desc: "Complete body restoration for classic and modern vehicles." },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 text-foreground">Our Featured Services</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We offer a comprehensive range of automotive repair services with attention to detail and commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/Services">
            <Button variant="outline" size="lg" className="font-heading font-semibold">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
