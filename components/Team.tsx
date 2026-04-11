"use client";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Vijay Pal Singh",
    role: "Founder & Principal Engineer",
    image: "/team/vijay.jpg",
    experience: "15+ Years",
    expertise: "Structural Design, Project Management",
    location: "Meerut, UP",
    phone: "+91 94122 02123",
    email: "vmrt1965@gmail.com",
  },
  {
    name: "Zeba Husain",
    role: "Senior Interior Designer",
    image: "/team/zeba.jpeg",
    experience: "7+ Years",
    expertise: "Interior Design",
    location: "Ghaziabad, UP",
    // phone: "+91 87654 32109",
    // email: "priya@company.com",
  },
  {
    name: "Mujahid",
    role: "Project Manager",
    image: "/team/mujahid.jpeg",
    experience: "8+ Years",
    expertise: "Site Supervision, Quality Control",
    location: "Ghaziabad, UP",
    // phone: "+91 76543 21098",
    // email: "rahul@company.com",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Single IntersectionObserver for entire section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
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
      id="team"
      className="w-full py-24 lg:py-32"
      style={{ background: "#F5F0EB" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Always visible, staggered animation */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: "#C4813D" }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#C4813D" }}
              >
                Our Team
              </span>
              <div className="w-12 h-px" style={{ background: "#C4813D" }} />
            </div>
            <h2
              className="font-display text-4xl lg:text-5xl mb-8"
              style={{ color: "#1a1a1a" }}
            >
              Meet Our Experts
            </h2>
            <p
              className="text-xl font-light max-w-2xl mx-auto mx-auto"
              style={{ color: "#5a5248" }}
            >
              Experienced civil engineers and project managers delivering
              excellence in every project.
            </p>
          </div>
        </div>

        {/* Team Grid - Single container animation */}
        <div
          ref={sectionRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-[#C4813D]/50 overflow-hidden relative"
              style={{ borderColor: "#D4C4B0" }}
            >
              {/* Staggered card entrance */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#C4813D]/5 to-transparent transition-opacity duration-700 ${
                  isVisible ? `opacity-100 delay-${index * 100}ms` : "opacity-0"
                }`}
              />

              {/* Team Member Image */}
              <div className="relative mb-6 h-48 overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  priority={index === 0}
                />
                <div className="absolute top-4 right-4 rounded-full bg-[#C4813D]/90 px-2 py-1 text-xs font-semibold text-white">
                  {member.experience}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-display text-2xl mb-2 group-hover:text-[#C4813D] transition-colors duration-300"
                  style={{ color: "#1a1a1a" }}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-semibold mb-3 text-[#C4813D] uppercase tracking-wider">
                  {member.role}
                </p>
                <p
                  className="text-sm mb-6 font-light leading-relaxed"
                  style={{ color: "#5a5248" }}
                >
                  {member.expertise}
                </p>

                {/* Contact Info */}
                <div
                  className="space-y-3 pt-4 border-t"
                  style={{ borderColor: "#E8DDD2" }}
                >
                  <div className="flex items-center gap-3 py-2 hover:bg-[#FDFAF7]/50 rounded-lg px-2 transition-colors">
                    <MapPin
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#C4813D" }}
                    />
                    <span className="text-xs font-medium">
                      {member.location}
                    </span>
                  </div>
                  {member.phone && (
                    <div className="flex items-center gap-3 py-2 hover:bg-[#FDFAF7]/50 rounded-lg px-2 transition-colors">
                      <Phone
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "#C4813D" }}
                      />
                      <span className="text-xs font-medium">
                        {member.phone}
                      </span>
                    </div>
                  )}
                  {member.email && (
                    <div className="flex items-center gap-3 py-2 hover:bg-[#FDFAF7]/50 rounded-lg px-2 transition-colors">
                      <Mail
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "#C4813D" }}
                      />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs font-medium hover:text-[#C4813D] transition-colors truncate"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
