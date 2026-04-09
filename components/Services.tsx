"use client";
import {
  Building2,
  Map,
  ClipboardCheck,
  FileText,
  Search,
  Droplets,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    icon: Building2,
    title: "Structural Engineering",
    description:
      "Complete structural design for multi-storey buildings, industrial sheds, and specialized structures with IS code compliance.",
  },
  {
    icon: Map,
    title: "Site Planning & Layout",
    description:
      "Optimal site planning, land surveying, and layout design to maximize space utilization and regulatory compliance.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "End-to-end project coordination from planning to handover, ensuring timely delivery within budget constraints.",
  },
  {
    icon: FileText,
    title: "Estimation & BOQ",
    description:
      "Detailed quantity estimation, bill of quantities, and cost analysis for informed budgeting and procurement.",
  },
  {
    icon: Search,
    title: "Structural Audit",
    description:
      "Comprehensive assessment of existing structures for safety, load capacity, and rehabilitation recommendations.",
  },
  {
    icon: Droplets,
    title: "Water & Infrastructure",
    description:
      "Design of water supply systems, drainage networks, and road infrastructure for townships and developments.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="w-full py-24 lg:py-32"
      style={{ background: "#F5F0EB" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px" style={{ background: "#C4813D" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "#C4813D" }}
            >
              Services
            </span>
            <div className="w-12 h-px" style={{ background: "#C4813D" }} />
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl mb-4"
            style={{ color: "#1a1a1a" }}
          >
            What I Offer
          </h2>
        </div>

        {/* Services Grid - Single container animation */}
        <div
          ref={sectionRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border hover:-translate-y-2 transition-all duration-500 cursor-pointer hover:shadow-2xl rounded-2xl relative overflow-hidden"
              style={{ borderColor: "#D4C4B0", background: "#FDFAF7" }}
            >
              {/* Staggered background effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#C4813D]/10 opacity-0 group-hover:opacity-100 transition-all duration-700 ${
                  isVisible ? `delay-${index * 100}ms` : ""
                }`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 origin-center ${
                    isVisible ? `delay-${index * 100 + 200}ms` : ""
                  }`}
                  style={{ background: "#C4813D" }}
                >
                  <service.icon
                    className="w-7 h-7"
                    style={{ color: "#F5F0EB" }}
                  />
                </div>
                <h3
                  className="font-display text-xl mb-3 group-hover:text-[#C4813D] transition-colors duration-300"
                  style={{ color: "#1a1a1a" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "#5a5248" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
