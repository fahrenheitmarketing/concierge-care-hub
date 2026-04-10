import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Membership", to: "/membership" },
  { label: "Services", to: "/services" },
  {
    label: "About",
    to: "/about",
    dropdown: [
      { label: "FAQs", to: "/faqs" },
      { label: "Resources", to: "/resources" },
    ],
  },
];

function DropdownNav({ link, currentPath }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isActive = currentPath === link.to || link.dropdown.some(d => currentPath === d.to);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        to={link.to}
        className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-1 ${
          isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {link.label}
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        <span
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out"
          style={{ backgroundColor: '#6b8e23', width: isActive ? '100%' : '0%' }}
        />
        <span
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out"
          style={{ backgroundColor: '#6b8e23' }}
        />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[160px] z-50"
          >
            {link.dropdown.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block px-4 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-muted ${
                  currentPath === item.to ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/75 backdrop-blur-md shadow-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/8102bbb5f_concierge-pediatrics-logo-768x282.png"
              alt="Concierge Pediatrics"
              className="h-14 lg:h-16 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownNav key={link.to} link={link} currentPath={location.pathname} />
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors group ${
                    location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out"
                    style={{
                      backgroundColor: '#6b8e23',
                      width: location.pathname === link.to ? '100%' : '0%',
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-out"
                    style={{ backgroundColor: '#6b8e23' }}
                  />
                </Link>
              )
            )}
            </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:3052393119"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              (305) 239-3119
            </a>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
                Schedule a Consultation
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="tel:3052393119"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  (305) 239-3119
                </a>
                <Link to="/contact" className="block px-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}