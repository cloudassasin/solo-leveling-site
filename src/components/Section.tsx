import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="font-display text-xs tracking-[0.35em] text-muted">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-border via-electric/40 to-transparent sm:block" />
        </div>
        {children}
      </div>
    </section>
  );
}

