"use client";

import React, { useMemo, useState } from "react";

export default function Home() {
  // ✅ 1) 换成你的 Formspree / Getform URL
  // Formspree 示例： https://formspree.io/f/abcdwxyz
  const FORM_ACTION_URL = "https://formspree.io/f/xdalnjrz";

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  const canSubmit = useMemo(() => {
    const trimmed = email.trim();
    // 简单邮箱校验（够用，不折腾）
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  }, [email]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    if (!canSubmit) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    if (!FORM_ACTION_URL || FORM_ACTION_URL.includes("XXXX")) {
      setStatus("error");
      setMessage("Form endpoint not set yet. Please update FORM_ACTION_URL.");
      return;
    }

    try {
      setStatus("loading");

      const formData = new FormData();
      formData.append("email", email.trim());
      formData.append("source", "lyrapro-landing");
      formData.append("project", "Lyra");

      const res = await fetch(FORM_ACTION_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You’re in. We’ll reach out soon.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again in a moment.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-260px] left-[-220px] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Top bar */}
        <header className="flex items-center justify-between py-10 text-sm">
          <div className="flex items-center gap-3">
            <img
              src="/icon.svg"
              alt="Lyra"
              className="h-8 w-8 rounded-xl ring-1 ring-white/15"
            />
            <div className="tracking-widest text-gray-200">LYRA</div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-gray-300">
            <a className="hover:text-white transition" href="#what">
              What
            </a>
            <a className="hover:text-white transition" href="#why">
              Why Hip-Hop
            </a>
            <a className="hover:text-white transition" href="#approach">
              Approach
            </a>
            <a className="hover:text-white transition" href="#stage">
              Stage
            </a>
            <a className="hover:text-white transition" href="#early-access">
              Early Access
            </a>
            <a className="hover:text-white transition" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2 text-gray-300">
            <span className="hidden sm:inline">lyrapro.ai</span>
            <span className="text-white/30">|</span>
            <span className="hidden sm:inline">lyrapro.io</span>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-10 pb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
            An AI Hip-Hop Music Platform for Expression and Voice
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.03] tracking-tight">
            Turn ideas into hip-hop.
            <br />
            Make voice easier than production.
          </h1>

          <p className="mt-7 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-300">
            Lyra is an early-stage AI music platform centered on hip-hop as a primary medium for
            self-expression. Inspired by the lyre—one of the earliest and most accessible musical
            instruments—Lyra helps anyone turn ideas, emotions, images, or words into music, even
            without formal musical training.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold hover:bg-purple-500 transition"
            >
              Get in touch
            </a>
            <a
              href="#approach"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 hover:border-white/30 transition"
            >
              How it works
            </a>
            <a
              href="#early-access"
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-gray-300 hover:border-white/25 transition"
            >
              Early Access
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <FeatureCard
              title="What it is"
              text="A guided, conversational AI experience that transforms intent into hip-hop beats or full tracks."
            />
            <FeatureCard
              title="Why it matters"
              text="Hip-hop is a global language of expression—Lyra lowers the barrier to participation in that ecosystem."
            />
            <FeatureCard
              title="Who it serves"
              text="People with something to say, creators with limited resources, and students exploring voice through music."
            />
          </div>
        </section>

        {/* Early Access (high-signal section) */}
        <section id="early-access" className="py-14 border-t border-white/10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-gray-400">
                  Early Access
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                  Join the waitlist for Lyra
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  We’re building a guided, conversational path from intent → hip-hop output.
                  If you want to shape the first version, leave your email.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Pill>People with something to say</Pill>
                  <Pill>Hip-hop listeners</Pill>
                  <Pill>Students & early creators</Pill>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <form onSubmit={onSubmit} className="space-y-3">
                  <label className="block text-sm text-gray-300">
                    Email
                    <div className="mt-2 flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-white/25"
                        required
                      />
                      <button
                        type="submit"
                        disabled={status === "loading" || !canSubmit}
                        className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-500 transition disabled:opacity-50 disabled:hover:bg-purple-600"
                      >
                        {status === "loading" ? "Submitting..." : "Get Early Access"}
                      </button>
                    </div>
                  </label>

                  <div className="text-xs text-gray-500">
                    No spam. Just product updates + early invites.
                  </div>

                  {message ? (
                    <div
                      className={
                        "rounded-xl border px-4 py-3 text-sm " +
                        (status === "success"
                          ? "border-green-500/30 bg-green-500/10 text-green-200"
                          : "border-red-500/30 bg-red-500/10 text-red-200")
                      }
                    >
                      {message}
                    </div>
                  ) : null}

                  <div className="text-xs text-gray-500">
                    Tip: For meetings, this section signals traction readiness.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* What */}
        <Section id="what" title="What is Lyra?">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-gray-300 leading-relaxed">
                At its core, Lyra treats music not as a technical skill, but as a language for
                participation and voice.
              </p>
              <div className="mt-5 grid gap-3">
                <Pill>Ideas → Music</Pill>
                <Pill>Images + Words → Tracks</Pill>
                <Pill>Accessible by design</Pill>
              </div>
            </Card>

            <Card>
              <p className="text-gray-300 leading-relaxed">
                Inspired by the lyre—simple, expressive, and historically accessible—Lyra aims to
                make musical expression feel “pick-up-and-play” for anyone.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                The goal is not to replace creativity, but to expand who can participate.
              </p>
            </Card>
          </div>
        </Section>

        {/* Why Hip-Hop */}
        <Section id="why" title="Why Hip-Hop?">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed">
                Hip-hop is not just a music genre—it is one of the most globally recognized and widely
                shared languages of expression today. Across cultures and communities, hip-hop already
                functions as a common space where ideas, emotions, and identities are exchanged.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                The challenge is not that people lack something to say, but that entering this
                expressive ecosystem still requires technical skills, tools, and insider knowledge.
              </p>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-widest text-gray-400">Focus</div>
              <div className="mt-2 text-lg font-semibold">Participation</div>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Lyra lowers the barrier to engagement with a living global medium of expression.
              </p>
            </Card>
          </div>
        </Section>

        {/* Problem */}
        <Section title="The Problem">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-gray-300 leading-relaxed">
                Many people have ideas, perspectives, and emotions they want to express. Yet meaningful
                participation in dominant cultural forms like hip-hop often requires production
                expertise, access to tools, and familiarity with complex workflows.
              </p>
            </Card>
            <Card>
              <p className="text-gray-300 leading-relaxed">
                As a result, a powerful expressive ecosystem exists—but remains inaccessible to many
                who would otherwise contribute to it.
              </p>
            </Card>
          </div>
        </Section>

        {/* Approach */}
        <Section id="approach" title="Our Approach">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="text-xs uppercase tracking-widest text-gray-400">Principle</div>
              <div className="mt-2 text-lg font-semibold">Intent before generation</div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Users first interact with an AI-guided conversational interface that helps clarify what
                they want to express.
              </p>
            </Card>

            <Card>
              <div className="text-xs uppercase tracking-widest text-gray-400">Pipeline</div>
              <div className="mt-2 text-lg font-semibold">Structure → Generate → Share</div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Only after intent is sufficiently articulated does Lyra structure the input and pass it
                into a multi-agent generation pipeline to produce hip-hop beats or full tracks aligned
                with the user’s voice.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Technical complexity is intentionally abstracted to keep the experience intuitive,
                accessible, and expressive.
              </p>
            </Card>
          </div>
        </Section>

        {/* Audience */}
       <Section title="Who Lyra is for (Initial focus)">
      <div className="grid gap-4 md:grid-cols-3">
      <BulletCard text="People with strong opinions, stories, or emotions, but no musical background" />
      <BulletCard text="Hip-hop listeners who want to participate, not just consume" />
      <BulletCard text="Students and emerging creators exploring music as a form of expression" />
      </div>
      </Section>

        {/* Stage */}
        <Section id="stage" title="Current Stage">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <ul className="space-y-3 text-gray-300">
                <li>• Early-stage venture focused on hip-hop as a medium for expression</li>
                <li>• Core team formed (Computer Music + Computer Science)</li>
                <li>• Conversational input + intent-structuring workflow defined</li>
                <li>• Demo development and user validation in progress</li>
              </ul>
            </Card>
            <Card>
              <div className="text-xs uppercase tracking-widest text-gray-400">What’s next</div>
              <div className="mt-2 text-lg font-semibold">Demo → Interviews → Refinement</div>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>• Build a functional demo: conversational input → hip-hop output</li>
                <li>• Conduct user interviews: expression, autonomy, usability</li>
                <li>• Refine workflows: clarity, simplicity, creative control</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Founder */}
        <Section title="About the Founder">
          <Card>
            <p className="text-gray-300 leading-relaxed">
              Chenye Wang is a Computer Music student at the Peabody Institute of Johns Hopkins
              University, with a background in music creation, computational tools, and creative
              project leadership. His work focuses on building systems that expand access to meaningful
              cultural and creative expression.
            </p>
          </Card>
        </Section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  If you’re interested in supporting Lyra—through mentorship, resources, partnerships,
                  or funding—reach out.
                </p>

                <div className="mt-6 space-y-2 text-gray-300">
                  <div>
                    Email:{" "}
                    <a className="text-white hover:underline" href="mailto:cwang263@jh.edu">
                      cwang263@jh.edu
                    </a>{" "}
                    /{" "}
                    <a className="text-white hover:underline" href="mailto:chenyewanggg14@gmail.com">
                      chenyewanggg14@gmail.com
                    </a>
                  </div>
                  <div>
                    LinkedIn:{" "}
                    <a
                      className="text-white hover:underline"
                      href="https://www.linkedin.com/in/chenye-wang-6592b533b"
                      target="_blank"
                      rel="noreferrer"
                    >
                      chenye-wang
                    </a>
                  </div>
                  <div>Website: lyrapro.ai | lyrapro.io</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-xs uppercase tracking-widest text-gray-400">Quick pitch</div>
                <div className="mt-3 text-lg font-semibold">
                  “Hip-hop is the world’s shared language of expression.
                  <br />
                  Lyra makes participation accessible.”
                </div>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  A guided conversational interface turns intent into hip-hop beats or full tracks—so
                  more people can speak through a dominant cultural form.
                </p>
              </div>
            </div>
          </div>

          <div className="py-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Lyra · Johns Hopkins University (Peabody)
          </div>
        </section>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 border-t border-white/10">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="mt-7">{children}</div>
    </section>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 " + className
      }
    >
      {children}
    </div>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs uppercase tracking-widest text-gray-400">{title}</div>
      <div className="mt-2 text-gray-200 leading-relaxed">{text}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-gray-200">
      {children}
    </div>
  );
}

function BulletCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-gray-200 leading-relaxed">{text}</div>
    </div>
  );
}