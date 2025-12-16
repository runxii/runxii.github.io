import { GrainBackdrop } from "@/components/backdrop/GrainBackdrop";
import { Navbar } from "@/components/sections/Navbar";
import { FooterLinks } from "@/components/sections/FooterLinks";
import { RoleBodyAttr } from "@/components/identity/RoleBodyAttr";
import { WorkPageClient } from "@/components/Work/WorkPageClient";

export default function WorkPage() {
    return (
        <main className="relative min-h-dvh bg-black text-white">
            <RoleBodyAttr />
            <GrainBackdrop />
            <Navbar />
            <WorkPageClient />
            <FooterLinks />
        </main>
    );
}
