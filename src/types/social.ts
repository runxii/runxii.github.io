export type SocialPlatform = "github" | "linkedin" | "email";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  label: string;
};