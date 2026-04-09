"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";
import { useCounter } from "@/hooks/useCounter";

export default function Hero() {
  // Multiple refs for staggered reveals
  const headerRef = useReveal();
  const headingRef = useReveal();
  const taglineRef = useReveal();
  const ctaRef = useReveal();
  const statsRef = useReveal();
  const imageRef = useReveal();
  const scrollRef = useReveal();

  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ minHeight: "100vh" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #F5F0EB 0%, #E8DDD2 40%, #D4C4B0 100%)",
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute top-0 left-14 w-px h-full"
          style={{ background: "#1a1a1a" }}
        />
        <div
          className="absolute top-0 left-24 w-px h-full"
          style={{ background: "#1a1a1a" }}
        />
        <div
          className="absolute top-13 left-0 h-px w-full"
          style={{ background: "#1a1a1a" }}
        />
      </div>

      {/* Hero Portrait */}
      <div
        ref={imageRef}
        className="reveal scale-in absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-85 z-5"
      >
        <div className="relative w-200 h-150 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
          <Image
            src="/hero-portrait.jpg"
            alt="Vijay Pal Singh - Civil Engineer"
            fill
            sizes="(max-width: 1280px) 0vw, 30vw"
            className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#C4813D]/90 to-[#8B5A2B]/90 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            Vijay Singh
          </div>
        </div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 flex items-center"
        style={{
          minHeight: "100vh",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div className="max-w-3xl lg:max-w-4xl xl:pr-24 2xl:pr-40">
          {/* Section header - animates first */}
          <div
            ref={headerRef}
            className="reveal fade-up flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px" style={{ background: "#C4813D" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "#C4813D" }}
            >
              Civil Engineer & Structural Consultant
            </span>
          </div>

          {/* Main heading */}
          <div ref={headingRef} className="reveal fade-up">
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6"
              style={{ color: "#C4813D" }}
            >
              Vijay Pal
              <br className="hidden md:block" /> Singh
            </h1>
          </div>

          {/* Tagline */}
          <div ref={taglineRef} className="reveal fade-up">
            <p
              className="text-lg sm:text-xl font-light max-w-xl leading-relaxed mb-10"
              style={{ color: "#5a5248" }}
            >
              Building resilient structures that stand the test of time.{" "}
              <span className="font-semibold text-[#C4813D]">25+ years</span> of
              expertise in structural design, project management & sustainable
              construction.
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="reveal fade-up flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-x-1 hover:shadow-lg"
              style={{ background: "#C4813D", color: "#F5F0EB" }}
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider border-2 transition-all duration-300 hover:-translate-x-1 hover:shadow-md"
              style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="reveal fade-up mt-20 pt-10 border-t"
            style={{ borderColor: "rgba(200, 169, 110, 0.2)" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Years Experience */}
              <div className="text-center">
                <p
                  ref={useCounter(25)}
                  className="stat-counter font-display text-3xl md:text-4xl xl:text-5xl"
                  style={{ color: "#c8a96e" }}
                >
                  0
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "#a89880" }}
                >
                  Years Experience
                </p>
              </div>

              {/* Projects Delivered */}
              <div className="text-center">
                <p
                  ref={useCounter(340)}
                  className="stat-counter font-display text-3xl md:text-4xl xl:text-5xl"
                  style={{ color: "#c8a96e" }}
                >
                  0
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "#a89880" }}
                >
                  Projects Delivered
                </p>
              </div>

              {/* Awards Won */}
              <div className="text-center">
                <p
                  ref={useCounter(50)}
                  className="stat-counter font-display text-3xl md:text-4xl xl:text-5xl"
                  style={{ color: "#c8a96e" }}
                >
                  0
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "#a89880" }}
                >
                  Awards Won
                </p>
              </div>

              {/* Cities Active */}
              <div className="text-center">
                <p
                  ref={useCounter(12)}
                  className="stat-counter font-display text-3xl md:text-4xl xl:text-5xl"
                  style={{ color: "#c8a96e" }}
                >
                  0
                </p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "#a89880" }}
                >
                  Cities Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="reveal fade-up absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em]"
          style={{ color: "#5a5248" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, #C4813D, transparent)",
          }}
        />
      </div>
    </section>
  );
}
