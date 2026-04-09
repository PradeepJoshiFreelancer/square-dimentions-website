"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="w-full py-24 lg:py-32"
      style={{ background: "#F5F0EB" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div ref={sectionRef} className="reveal fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px" style={{ background: "#C4813D" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: "#C4813D" }}
                >
                  Contact
                </span>
              </div>
              <h2
                className="font-display text-4xl lg:text-5xl mb-8 leading-tight"
                style={{ color: "#1a1a1a" }}
              >
                Let&apos;s Build
                <br />
                Something Great.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 hover:bg-[#FDFAF7] rounded-lg transition-colors">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ background: "#C4813D" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "#F5F0EB" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "#5a5248" }}
                  >
                    Email
                  </p>
                  <p className="font-medium" style={{ color: "#1a1a1a" }}>
                    vijay@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 hover:bg-[#FDFAF7] rounded-lg transition-colors">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ background: "#C4813D" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "#F5F0EB" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "#5a5248" }}
                  >
                    Phone
                  </p>
                  <p className="font-medium" style={{ color: "#1a1a1a" }}>
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 hover:bg-[#FDFAF7] rounded-lg transition-colors">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ background: "#C4813D" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#F5F0EB" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "#5a5248" }}
                  >
                    Location
                  </p>
                  <p className="font-medium" style={{ color: "#1a1a1a" }}>
                    Phase 1, Pallavpuram, Meerut
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal fade-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block text-xs uppercase tracking-widest mb-2 font-medium"
                  style={{ color: "#5a5248" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors duration-300 focus:border-[#C4813D] rounded-lg"
                  style={{
                    background: "#FDFAF7",
                    borderColor: "#D4C4B0",
                    color: "#1a1a1a",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  className="block text-xs uppercase tracking-widest mb-2 font-medium"
                  style={{ color: "#5a5248" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors duration-300 focus:border-[#C4813D] rounded-lg"
                  style={{
                    background: "#FDFAF7",
                    borderColor: "#D4C4B0",
                    color: "#1a1a1a",
                  }}
                  placeholder="youremail.com"
                />
              </div>

              <div>
                <label
                  className="block text-xs uppercase tracking-widest mb-2 font-medium"
                  style={{ color: "#5a5248" }}
                >
                  Project Type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors duration-300 focus:border-[#C4813D] rounded-lg appearance-none"
                  style={{
                    background: "#FDFAF7",
                    borderColor: "#D4C4B0",
                    color: "#1a1a1a",
                  }}
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Infrastructure</option>
                  <option>Structural Audit</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs uppercase tracking-widest mb-2 font-medium"
                  style={{ color: "#5a5248" }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors duration-300 resize-none focus:border-[#C4813D] rounded-lg"
                  style={{
                    background: "#FDFAF7",
                    borderColor: "#D4C4B0",
                    color: "#1a1a1a",
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" isLoading={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitted && (
                <div
                  className="text-center py-3 text-sm font-medium rounded-lg bg-green-100/80 border border-green-200/50"
                  style={{ color: "#C4813D" }}
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
