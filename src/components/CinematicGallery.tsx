"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/solo-blade-closeup.png",
    label: "Blade of the Player",
    description:
      "A moment before the strike—stats, skills, and instinct perfectly aligned.",
  },
  {
    src: "/solo-shadow-wings.png",
    label: "Wings of the Monarch",
    description:
      "When shadows unfurl into wings, the battlefield stops belonging to mortals.",
  },
  {
    src: "/solo-shadow-trio.png",
    label: "Commanders of the Dark",
    description:
      "Elite shadows stand at the frontlines, awaiting a single silent order.",
  },
] as const;

const INTERVAL_MS = 6500;

export function CinematicGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl panel">
      <div className="relative aspect-[16/9] w-full">
        {slides.map((slide, i) => {
          const isActive = i === index;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="font-display text-xs tracking-[0.3em] text-muted">
          CINEMATIC ARCHIVE
        </p>
        <p className="mt-2 font-display text-lg text-foreground">
          {slides[index].label}
        </p>
        <p className="mt-1 text-sm text-muted">{slides[index].description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((slide, i) => {
              const isActive = i === index;
              return (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`focus-electric h-2.5 w-6 rounded-full border border-border/70 transition-colors ${
                    isActive
                      ? "bg-electric shadow-[0_0_16px_color-mix(in_oklab,var(--electric)_60%,transparent)]"
                      : "bg-background/40 hover:bg-electric/40"
                  }`}
                  aria-label={`Show frame ${i + 1}`}
                  aria-pressed={isActive}
                />
              );
            })}
          </div>
          <span className="text-xs text-muted">
            FRAME {index + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}

