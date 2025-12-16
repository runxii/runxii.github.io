export const SITE = {
    name: "Yang Liu",
    title: "Yang Portfolio",
    description: "Portfolio of Yang (SDE / Security / PM / Design).",
    links: {
        email: "liuy42@tcd.ie",
        github: "https://github.com/runxii",
        linkedin: "https://www.linkedin.com/in/yangxii",
    },
} as const;

export const NAV = [
    { key: "start", label: "Start />", href: "/#start" },
    { key: "work", label: "work />", href: "/#work" },
    { key: "lab", label: "Lab />", href: "/#lab" },
    { key: "about", label: "About />", href: "/#about" },
    { key: "contact", label: "Contact />", href: "/#contact" },
] as const;
