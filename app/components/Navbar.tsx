"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "Past Work", href: "#past-work" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Close menu on click
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/5 font-[family-name:var(--font-outfit)]">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <span className="text-xl font-bold text-white tracking-tight">
          10<span className="text-purple-500">txn</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm text-gray-300">
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

        {/* Desktop Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/10txn"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 border border-white/25 text-white text-sm px-5 py-2 rounded-md hover:bg-white/10 transition-all duration-200"
          >
            Github <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
          </a>

          {/* Hamburger Icon */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-black/90 border-b border-white/10`}>
        <ul className="flex flex-col items-center gap-6 py-8 text-lg text-gray-300">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className="hover:text-purple-400 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <a
            href="https://github.com/10txn"
            className="sm:hidden text-purple-400 font-semibold"
          >
            Github <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-1" />
          </a>
        </ul>
      </div>
    </nav>
  );
}