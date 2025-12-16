export function AboutSection() {
    return (
        <section id="about" className="relative">
            <div className="container-brutal py-[var(--section-pad-y)]">
                <p className="section-label">About</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
                    A bit about me
                </h2>

                <div className="mt-10 rounded-3xl border border-white/12 bg-black/35 p-7 backdrop-blur-md">
          <pre className="whitespace-pre-wrap text-sm leading-6 opacity-85">
{`class Yang {
  roles = ["SDE", "Security", "PM", "Design"];
  focus() { return "Build reliable systems and ship real products."; }
}`}
          </pre>
                    <p className="mt-6 text-sm opacity-75">
                        Replace this with your CV-based summary later (education, experience, tools).
                    </p>
                </div>
            </div>
        </section>
    );
}
