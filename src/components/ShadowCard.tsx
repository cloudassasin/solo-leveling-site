import type { Shadow } from "@/lib/soloData";

function ShadowSigil() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-9 w-9 text-electric"
      fill="none"
    >
      <path
        d="M32 6l7 10 12 3-8 9 1 12-12-5-12 5 1-12-8-9 12-3 7-10z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <path
        d="M20 40c6 3 18 3 24 0"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.65"
      />
      <path
        d="M16 26c7-8 25-8 32 0"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
}

export function ShadowCard({ shadow }: { shadow: Shadow }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl panel p-6 transition-transform will-change-transform hover:-translate-y-1">
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-electric/10 blur-2xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xs tracking-[0.25em] text-muted">
            SHADOW
          </p>
          <h3 className="mt-2 font-display text-lg tracking-tight text-foreground">
            {shadow.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{shadow.type}</p>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-background/30 group-hover:border-electric/55">
          <ShadowSigil />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {shadow.signature.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border bg-background/25 px-3 py-1 text-xs text-foreground/90 group-hover:border-electric/45"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between text-xs text-muted">
        <span>Bind Status</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/30 px-3 py-1 text-foreground/90">
          <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_14px_color-mix(in_oklab,var(--electric)_55%,transparent)]" />
          ACTIVE
        </span>
      </div>
    </article>
  );
}

