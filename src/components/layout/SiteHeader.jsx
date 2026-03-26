import { Link, NavLink, useLocation } from "react-router-dom";
import { GlitchText } from "../ui/GlitchText";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
];

export function SiteHeader() {
  const location = useLocation();
  const isContact = location.hash === "#contact";

  return (
    <header className="sticky top-0 z-50 border-b-2 border-(--border) bg-[rgba(10,10,10,0.88)] backdrop-blur">
      <div className="ns-container flex h-16 items-center justify-between gap-4 sm:h-18">
        <Link to="/" className="min-w-0">
          <GlitchText className="font-mono text-sm font-bold uppercase tracking-[0.28em] text-(--signal) sm:text-base">
            NULL//SIGNAL
          </GlitchText>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `ns-btn ${
                  isActive
                    ? "border-(--signal) text-(--signal)"
                    : "border-(--border) text-(--text) hover:border-(--signal) hover:text-(--signal)"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <a
            href="/#contact"
            className={`ns-btn ${
              isContact
                ? "border-(--signal) text-(--signal) bg-(--signal)"
                : "ns-btn-primary"
            }`}
          >
            Contact
          </a>
        </nav>

        <a href="/#contact" className="ns-btn ns-btn-primary md:hidden">
          Ping
        </a>
      </div>
    </header>
  );
}
