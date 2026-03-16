import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const services = [
  "Panel Beating",
  "Car Spray Painting",
  "Engine Repairs",
  "Mechanical Diagnostics",
  "Accident Damage Repair",
  "Car Body Restoration",
  "General Vehicle Maintenance",
];

export default function BookService() {
  const [form, setForm] = useState({
    customer_name: "",
    phone_number: "",
    vehicle_type: "",
    service: "",
    problem_description: "",
    preferred_date: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.customer_name || !form.phone_number || !form.vehicle_type || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await base44.entities.Booking.create(form);
      setSubmitted(true);
      toast.success("Booking submitted successfully!");
    } catch (err) {
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="font-heading font-bold text-3xl text-foreground mb-3">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for booking with Tshepang Motor Works. We'll contact you shortly to confirm your appointment.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setForm({ customer_name: "", phone_number: "", vehicle_type: "", service: "", problem_description: "", preferred_date: "" });
            }}
            className="font-heading font-semibold"
          >
            Book Another Service
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-foreground text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">Book Now</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4">Book a Service</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Fill in the form below and we'll get back to you to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-xl shadow-border/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={form.customer_name}
                    onChange={(e) => handleChange("customer_name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    placeholder="e.g. 079 641 9092"
                    value={form.phone_number}
                    onChange={(e) => handleChange("phone_number", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="vehicle" className="font-medium">Vehicle Type *</Label>
                  <Input
                    id="vehicle"
                    placeholder="e.g. Toyota Corolla 2020"
                    value={form.vehicle_type}
                    onChange={(e) => handleChange("vehicle_type", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="font-medium">Select Service *</Label>
                  <Select value={form.service} onValueChange={(v) => handleChange("service", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="font-medium">Preferred Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={form.preferred_date}
                  onChange={(e) => handleChange("preferred_date", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem" className="font-medium">Describe the Problem</Label>
                <Textarea
                  id="problem"
                  placeholder="Tell us what's wrong with your vehicle..."
                  className="min-h-[120px]"
                  value={form.problem_description}
                  onChange={(e) => handleChange("problem_description", e.target.value)}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base h-14"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>Submit Booking <ArrowRight className="w-5 h-5 ml-2" /></>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
