import { GrainBackdrop } from "@/components/backdrop/GrainBackdrop";
import { Navbar } from "@/components/sections/Navbar";
import { FooterLinks } from "@/components/sections/FooterLinks";
import { RoleBodyAttr } from "@/components/identity/RoleBodyAttr";

export function PageShell({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative min-h-dvh bg-black text-white">
            <RoleBodyAttr />
            <GrainBackdrop />
            <Navbar />

            {/* content */}
            <div className="relative z-10">{children}</div>

            {/* footer sits after content, not absolute */}
            <div className="relative z-10 pb-10 pt-16">
                <FooterLinks />
            </div>
        </main>
    );
}
