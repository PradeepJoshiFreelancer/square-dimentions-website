"use client";
import { useReveal } from "@/hooks/useReveal";
import { Ruler, HardHat, ShieldCheck, Leaf } from "lucide-react";
import { useEffect, useRef } from "react";

const skills = [
  { name: "Structural Analysis & Design", percent: 95 },
  { name: "AutoCAD / STAAD Pro / ETABS", percent: 90 },
  { name: "Project Management", percent: 88 },
  { name: "Estimation & Costing", percent: 85 },
  { name: "Soil Investigation & Foundations", percent: 82 },
  { name: "Green & Sustainable Construction", percent: 78 },
];

export default function About() {
  const sectionRef = useReveal();
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".stat-bar");
            bars.forEach((bar) => {
              bar.classList.add("animate-stat-grow");
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="w-full py-24 lg:py-32"
      style={{ background: "#1a1a1a" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div
              ref={sectionRef}
              className="reveal fade-up flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px" style={{ background: "#C4813D" }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#C4813D" }}
              >
                About
              </span>
            </div>
            <h2
              className="font-display text-4xl lg:text-5xl mb-8 leading-tight"
              style={{ color: "#F5F0EB" }}
            >
              Engineering Excellence,
              <br />
              Delivered.
            </h2>
            <p
              className="text-base font-light leading-relaxed mb-8 max-w-lg"
              style={{ color: "#A89F94" }}
            >
              With over 25 years of experience in civil engineering, I
              specialize in structural analysis, reinforced concrete design, and
              project management for residential, commercial, and infrastructure
              projects across India. My approach blends innovative engineering
              with practical, cost-effective solutions.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div
                className="p-5 border hover:bg-[#2a2a2a] transition-colors duration-300"
                style={{ borderColor: "#333" }}
              >
                <Ruler className="w-6 h-6 mb-3" style={{ color: "#C4813D" }} />
                <h4
                  className="text-sm font-semibold mb-1"
                  style={{ color: "#F5F0EB" }}
                >
                  Structural Design
                </h4>
                <p className="text-xs font-light" style={{ color: "#A89F94" }}>
                  RCC, steel & composite structures
                </p>
              </div>
              <div
                className="p-5 border hover:bg-[#2a2a2a] transition-colors duration-300"
                style={{ borderColor: "#333" }}
              >
                <HardHat
                  className="w-6 h-6 mb-3"
                  style={{ color: "#C4813D" }}
                />
                <h4
                  className="text-sm font-semibold mb-1"
                  style={{ color: "#F5F0EB" }}
                >
                  Project Management
                </h4>
                <p className="text-xs font-light" style={{ color: "#A89F94" }}>
                  End-to-end delivery & oversight
                </p>
              </div>
              <div
                className="p-5 border hover:bg-[#2a2a2a] transition-colors duration-300"
                style={{ borderColor: "#333" }}
              >
                <ShieldCheck
                  className="w-6 h-6 mb-3"
                  style={{ color: "#C4813D" }}
                />
                <h4
                  className="text-sm font-semibold mb-1"
                  style={{ color: "#F5F0EB" }}
                >
                  Quality Assurance
                </h4>
                <p className="text-xs font-light" style={{ color: "#A89F94" }}>
                  IS code compliance & audits
                </p>
              </div>
              <div
                className="p-5 border hover:bg-[#2a2a2a] transition-colors duration-300"
                style={{ borderColor: "#333" }}
              >
                <Leaf className="w-6 h-6 mb-3" style={{ color: "#C4813D" }} />
                <h4
                  className="text-sm font-semibold mb-1"
                  style={{ color: "#F5F0EB" }}
                >
                  Green Building
                </h4>
                <p className="text-xs font-light" style={{ color: "#A89F94" }}>
                  Sustainable design practices
                </p>
              </div>
            </div>
          </div>

          {/* Skills Bars */}
          <div>
            <div ref={skillsRef} className="reveal fade-up space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#F5F0EB" }}
                    >
                      {skill.name}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#C4813D" }}
                    >
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                    <div
                      className="h-full stat-bar bg-[#C4813D] rounded-full transition-all duration-[1200ms] ease-out"
                      style={{ width: "0%" }}
                      data-width={`${skill.percent}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
