import { IdentitySwitch } from "@/components/identity/IdentitySwitch";

export function StartSection() {
    return (
        <section id="start" className="relative min-h-dvh px-6">
            <div className="mx-auto flex min-h-dvh max-w-6xl items-end pb-44 pt-24">
                <div className="w-full">

                    <h1 className="mt-5 text-[12vw] font-extrabold leading-[0.84] tracking-[-0.05em] md:text-[8em]">
                        Hi, I’m Yang.
                        <br/>
                        And I work as a…
                    </h1>

                    <IdentitySwitch/>
                </div>
            </div>
        </section>
    );
}
