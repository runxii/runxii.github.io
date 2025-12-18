export function AboutSection() {
    return (
        <section id="about" className="relative">
            <div className="container-brutal py-[var(--section-pad-y)]">
                <p className="section-label">About</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
                    A bit about me
                </h2>

                <div className="mt-10 rounded-3xl border border-white/12 bg-black/40 p-5 sm:p-7 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                  <pre className="overflow-x-auto whitespace-pre text-[13px] sm:text-sm leading-6">
                    <code className="font-mono text-white/85">
                      <span className="text-green-500">class</span>{" "}
                        <span className="text-sky-300">Yang</span>{" "}
                        {"{\n"}
                        {"  "}
                        <span className="text-sky-300">roles</span>{" "}
                        <span className="text-white/60">=</span>{" "}
                        <span className="text-white/85">[</span>
                      <span className="text-amber-200">"SDE"</span>
                      <span className="text-white/60">, </span>
                      <span className="text-amber-200">"Security"</span>
                      <span className="text-white/60">, </span>
                      <span className="text-amber-200">"PM"</span>
                      <span className="text-white/60">, </span>
                      <span className="text-amber-200">"Design"</span>
                      <span className="text-white/85">];</span>
                        {"\n\n"}
                        {"  "}
                        <span className="text-sky-300">focus</span>
                      <span className="text-white/85">()</span>{" "}
                        {"{ "}
                        <span className="text-green-500">return</span>{" "}
                        <span className="text-amber-200">"Build reliable systems and ship real products."</span>
                      <span className="text-white/85">;{"}"}</span>
                        {"\n\n"}
                        {"  "}
                        <span className="text-sky-300">education</span>{" "}
                        <span className="text-white/60">=</span>{" "}
                        <span className="text-white/85">[</span>
                        {"\n    "}
                        <span className="text-white/85">[</span>
                      <span className="text-amber-200">"M.Sc, Interactive Digital Media"</span>
                      <span className="text-white/60">, </span>
                      <span className="text-amber-200">"Trinity College Dublin"</span>
                      <span className="text-white/60">, </span>
                      <span className="text-amber-200">"2024–2025"</span>
                      <span className="text-white/85">],</span>
                        {"\n    "}
                        <span className="text-white/85">[</span>
                      <span className="text-amber-200">"B.Eng, Information Security"</span>
                      <span className="text-white/60">, </span>
                      <span className="text-amber-200">"Nankai University"</span>
                      <span className="text-white/60">, </span>
                      <span className="text-amber-200">"2020–2024"</span>
                      <span className="text-white/85">]</span>
                        {"\n  "}<span className="text-white/85">];</span>
                        {"\n"}{"}"}
                    </code>
                  </pre>
                </div>

            </div>
        </section>
    );
}
