import { NavLink, useLocation } from "react-router-dom";

const items = [
  { to: "/", label: "Home", match: "/" },
  { to: "/projects", label: "Projects", match: "/projects" },
];

export function MobileDock() {
  const location = useLocation();
  const isContact = location.hash === "#contact";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-(--border) bg-[rgba(10,10,10,0.96)] backdrop-blur md:hidden">
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
  );
}
