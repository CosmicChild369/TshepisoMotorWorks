import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
          Ready to Get Your Vehicle Fixed?
        </h2>
        <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Book your service appointment today or reach out via WhatsApp for a quick quote. We&apos;re here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/BookService">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8 h-14 w-full sm:w-auto">
              Book a Service <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <a
            href="https://wa.me/27796419092?text=Hi%20Tshepang%20Motor%20Works%2C%20I%20would%20like%20to%20get%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold text-base px-8 h-14 w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
