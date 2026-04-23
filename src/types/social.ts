export type SocialPlatform = 'github' | 'linkedin' | 'email'

export interface SocialLink {
  platform: SocialPlatform
  href: string
  label: string
}
