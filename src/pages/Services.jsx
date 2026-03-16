import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hammer, Paintbrush, Settings, Search, Car, RotateCcw, Wrench, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Hammer,
    title: "Panel Beating",
    desc: "Our expert panel beaters restore your vehicle's body to its original condition using precision techniques. Whether it's minor dents or major collision damage, we deliver flawless results every time.",
    image: "https://images.unsplash.com/photo-1603553329474-99f95f35394f?w=600&q=80"
  },
  {
    icon: Paintbrush,
    title: "Car Spray Painting",
    desc: "We provide professional automotive spray painting with premium coatings and colour-matching technology. From touch-ups to full respray, we guarantee a showroom-quality finish.",
    image: "https://images.unsplash.com/photo-1621963416944-c7e20dba8137?w=600&q=80"
  },
  {
    icon: Settings,
    title: "Engine Repairs",
    desc: "Our skilled mechanics handle all engine repairs from minor fixes to complete rebuilds. We diagnose and repair engine problems efficiently to get you back on the road.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80"
  },
  {
    icon: Search,
    title: "Mechanical Diagnostics",
    desc: "Using advanced diagnostic equipment, we accurately identify mechanical and electrical faults in your vehicle. Our thorough diagnostics save you time and money on unnecessary repairs.",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80"
  },
  {
    icon: Car,
    title: "Accident Damage Repair",
    desc: "We specialise in comprehensive accident damage repair, restoring your vehicle to its pre-accident condition. We work with all insurance companies for hassle-free claims processing.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80"
  },
  {
    icon: RotateCcw,
    title: "Car Body Restoration",
    desc: "We bring old and damaged vehicles back to life with complete body restoration services. From rust repair to full body rebuilds, we restore your vehicle's beauty and structural integrity.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80"
  },
  {
    icon: Wrench,
    title: "General Vehicle Maintenance",
    desc: "Keep your vehicle running smoothly with our comprehensive maintenance services including oil changes, brake servicing, suspension work, and regular check-ups for all makes and models.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80"
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-foreground text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4">
            Complete Automotive Repair Solutions
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            From panel beating to engine overhauls, we provide professional repair services for all vehicle types and makes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`bg-card rounded-2xl border border-border overflow-hidden flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/BookService" className="inline-block">
                    <Button className="bg-primary hover:bg-primary/90 font-heading font-semibold">
                      Book This Service <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
