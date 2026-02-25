import { CharacterCard } from "@/components/CharacterCard";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { ShadowCard } from "@/components/ShadowCard";
import { characters, shadows } from "@/lib/soloData";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <a
        href="#content"
        className="focus-electric sr-only absolute left-4 top-4 z-[60] rounded-md bg-panel px-4 py-2 text-sm text-foreground not-sr-only"
      >
        Skip to content
      </a>

      <Header />

      <main id="content" className="scanlines">
        <div className="system-grid">
          <div className="mx-auto w-full max-w-6xl px-5">
            <section className="py-16 sm:py-20">
              <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <p className="font-display text-xs tracking-[0.35em] text-muted">
                    GATES • HUNTERS • SYSTEM
                  </p>
                  <h1 className="mt-4 font-display text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                    <span className="text-glow bg-gradient-to-r from-electric via-sky-200 to-foreground bg-clip-text text-transparent">
                      Arise
                    </span>
                  </h1>
                  <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                    When Gates rupture reality, Hunters step forward to clear the
                    dungeons inside. One “weakest of all mankind” survives the
                    impossible—then the System answers.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href="#storyline"
                      className="focus-electric inline-flex items-center justify-center rounded-full bg-electric px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                    >
                      Enter the Gate
                    </a>
                    <a
                      href="#shadow-army"
                      className="focus-electric inline-flex items-center justify-center rounded-full border border-border bg-panel px-6 py-3 text-sm font-medium text-foreground transition hover:border-electric/60"
                    >
                      View Shadow Army
                    </a>
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl">
                    {[
                      { k: "STATUS", v: "ONLINE" },
                      { k: "THREAT", v: "UNDEFINED" },
                      { k: "SYNC", v: "99.7%" },
                    ].map((s) => (
                      <div
                        key={s.k}
                        className="rounded-2xl panel px-4 py-4"
                      >
                        <p className="font-display text-[11px] tracking-[0.28em] text-muted">
                          {s.k}
                        </p>
                        <p className="mt-2 font-display text-lg text-foreground">
                          <span className="text-electric">{s.v}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-3xl panel p-6 sm:p-7">
                    <p className="font-display text-xs tracking-[0.35em] text-muted">
                      SYSTEM WINDOW
                    </p>
                    <div className="mt-5 space-y-4">
                      <div className="rounded-2xl border border-border bg-background/35 p-4">
                        <p className="text-xs text-muted">Quest</p>
                        <p className="mt-1 font-display text-base text-foreground">
                          Survive the Double Dungeon.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border bg-background/35 p-4">
                        <p className="text-xs text-muted">Reward</p>
                        <p className="mt-1 font-display text-base text-foreground">
                          Awakening • Stat Growth • Shadow Authority
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border bg-background/35 p-4">
                        <p className="text-xs text-muted">Warning</p>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          Failure results in immediate termination. Proceed at
                          your own risk.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-xs text-muted">
                      <span>Interface</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/30 px-3 py-1 text-foreground/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_14px_color-mix(in_oklab,var(--electric)_55%,transparent)]" />
                        ELECTRIC BLUE
                      </span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[28px] bg-gradient-to-r from-electric/25 via-transparent to-sky-500/20 blur-2xl" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <Section
          id="storyline"
          eyebrow="STORYLINE"
          title="From the weakest Hunter to the edge of extinction"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl panel p-7">
              <p className="text-sm leading-7 text-muted sm:text-base">
                Sung Jinwoo, known as the{" "}
                <span className="text-foreground">
                  “Weakest Hunter of All Mankind”
                </span>
                , enters a low-level raid to pay medical bills and survive
                another day. But inside, a hidden chamber—later feared as the{" "}
                <span className="text-foreground">Double Dungeon</span>—turns a
                routine mission into a massacre.
              </p>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                Left at death’s door, Jinwoo receives an impossible offer: a
                game-like interface only he can see. Quests. Stats. Punishments.
                Power that grows… as long as he keeps moving forward.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-background/35 px-5 py-4 text-sm text-muted">
                <span className="font-display text-xs tracking-[0.25em] text-muted">
                  DIRECTIVE
                </span>
                <p className="mt-2">
                  Clear the Gates. Level up. Command the shadows.
                </p>
              </div>
            </div>

            <div className="rounded-3xl panel p-7">
              <p className="font-display text-xs tracking-[0.35em] text-muted">
                INCIDENT LOG
              </p>
              <ol className="mt-5 space-y-4">
                {[
                  {
                    t: "Gate breach detected",
                    d: "Dungeon clearance initiated under standard protocols.",
                  },
                  {
                    t: "Hidden chamber revealed",
                    d: "Rules change. Survivability drops to near-zero.",
                  },
                  {
                    t: "System contract offered",
                    d: "Exclusive interface granted to a single Player.",
                  },
                  {
                    t: "Shadow authority awakens",
                    d: "Extraction and command of fallen forces becomes possible.",
                  },
                ].map((e) => (
                  <li key={e.t} className="flex gap-4">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-electric shadow-[0_0_18px_color-mix(in_oklab,var(--electric)_55%,transparent)]" />
                    <div>
                      <p className="font-display text-sm text-foreground">
                        {e.t}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted">{e.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-electric/40 via-border to-transparent" />
              <p className="mt-6 text-sm leading-7 text-muted">
                The hunt escalates—from raids to catastrophes—until the only way
                forward is to become something beyond a Hunter.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="characters"
          eyebrow="CHARACTER DOSSIERS"
          title="Hunters, allies, and the one who breaks the rules"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {characters.map((c) => (
              <CharacterCard key={c.name} character={c} />
            ))}
          </div>
        </Section>

        <Section
          id="shadow-army"
          eyebrow="SHADOW ARMY"
          title="Bind. Extract. Command."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shadows.map((s) => (
              <ShadowCard key={s.name} shadow={s} />
            ))}
          </div>
        </Section>

        <footer className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                Fan-made UI concept inspired by <span className="text-foreground">Solo Leveling</span>.
                Not affiliated with official rights holders.
              </p>
              <a
                href="#top"
                className="focus-electric inline-flex items-center justify-center rounded-full border border-border bg-panel px-5 py-2 text-sm text-foreground transition hover:border-electric/60"
              >
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
