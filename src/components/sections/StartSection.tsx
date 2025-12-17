import { IdentitySwitch } from "@/components/identity/IdentitySwitch";

export function StartSection() {
    return (
        <section id="start" className="relative min-h-dvh px-6">
            <div className="mx-auto flex min-h-dvh max-w-6xl items-end pb-15 pt-24">
                <div className="w-full">

                    <h1 className="font-serif mt-60 sm:mt-30 text-[4em] sm:text-[12vw] md:text-[8em] font-extrabold leading-[0.95] tracking-[-0.05em]">
                        Hi, I’m Yang.
                        <br/>
                        And I work as a…
                    </h1>

                    {/*<IdentitySwitch/>*/}
                </div>
            </div>
        </section>
    );
}
