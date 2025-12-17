import { Navbar } from "@/components/sections/Navbar";
import { FooterLinks } from "@/components/sections/FooterLinks";
import { RoleBodyAttr } from "@/components/identity/RoleBodyAttr";

export function PageShell({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative min-h-dvh bg-black text-white">
            <RoleBodyAttr />

            <Navbar />

            <div className="relative z-10">{children}</div>

            <div className="relative z-10 pb-10 pt-16">
                <FooterLinks />
            </div>
        </main>
    );
}
