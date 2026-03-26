import { NavLink, useLocation } from "react-router-dom";

const items = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
];

export function MobileDock() {
  const location = useLocation();
  const isContact = location.hash === "#contact";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="mx-0 border-t-2 border-(--border) bg-[rgba(10,10,10,0.98)] shadow-[0_-8px_24px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="grid grid-cols-3">
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex min-h-16 flex-col items-center justify-center border-r border-(--border) px-2 font-mono text-[10px] uppercase tracking-[0.22em] last:border-r-0 ${
                  isActive ? "text-(--signal)" : "text-(--text)"
                }`
              }
            >
              <span>{item.label}</span>
            </NavLink>
          ))}

          <a
            href="/#contact"
            className={`flex min-h-16 flex-col items-center justify-center px-2 font-mono text-[10px] uppercase tracking-[0.22em] ${
              isContact ? "text-(--signal)" : "text-(--text)"
            }`}
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}
