"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Malhotra",
    role: "Property Developer",
    text: "Vijay delivered exceptional structural designs for our G+14 residential tower. His attention to detail and code compliance gave us complete confidence in the project.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    text: "From foundation to finishing, the guidance was invaluable. Our villa was completed on time with zero structural issues. Highly professional and knowledgeable.",
  },
  {
    name: "Vikram Singh",
    role: "Infrastructure Director",
    text: "His expertise in bridge design and highway infrastructure is outstanding. The NH-48 project was delivered with precision and well within budget.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useReveal();

  const nextSlide = () => setCurrent((current + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="w-full py-24 lg:py-32"
      style={{ background: "#1a1a1a" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div ref={sectionRef} className="reveal fade-up text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px" style={{ background: "#C4813D" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "#C4813D" }}
            >
              Testimonials
            </span>
            <div className="w-12 h-px" style={{ background: "#C4813D" }} />
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl"
            style={{ color: "#F5F0EB" }}
          >
            Client Voices
          </h2>
        </div>

        <div className="relative">
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center border transition-all duration-300 hover:border-[#C4813D] hover:bg-[#C4813D] hover:text-[#F5F0EB]"
              style={{ borderColor: "#555" }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: "#F5F0EB" }} />
            </button>

            <div className="w-full max-w-2xl mx-auto text-center px-4">
              <svg
                className="mx-auto mb-6 opacity-30"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="#C4813D"
              >
                <path d="M0 30V18C0 8 5 2 15 0l2 4C10 6 8 10 8 15h7v15H0zm23 0V18C23 8 28 2 38 0l2 4C33 6 31 10 31 15h7v15H23z" />
              </svg>
              <p
                className="text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-2xl mx-auto"
                style={{ color: "#A89F94" }}
              >
                {testimonials[current].text}
              </p>
              <p
                className="font-display text-lg mb-1"
                style={{ color: "#F5F0EB" }}
              >
                {testimonials[current].name}
              </p>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "#C4813D" }}
              >
                {testimonials[current].role}
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center border transition-all duration-300 hover:border-[#C4813D] hover:bg-[#C4813D] hover:text-[#F5F0EB]"
              style={{ borderColor: "#555" }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: "#F5F0EB" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
