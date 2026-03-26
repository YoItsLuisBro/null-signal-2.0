export function GlitchText({ children, className = "" }) {
  return (
    <span className={`relatie inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute left-px top-0 z-0 opacity-30"
        style={{ color: "var(--signal)" }}
      >
        {children}
      </span>
    </span>
  );
}
