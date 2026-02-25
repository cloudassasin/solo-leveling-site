import type { Character } from "@/lib/soloData";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl panel transition-transform will-change-transform hover:-translate-y-1">
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-electric/10 blur-2xl" />
        <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-sky-500/10 blur-2xl" />
      </div>

      <div className="relative flex h-full flex-col gap-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg tracking-tight text-foreground">
              {character.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{character.subtitle}</p>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-foreground">
            {character.rank}
          </span>
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.25em] text-muted">
            KEY ABILITIES
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {character.abilities.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-background/30 px-3 py-1 text-xs text-foreground/90 transition-colors group-hover:border-electric/50"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto rounded-xl border border-border bg-background/35 px-4 py-3 text-xs text-muted">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_16px_color-mix(in_oklab,var(--electric)_55%,transparent)]" />
          {character.statusLine}
        </div>
      </div>
    </article>
  );
}

