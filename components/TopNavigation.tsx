'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: "Domov", href: "/" },
  { label: "O adoraciji", href: "#about" },
  { label: "Urnik", href: "#schedule" },
  { label: "Škofije", href: "#dioceses" },
  { label: "Kontakt", href: "#contact" },
];

const TopNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30 py-4 px-6">
      <nav className="flex items-start justify-between md:block">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-gold-light text-2xl">✝</span>
          <span className="font-display text-2xl md:text-3xl text-cream font-semibold tracking-wide group-hover:text-gold-light transition-colors">
            Adoramus
          </span>
        </Link>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex flex-col items-start gap-10 ml-2 mt-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-body text-lg text-cream/80 hover:text-gold-light transition-colors duration-300 uppercase tracking-wider"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-navy/90 backdrop-blur-md rounded-xl p-4 border border-cream/10">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-body text-base text-cream/80 hover:text-gold-light transition-colors duration-300 uppercase tracking-wider py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default TopNavigation;
