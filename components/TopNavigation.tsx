'use client';

import Link from 'next/link';

const navItems = [
  { label: "Domov", href: "/" },
  { label: "O adoraciji", href: "#about" },
  { label: "Urnik", href: "#schedule" },
  { label: "Škofije", href: "#dioceses" },
  { label: "Kontakt", href: "#contact" },
];

const TopNavigation = () => {
  return (
    <header className="absolute top-0 left-0 z-30 py-4 px-6">
      <nav className="flex flex-col items-start gap-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-gold-light text-2xl">✝</span>
          <span className="font-display text-2xl md:text-3xl text-cream font-semibold tracking-wide group-hover:text-gold-light transition-colors">
            Adoramus
          </span>
        </Link>

        {/* Navigation Links */}
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
    </header>
  );
};

export default TopNavigation;
