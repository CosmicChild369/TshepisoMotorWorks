import React from "react"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Thabo M.",
    text: "Tshepang Motor Works did an amazing job on my car after an accident. The panel beating was flawless and the paint looks factory-new. Highly recommended!",
    rating: 5,
    vehicle: "Toyota Corolla",
  },
  {
    name: "Lerato K.",
    text: "Professional service from start to finish. They diagnosed my engine problem quickly and had it fixed within the day. Fair pricing too!",
    rating: 5,
    vehicle: "VW Polo",
  },
  {
    name: "Sipho N.",
    text: "Best auto repair shop in Katlehong. They restored my old car body and it looks brand new. The team really knows what they are doing.",
    rating: 5,
    vehicle: "BMW 3 Series",
  },
  {
    name: "Nomsa D.",
    text: "I&apos;ve been bringing all my cars here for years. Reliable, honest, and the workmanship is always top-notch. Tshepang is the best!",
    rating: 5,
    vehicle: "Ford Ranger",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 text-foreground">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.vehicle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
