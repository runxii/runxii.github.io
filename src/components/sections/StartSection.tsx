import { TypewriterName } from "@/components/ui/TypewriterName";

export function StartSection() {
    return (
        <section id="start" className="relative min-h-dvh px-6">
            <div className="mx-auto flex min-h-dvh max-w-6xl items-end pb-15 pt-24">
                <div className="w-full">

                    <h1 className="font-serif mt-60 sm:mt-30 text-[4em] sm:text-[12vw] md:text-[8em] font-extrabold leading-[1] tracking-[-0.05em]">
                        Hi, I’m&nbsp;
                        <span className="visible sm:hidden"><br/></span>
                        <TypewriterName text={"Yang"}/>
                        <br/>
                        And I work as a…
                    </h1>
                </div>
            </div>
        </section>
    );
}
