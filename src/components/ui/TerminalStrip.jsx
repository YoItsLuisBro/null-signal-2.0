export function TerminalStrip() {
  const items = [
    ["status", "active"],
    ["mode", "building"],
    ["focus", "technical systems"],
    ["signal", "synced"],
  ];

  return (
    <div className="min-w-0 border-2 border-(--border) bg-black/30 p-3 sm:p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-(--signal)">
        System Readout
      </p>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {items.map(([label, value]) => (
          <div
            key={label}
            className="flex min-w-0 items-center justify-between gap-3 border border-(--border) px-3 py-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--muted)">
              {label}
            </span>
            <span className="truncate text-right font-mono text-[10px] uppercase tracking-[0.18em] text-(--text)">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
