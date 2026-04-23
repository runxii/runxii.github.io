import type { SocialLink } from '@/types/social'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  links: SocialLink[]
}

function SocialIcon({ platform }: { platform: SocialLink['platform'] }) {
  switch (platform) {
    case 'github':
      return <Github size={24} strokeWidth={2} className="text-white" />
    case 'email':
      return <Mail size={24} strokeWidth={2} className="text-white" />
    case 'linkedin':
      return <Linkedin size={24} strokeWidth={2} className="text-white" />
    default:
      return null
  }
}

export default function Footer({ links }: FooterProps) {
  return (
    <footer id="contact" className="pb-20 pt-8">
      <div className="mx-auto flex w-full items-center justify-center gap-4 px-5">
        {links.map(link => (
          <Link
            key={`${link.platform}-${link.href}`}
            href={link.href}
            target={link.platform === 'email' ? undefined : '_blank'}
            rel={link.platform === 'email' ? undefined : 'noreferrer'}
            aria-label={link.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/80 transition ease-in-out hover:scale-105 hover:opacity-50"
          >
            <SocialIcon platform={link.platform} />
          </Link>
        ))}
      </div>
    </footer>
  )
}
