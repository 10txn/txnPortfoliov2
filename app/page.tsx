"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import LenisProvider from "./components/LenisProvider"; 

const techs = ["Next.js", "Vite", "MongoDB"];

const projects = [
  {
    "title": "This portfolio",
    "desc": "I designed this portfolio as a simple project but decided to use it as my own portfolio.",
    "link": "https://github.com/10txn/txnPortfoliov2"
  },
  {
    "title": "Old Portfolio",
    "desc": "My old portfolio",
    "link": "https://github.com/10txn/portfolio-react"
  },
  {
    "title": "ImGui External Overlay Base",
    "desc": "Provides an imgui external overlay base for imgui devs",
    "link": "https://github.com/10txn/ImGui-External-Base"
  },
  {
    "title": "More coming soon",
    "desc": "More projects will be added soon!",
    "link": null
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/bg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          opacity: 0.5,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/vector.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />

      <div className="absolute top-0 right-0 w-3/4 h-full bg-purple-900/50 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-2xl">
        <h1
          className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Make your{" "}
          <span
            className="text-purple-400 italic"
            style={{ fontFamily: "var(--font-sail)" }}
          >
            visions
          </span>{" "}
          come to life
        </h1>

        <p
          className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          I specialize in creating beautiful web designs and creating c++ projects!
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-6 py-3 rounded-md transition-all duration-200 flex items-center gap-2"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Get Started <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </a>
          <a
            href="#past-work"
            className="bg-transparent border border-white/25 hover:bg-white/10 text-white text-sm px-6 py-3 rounded-md transition-all duration-200 flex items-center gap-2"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            View Past Work <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const scrollingTechs = [...techs, ...techs, ...techs, ...techs];

  return (
    <section className="relative bg-black/40 border-y border-white/5 py-10 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex w-max animate-infinite-scroll">
        {scrollingTechs.map((tech, index) => (
          <div key={index} className="flex items-center justify-center px-12 group">
            <span
              className="text-white/30 text-3xl font-bold tracking-tighter uppercase italic transition-all duration-500 group-hover:text-purple-400 group-hover:scale-110 cursor-default select-none"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {tech}
            </span>
            <div className="ml-12 w-1.5 h-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-500/50 transition-colors" />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

function PastWork() {
  return (
    <section id="past-work" className="relative min-h-screen px-16 py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-purple-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
          Past <span className="text-purple-400 italic" style={{ fontFamily: "var(--font-sail)" }}>Work</span>
        </h2>
        <p className="text-gray-500 text-sm mb-14" style={{ fontFamily: "var(--font-outfit)" }}>
          Here are some of my recent projects. You can view more via my Github
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(({ title, desc, link }) => (
            <div key={title} className="group border border-white/10 bg-white/5 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-outfit)" }}>{title}</h3>
                {link && (
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "var(--font-outfit)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative px-16 py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-900/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-xl">
        <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
          Get in <span className="text-purple-400 italic" style={{ fontFamily: "var(--font-sail)" }}>Touch</span>
        </h2>
        <p className="text-gray-500 text-sm mb-10" style={{ fontFamily: "var(--font-outfit)" }}>
          Have a project in mind? Let’s build something great together.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name" // Matches formData.get("name")
              placeholder="Name"
              required
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
            <input
              type="email"
              name="email" // Matches formData.get("email")
              placeholder="Email"
              required
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          <textarea
            name="message" // Matches formData.get("message")
            placeholder="Your Message"
            rows={5}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
          />
          
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-8 py-3 rounded-md transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
            <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-4">Message sent! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-4">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <LenisProvider>
      <main className="bg-black">
        <Navbar /> 
        <Hero />
        <TechStack />
        <PastWork />
        <Contact />
      </main>
    </LenisProvider>
  );
}