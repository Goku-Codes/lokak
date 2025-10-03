// app/hackathon/page.tsx
export default function HackathonPage() {
  return (
    <div className="container-x section">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Utopian Space Global Hackathon-26</h1>
        <p className="mt-3 text-lg text-neutral-300">72 Hours. Global Teams. Humanity&apos;s Challenges. Your Solutions.</p>
        <p className="mt-1 text-neutral-400">AI-for-Humanity: Innovating for Global Well-being</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">The Innovation Engine of Lokakṣema 2026</h2>
        <p className="text-neutral-200">
          While the summit convenes leaders for dialogue and strategy, the hackathon generates practical, deployable AI solutions
          addressing humanity&apos;s most urgent challenges.
        </p>
        <p className="text-neutral-200">
          <strong>Our Promise:</strong> Top projects receive funding, incubator support, and pilot deployment partnerships.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Four Tracks, Infinite Impact</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {[
            ["Health & Biomedicine", "Diagnostics in resource-limited settings, predictive healthcare, mental health tools."],
            ["Climate & Agriculture", "Climate prediction, precision agriculture, water optimization, renewables."],
            ["Public Safety & Humanitarian Response", "Disaster prediction, cybersecurity, humanitarian logistics."],
            ["Open Innovation", "Bold ideas pushing boundaries for social good."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-white/10 bg-black/40 p-6">
          <h3 className="font-semibold">Designed for Excellence</h3>
          <ul className="mt-3 text-neutral-300 list-disc list-inside space-y-1">
            <li>Open to 18+, teams of 2–5</li>
            <li>72 hours in parallel with summit</li>
            <li>Hybrid: on-site + global remote</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/40 p-6">
          <h3 className="font-semibold">What You&apos;ll Submit</h3>
          <ul className="mt-3 text-neutral-300 list-disc list-inside space-y-1">
            <li>Code repository (MIT/Apache 2.0)</li>
            <li>Max 6-page technical paper</li>
            <li>3–5 minute demo video</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/40 p-6">
          <h3 className="font-semibold">Judging & Prizes</h3>
          <ul className="mt-3 text-neutral-300 list-disc list-inside space-y-1">
            <li>Global jury of 15–20</li>
            <li>Up to $100,000 + compute credits</li>
            <li>Incubator fast-track & pilot partnerships</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
