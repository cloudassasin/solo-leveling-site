import Link from "next/link";

const nav = [
  { href: "#storyline", label: "Storyline" },
  { href: "#characters", label: "Hunters" },
  { href: "#shadow-army", label: "Shadow Army" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="system-grid bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55 border-b border-border">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link
            href="#top"
            className="group inline-flex items-center gap-3 focus-electric rounded-md"
            aria-label="Jump to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl panel glow-ring">
              <span className="h-3 w-3 rounded-full bg-electric shadow-[0_0_20px_color-mix(in_oklab,var(--electric)_55%,transparent)]" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm tracking-[0.2em] text-muted">
                SYSTEM
              </span>
              <span className="block font-display text-base text-foreground">
                SOLO LEVELING
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-electric rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#characters"
            className="focus-electric inline-flex items-center justify-center rounded-full border border-border bg-panel px-4 py-2 text-sm font-medium text-foreground transition hover:border-electric/60 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--electric)_35%,transparent)]"
          >
            View Dossier
          </a>
        </div>
      </div>
    </header>
  );
}

