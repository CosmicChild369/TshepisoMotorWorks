import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Cars Repaired" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24hr", label: "Quick Turnaround" },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "Honest assessments and transparent pricing on every job." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest quality in every repair we perform." },
  { icon: Users, title: "Customer First", desc: "Your satisfaction and vehicle safety are always our top priority." },
  { icon: Target, title: "Precision", desc: "Meticulous attention to detail in every panel beat and paint job." },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-foreground text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4">
            Tshepang Motor Works
          </h1>
          <p className="text-accent font-heading italic text-lg">umphand'oyimele Ltd</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80"
                  alt="Workshop"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 mb-6 text-foreground">
                Built on Trust, Driven by Quality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tshepang Motor Works is a reliable automotive repair workshop based in Katlehong, Gauteng. We provide
                  high-quality workmanship and professional service for all types of vehicles — from everyday commuters
                  to luxury cars.
                </p>
                <p>
                  Our team of experienced technicians specialises in panel beating, spray painting, engine repairs,
                  mechanical diagnostics, and full vehicle restoration. We take pride in treating every vehicle as
                  if it were our own.
                </p>
                <p>
                  With years of hands-on experience and a commitment to using quality parts and materials, we've earned
                  the trust of thousands of satisfied customers across Gauteng. At Tshepang Motor Works, your vehicle
                  is in expert hands.
                </p>
              </div>
              <Link to="/BookService" className="inline-block mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-heading font-semibold">
                  Book a Service <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/60 text-sm mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 text-foreground">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
