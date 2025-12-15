import { IdentitySwitch } from "@/components/identity/IdentitySwitch";

export function StartSection() {
    return (
        <section id="start" className="relative min-h-dvh px-6">
            <div className="mx-auto flex min-h-dvh max-w-6xl items-end pb-28 pt-24">
                <div className="w-full">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] opacity-70">
                        Portfolio
                    </p>

                    <h1 className="mt-6 text-[12vw] font-extrabold leading-[0.84] tracking-[-0.04em] md:text-[92px]">
                        Hi, I’m Yang.
                        <br />
                        And I do…
                    </h1>

                    <IdentitySwitch />
                </div>
            </div>
        </section>
    );
}
