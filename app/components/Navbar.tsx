"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "Past Work", href: "#past-work" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-black/10 backdrop-blur-md border-b border-white/5"
    >
      <span
        className="text-xl font-bold text-white tracking-tight"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        10<span className="text-purple-500">txn</span>
      </span>

      <ul
        className="flex gap-10 text-sm text-gray-300"
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

      <a
        href="https://github.com/10txn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-white/25 text-white text-sm px-5 py-2 rounded-md hover:bg-white/10 transition-all duration-200"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        Github <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
      </a>
    </nav>
  );
}