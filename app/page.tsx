/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const analysisModes = {
  qualitative: {
    label: "Qualitative Focus",
    description:
      "Emphasizes sensory evaluation and quick reagent-based observations to detect lipid presence in chip samples."
  },
  quantitative: {
    label: "Quantitative Focus",
    description:
      "Highlights gravimetric extraction, Soxhlet apparatus usage, and chromatographic separation for precise fat profiling."
  }
};

export default function CoverPage() {
  const [mode, setMode] = useState<keyof typeof analysisModes>("qualitative");

  const highlightGradient = useMemo(
    () =>
      mode === "qualitative"
        ? "from-sky-400/60 via-emerald-300/60 to-amber-200/60"
        : "from-emerald-400/70 via-sky-300/70 to-yellow-200/70",
    [mode]
  );

  return (
    <main className="min-h-screen bg-slate-900 py-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-4">
        <section className="relative flex w-full max-w-[210mm] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.65)]">
          <div className="absolute inset-0 -z-10 opacity-80">
            <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-amber-400/25 blur-3xl" />
          </div>

          <div className="chemistry-border pointer-events-none absolute inset-0" />

          <div className="relative flex flex-col gap-6 px-8 pb-8 pt-10 sm:px-12 sm:pb-12">
            <header className="text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200 sm:text-sm">
                Class 12 Chemistry Project
              </p>
              <h1 className="mt-6 text-balance font-display text-4xl sm:text-5xl">
                FAT ANALYSIS IN CHIPS
              </h1>
              <p className="mt-4 text-pretty text-base text-slate-200 sm:text-lg">
                An investigative exploration into lipid profiling, nutritional
                evaluation, and laboratory methodologies applied to processed
                snack foods.
              </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="relative overflow-hidden rounded-3xl bg-slate-800/60 p-6 shadow-lg backdrop-blur">
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${highlightGradient} opacity-80 blur-2xl transition-colors duration-500`}
                />
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-100 sm:text-base">
                    Analytical Spotlight
                  </h2>
                  <div className="flex items-center gap-2 rounded-full bg-slate-900/70 p-1">
                    {(
                      Object.keys(analysisModes) as Array<
                        keyof typeof analysisModes
                      >
                    ).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setMode(key)}
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all sm:text-sm ${
                          mode === key
                            ? "bg-emerald-300 text-slate-900 shadow"
                            : "text-emerald-100 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        {analysisModes[key].label.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-pretty text-sm text-emerald-50 sm:text-base">
                  {analysisModes[mode].description}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-900/60 p-4 shadow-inner transition-transform duration-500 hover:-translate-y-1 hover:shadow-emerald-400/30">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                      Key Metrics
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-200 sm:text-sm">
                      <li>• Saturated &amp; unsaturated lipid ratio</li>
                      <li>• Trans-fat detection thresholds</li>
                      <li>• Moisture-normalized fat content</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-slate-900/60 p-4 shadow-inner transition-transform duration-500 hover:-translate-y-1 hover:shadow-sky-400/30">
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">
                      Lab Apparatus
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-slate-200 sm:text-sm">
                      <li>• Soxhlet extractor assembly</li>
                      <li>• Analytical balance &amp; dessicator</li>
                      <li>• Gas chromatography columns</li>
                    </ul>
                  </div>
                </div>
              </article>

              <aside className="flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/70 shadow-lg">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />
                  <Image
                    src="https://images.unsplash.com/photo-1584270354949-1fde6d1ecfef?auto=format&fit=crop&w=900&q=80"
                    alt="Microscope view of potato chips indicating fat analysis"
                    width={900}
                    height={900}
                    className="h-full w-full object-cover mix-blend-luminosity"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-900/80 p-3 text-xs text-slate-100 shadow-lg sm:text-sm">
                    Analytical imagery of chip lipid profiling captured through
                    microscopy and chromatographic overlays.
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-5 shadow-lg">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-sky-200 sm:text-base">
                    Student Details
                  </h2>
                  <div className="mt-4 grid gap-3 text-xs text-slate-100 sm:text-sm">
                    <div className="detail-field">
                      <span className="label">Student Name</span>
                      <span className="value">__________________________</span>
                    </div>
                    <div className="detail-field">
                      <span className="label">Class</span>
                      <span className="value">__________________________</span>
                    </div>
                    <div className="detail-field">
                      <span className="label">Roll Number</span>
                      <span className="value">__________________________</span>
                    </div>
                    <div className="detail-field">
                      <span className="label">Teacher</span>
                      <span className="value">__________________________</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-xs text-slate-200 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/80 text-slate-900 font-display text-lg shadow-lg">
                  C
                </span>
                <div>
                  <p className="font-semibold uppercase tracking-wide text-emerald-100">
                    Central Modern School
                  </p>
                  <p className="text-[11px] text-slate-300 sm:text-xs">
                    Academic Year 2024-2025
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="floating-atom" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="max-w-[220px] text-right text-[11px] text-slate-300 sm:text-xs">
                  Designed with modern scientific visualization principles to
                  communicate lipid analysis methodologies effectively.
                </p>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
