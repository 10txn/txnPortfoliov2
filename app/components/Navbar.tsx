"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons"; // Added bars icon for mobile
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Past Work", href: "#past-work" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu on click
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <span
          className="text-xl font-bold text-white tracking-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          10<span className="text-purple-500">txn</span>
        </span>

        {/* Desktop Links - Hidden on Mobile */}
        <ul
          className="hidden md:flex gap-10 text-sm text-gray-300"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className="hover:text-purple-400 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button - Hidden on Mobile */}
        <a
          href="https://github.com/10txn"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 border border-white/25 text-white text-sm px-5 py-2 rounded-md hover:bg-white/10 transition-all duration-200"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Github <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/5 flex flex-col items-center gap-6 py-8 animate-in fade-in slide-in-from-top-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleScroll(e, href)}
              className="text-gray-300 text-lg"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/10txn"
            className="text-purple-400 font-semibold"
          >
            Github
          </a>
        </div>
      )}
    </nav>
  );
}