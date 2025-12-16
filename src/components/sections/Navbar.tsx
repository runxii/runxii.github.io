import { NAV } from "@/config/site";

export function Navbar() {
    return (
        <header className="absolute top-0 left-3/4 sm:left-0 right-0 z-20 px-10 py-5 w-1/4 sm:w-full">
            <nav className="flex justify-end items-center
          flex-wrap md:flex-nowrap
          gap-x-6 gap-y-4 md:gap-y-0
          text-xs sm:text-sm
          uppercase">
                {NAV.map((item) => (
                    <a
                        key={item.key}
                        href={item.href}
                        className="opacity-70 hover:opacity-100 font-normal hover:font-bold transition-all duration-200 ease-in-out"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
