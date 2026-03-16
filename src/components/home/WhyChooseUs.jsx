import React from "react"
import { Shield, Clock, Award, ThumbsUp, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  { icon: Award, title: "Expert Technicians", desc: "Highly skilled mechanics with years of automotive experience." },
  { icon: Shield, title: "Quality Parts", desc: "We use only genuine and high-quality replacement parts." },
  { icon: Clock, title: "Fast Turnaround", desc: "Efficient service to get you back on the road quickly." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We stand behind our work with a quality guarantee." },
  { icon: Users, title: "All Vehicle Types", desc: "We service all makes and models of vehicles." },
  { icon: Zap, title: "Advanced Equipment", desc: "State-of-the-art tools and diagnostic equipment." },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3">The Tshepang Difference</h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            We combine skilled craftsmanship with modern technology to deliver automotive repairs you can rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
