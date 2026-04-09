"use client";
import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Emerald Heights Residency",
    category: "residential",
    type: "G+14 Residential Tower",
    location: "Sector 82, Gurgaon",
    gradient: "linear-gradient(135deg, #C4813D 0%, #8B5A2B 100%)",
  },
  {
    title: "Nexus Business Park",
    category: "commercial",
    type: "Commercial Complex",
    location: "Cyber City, Gurgaon",
    gradient: "linear-gradient(135deg, #2C3E50 0%, #1A1A1A 100%)",
  },
  {
    title: "NH-48 Flyover Extension",
    category: "infrastructure",
    type: "Highway Infrastructure",
    location: "Manesar, Haryana",
    gradient: "linear-gradient(135deg, #5A5248 0%, #3E3832 100%)",
  },
  {
    title: "Palm Villas Phase II",
    category: "residential",
    type: "Villa Township",
    location: "Sohna Road, Gurgaon",
    gradient: "linear-gradient(135deg, #D4C4B0 0%, #A89F94 100%)",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
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

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="w-full py-24 lg:py-32"
      style={{ background: "#E8DDD2" }}
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
              Portfolio
            </span>
            <div className="w-12 h-px" style={{ background: "#C4813D" }} />
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl"
            style={{ color: "#1a1a1a" }}
          >
            Featured Projects
          </h2>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0 delay-500ms"
              : "opacity-0 translate-y-4"
          }`}
        >
          {["all", "residential", "commercial", "infrastructure"].map(
            (filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-widest border rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#C4813D] text-[#F5F0EB] border-[#C4813D] shadow-md scale-105"
                    : "border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F5F0EB] hover:scale-105 hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Projects Grid */}
        <div
          ref={sectionRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="project-card group relative overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div
                className="project-img transition-all duration-700 aspect-[4/3] flex items-end p-6 relative group-hover:scale-110"
                style={{ background: project.gradient }}
              >
                <svg
                  className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  stroke="#F5F0EB"
                  strokeWidth="0.5"
                >
                  <rect x="5" y="15" width="25" height="40" />
                  <rect x="30" y="25" width="25" height="30" />
                  <line x1="15" y1="15" x2="17" y2="25" />
                  <line x1="17" y1="15" x2="30" y2="15" />
                </svg>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/70 backdrop-blur-sm">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-6 py-3 border rounded-full bg-white/20 backdrop-blur-sm"
                  style={{ color: "#F5F0EB", borderColor: "#C4813D" }}
                >
                  View Details →
                </span>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#FDFAF7]">
                <h3
                  className="font-display text-lg mb-2 leading-tight"
                  style={{ color: "#1A1A1A" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs font-semibold mb-2"
                  style={{ color: "#C4813D" }}
                >
                  {project.type}
                </p>
                <p
                  className="text-xs flex items-center gap-2"
                  style={{ color: "#5A5248" }}
                >
                  <MapPin className="w-3 h-3" /> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
