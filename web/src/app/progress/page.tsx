export default function ProgressPage() {
  const versions = [
    {
      version: "v0.1",
      date: "February 12, 2026",
      title: "Foundation",
      color: "from-purple-900/40 to-purple-900/10",
      border: "border-purple-700/40",
      tag: "bg-purple-900/60 text-purple-300",
      sections: [
        {
          heading: "Architecture",
          items: [
            "DAG-based pipeline: Orchestrator dispatches tasks to modular Executors",
            "Versioned artifact store for reproducible project state",
            "State machine managing pipeline transitions (IDLE → EXPORT_DONE)",
            "Policy config (YAML) for system-level constraints",
          ],
        },
        {
          heading: "Music engine",
          items: [
            "Harmony module — key parsing, scale/chord generation, progressions",
            "MIDI patterns — boom_bap + trap drum patterns with energy variation",
            "Audio utilities — pad/truncate, peak/RMS, limiter, mix, WAV I/O",
            "FluidSynth rendering with graceful sine/noise fallback",
          ],
        },
        {
          heading: "Milestone",
          items: [
            "21 tests passing (schema, timeline, QC, E2E smoke)",
            "First full E2E run (Feb 10): MIDI → render → QC → mix.wav (15.8 MB)",
          ],
        },
      ],
    },
    {
      version: "v0.2",
      date: "February 24, 2026",
      title: "Conversational Interface",
      color: "from-fuchsia-900/40 to-fuchsia-900/10",
      border: "border-fuchsia-700/40",
      tag: "bg-fuchsia-900/60 text-fuchsia-300",
      sections: [
        {
          heading: "ChatExecutor (new)",
          items: [
            "Gemini-powered chatbot for brief creation and patching",
            "Two modes: create from scratch or patch existing brief",
            "Patch whitelist — only approved fields (BPM, key, mood, style) editable via chat",
            "Brief sufficiency check — generates only when enough intent is present",
          ],
        },
        {
          heading: "UI overhaul",
          items: [
            "Replaced 4-page Streamlit app with ChatGPT-style project chat",
            "Sidebar project list, bottom chat input, floating mini audio player",
            "Post-generation summary: style, mood, BPM, key, instruments with AI reasoning",
            "3 clickable example prompt chips for onboarding",
          ],
        },
        {
          heading: "Pipeline",
          items: [
            "Instruments selection moved after brief lock",
            "instrument_map.json separated from brief.json as dedicated artifact",
            "metadata.json as single source of truth for all project state",
          ],
        },
      ],
    },
    {
      version: "v0.2.1",
      date: "March 27, 2026",
      title: "Instrument Control",
      color: "from-indigo-900/40 to-indigo-900/10",
      border: "border-indigo-700/40",
      tag: "bg-indigo-900/60 text-indigo-300",
      sections: [
        {
          heading: "Instrument patching (new)",
          items: [
            "detect_instrument_request() — distinguishes instrument changes from mood/BPM changes",
            "apply_instrument_patch() — surgically updates individual stems without touching others",
            "compute_instrument_diff() — human-readable diff shown to user after patch",
            "InstrumentPreset schema: bank, program, name, reason for full GM soundfont control",
          ],
        },
        {
          heading: "Detection examples",
          items: [
            '"I want to try another bass sound" → instrument request ✓',
            '"switch drums to Standard kit" → instrument request ✓',
            '"make it darker" → NOT instrument — handled by brief patch',
            '"slow down to 120 BPM" → NOT instrument — handled by brief patch',
          ],
        },
        {
          heading: "Tests",
          items: [
            "15 new tests covering detection, apply, and diff",
            "False-positive prevention: mood/BPM/generic praise does not trigger instrument detection",
          ],
        },
      ],
    },
    {
      version: "v0.3",
      date: "April 7, 2026",
      title: "Selective Regeneration",
      color: "from-violet-900/40 to-violet-900/10",
      border: "border-violet-500/50",
      tag: "bg-violet-800/80 text-violet-200",
      badge: "Current",
      sections: [
        {
          heading: "Stem selection system (new)",
          items: [
            "parse_stem_selection() — Gemini decides which stems to regenerate vs. keep",
            "StemMixMap schema — tracks which version of each stem is in the active mix",
            "Version resolution: null (exclude), NEW (regenerate), int (specific version), KEEP (current)",
          ],
        },
        {
          heading: "Selective regeneration examples",
          items: [
            '"Only change the drums" → generate: {drums}, bass + pads kept at current versions',
            '"Redo everything" → generate: {drums, bass, pads}, full regeneration',
            "Error fallback: defaults to full regeneration if parse fails",
          ],
        },
        {
          heading: "Growth",
          items: [
            "ChatExecutor: 379 lines (v0.2) → 488 (v0.2.1) → 735 (v0.3)",
            "midi_patterns.py: 257 lines (v0.1) → 336 (v0.3)",
            "models.py: 273 lines (v0.1) → 353 (v0.3)",
          ],
        },
      ],
    },
  ];

  const nextSteps = [
    "Server deployment — Railway/Render, shareable link for real users",
    "Fix Google Gemini API version issue (current pipeline blocker)",
    "Chatbot output testing with MiniMax / GPT APIs",
    "First 10 real users — collect expression feedback",
    "Plugin system — EQ, compressor, reverb for audio processing layer",
    "Company incorporation — Delaware C-Corp (target: May 2026)",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <div className="mb-4 flex items-center gap-3">
          <a
            href="/"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            ← lyrapro.ai
          </a>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight mb-2">
          Development Progress
        </h1>
        <p className="text-white/50 text-lg mb-2">
          Lyra AI Hip-Hop Platform — Backend Pipeline
        </p>
        <p className="text-white/30 text-sm mb-16">
          Chenye Wang · Peijun Wu · Peabody Institute, Johns Hopkins University
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { label: "Versions shipped", value: "4" },
            { label: "Tests passing", value: "36+" },
            { label: "Status", value: "Deploying" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <div className="text-2xl font-semibold mb-1">{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Version cards */}
        <div className="space-y-8 mb-20">
          {versions.map((v) => (
            <div
              key={v.version}
              className={`rounded-2xl border ${v.border} bg-gradient-to-br ${v.color} p-6`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${v.tag}`}
                    >
                      {v.version}
                    </span>
                    {v.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/60 text-green-300">
                        {v.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold">{v.title}</h2>
                </div>
                <span className="text-white/30 text-sm">{v.date}</span>
              </div>

              {/* Sections */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {v.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                      {section.heading}
                    </h3>
                    <ul className="space-y-1.5">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-white/70 leading-relaxed flex gap-2"
                        >
                          <span className="text-white/20 mt-0.5 shrink-0">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Frontend note */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/50">
              lyra_web
            </span>
            <span className="text-white/30 text-sm">March 27, 2026</span>
          </div>
          <h2 className="text-lg font-semibold mb-1">Public Landing Page</h2>
          <p className="text-white/40 text-sm mb-4">
            Separate frontend codebase powering lyrapro.ai — not a backend version update.
          </p>
          <ul className="space-y-1.5">
            {[
              "Next.js 16 + React 19 + TypeScript + Tailwind CSS 4",
              "Email waitlist collection via Formspree",
              "Demo audio embedded for product preview",
              "Dark-mode design with purple/fuchsia atmospheric gradients",
            ].map((item, i) => (
              <li key={i} className="text-sm text-white/60 flex gap-2">
                <span className="text-white/20 mt-0.5 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
          <div className="space-y-3">
            {nextSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="text-white/20 font-mono text-sm mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/70 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <span className="text-white/20 text-sm">lyrapro.ai · April 2026</span>
          <a
            href="/"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            Back to home →
          </a>
        </div>
      </div>
    </main>
  );
}