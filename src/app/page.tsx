import { GrainBackdrop } from "@/components/backdrop/GrainBackdrop";
import { StartSection } from "@/components/sections/StartSection";
import { Navbar } from "@/components/sections/Navbar";
import { FooterLinks } from "@/components/sections/FooterLinks";
import { RoleBodyAttr } from "@/components/identity/RoleBodyAttr";

export default function HomePage() {
    return (
        <main className="relative min-h-dvh bg-black text-white">
            <RoleBodyAttr />
            <GrainBackdrop />
            <Navbar />
            <StartSection />
            <FooterLinks />
        </main>
    );
}
