export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <header className="flex items-center justify-between text-sm text-gray-400">
          <div className="tracking-widest">LYRA</div>
          <div>lyrapro.ai · lyrapro.io</div>
        </header>

        {/* Hero */}
        <section className="mt-20">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-400">
            An AI Hip-Hop Platform for Cultural Participation
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Lowering the barrier
            <br />
            to cultural participation.
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
            Lyra is the first AI music platform incubated at Johns Hopkins University to focus
            exclusively on democratizing hip-hop creation as a form of cultural participation.
          </p>
        </section>

        {/* What is Lyra */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">What is Lyra</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Lyra enables more people to participate in hip-hop as a global language of expression.
              Through a guided, conversational experience, ideas, emotions, images, or words are
              transformed into music—without requiring formal musical or technical training.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Why Hip-Hop</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Hip-hop already functions as a shared cultural space where identity, emotion, and
              perspective are exchanged at massive scale. Lyra does not invent a new voice—it lowers
              the barrier to participation in an existing global ecosystem.
            </p>
          </div>
        </section>

        {/* Method */}
        <section className="mt-20 border-t border-white/10 pt-14">
          <h2 className="text-2xl font-semibold">
            Lowering the Barrier Without Losing Professional Value
          </h2>
          <p className="mt-6 max-w-3xl text-gray-300 leading-relaxed">
            Lyra separates expression from technical execution. Professional knowledge is not
            delivered as critique or evaluation, but embedded into the system’s guiding logic,
            constraints, and feedback structure.
          </p>
          <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
            This allows users without musical training to create meaningful work while preserving
            creative quality and cultural integrity.
          </p>
        </section>

        {/* Impact */}
        <section className="mt-20 border-t border-white/10 pt-14">
          <h2 className="text-2xl font-semibold">Why This Matters</h2>
          <p className="mt-6 max-w-3xl text-gray-300 leading-relaxed">
            Hip-hop is one of the most globally influential expressive languages, especially among
            younger generations. The limitation today is access. Meaningful participation in dominant
            cultural forms still requires tools, skills, and insider knowledge that many people lack.
          </p>
          <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
            By lowering the barrier to participation—without flattening expression into generic
            outputs—Lyra expands who gets to speak within a major cultural conversation, enabling
            broader creative agency and more diverse perspectives.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-10 text-sm text-gray-400">
          <div>
            Founder: <span className="text-gray-200">Chenye Wang</span>
          </div>
          <div className="mt-2">
            Computer Music · Peabody Institute · Johns Hopkins University
          </div>
          <div className="mt-4">
            Email:&nbsp;
            <a className="text-gray-200 hover:underline" href="mailto:cwang263@jh.edu">
              cwang263@jh.edu
            </a>
            &nbsp;/&nbsp;
            <a className="text-gray-200 hover:underline" href="mailto:chenyewanggg14@gmail.com">
              chenyewanggg14@gmail.com
            </a>
          </div>
          <div className="mt-2">
            LinkedIn:&nbsp;
            <a
              className="text-gray-200 hover:underline"
              href="https://www.linkedin.com/in/chenye-wang-6592b533b"
              target="_blank"
              rel="noreferrer"
            >
              chenye-wang
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}