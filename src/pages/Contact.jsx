import React from "react";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "Speak directly with our team",
    action: "079 641 9092",
    href: "tel:0796419092",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Quick quotes and bookings",
    action: "Chat on WhatsApp",
    href: "https://wa.me/27796419092?text=Hi%20Tshepang%20Motor%20Works%2C%20I%20need%20help%20with%20my%20vehicle.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "Send us a detailed enquiry",
    action: "info@tshepangmotorworks.co.za",
    href: "mailto:info@tshepangmotorworks.co.za",
    color: "bg-accent/10 text-accent",
  },
];

const businessHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 1:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function Contact() {
  const position = [-26.3486, 28.1506];

  return (
    <div>
      {/* Header */}
      <section className="bg-foreground text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4">Contact Us</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Reach out to us for any enquiries, quotes, or to book your service appointment.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-5`}>
                  <method.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-1">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.desc}</p>
                <p className="font-heading font-semibold text-primary group-hover:underline">{method.action}</p>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address & Hours */}
            <div className="space-y-8">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">Our Location</h3>
                    <p className="text-muted-foreground text-sm">Visit our workshop</p>
                  </div>
                </div>
                <p className="text-foreground font-medium">9 Inququ Street, Sali</p>
                <p className="text-muted-foreground">Katlehong, Gauteng, South Africa</p>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">When we're open</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {businessHours.map((bh) => (
                    <div key={bh.day} className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{bh.day}</span>
                      <span className={`font-heading font-semibold ${bh.hours === "Closed" ? "text-destructive" : "text-primary"}`}>
                        {bh.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Map embed via iframe (no leaflet CSS issues) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl border border-border overflow-hidden min-h-[400px]"
            >
              <iframe
                title="Tshepang Motor Works Location"
                width="100%"
                height="100%"
                style={{ minHeight: "400px", border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.openstreetmap.org/export/embed.html?bbox=28.1406%2C-26.3586%2C28.1606%2C-26.3386&layer=mapnik&marker=${position[0]}%2C${position[1]}`}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
