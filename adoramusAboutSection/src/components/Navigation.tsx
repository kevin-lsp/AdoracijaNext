import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Domov" },
    { id: "calendar", label: "Urnik" },
    { id: "about", label: "O Adoraciji" },
    { id: "signup", label: "Pridruži se" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <nav className="absolute top-1/2 right-4 -translate-y-1/2 z-50">
      <div className="flex flex-col items-end gap-2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col items-end gap-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className="text-black hover:text-black/70 hover:bg-black/10 transition-colors font-cormorant font-bold text-xl justify-end"
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black hover:text-black/70 transition-colors bg-card/80 rounded-lg border border-border"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 py-2 bg-background/95 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-end text-black hover:text-black/70 hover:bg-black/10 font-cormorant font-bold text-xl"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
