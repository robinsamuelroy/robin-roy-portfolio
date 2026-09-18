export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/robinroy" },
  { label: "LinkedIn", href: "https://linkedin.com/in/robinroy" },
  { label: "Email", href: "mailto:robinroy.engineer@gmail.com" },
];

export const siteMeta = {
  name: "Robin Roy",
  role: "Full-stack engineer",
  location: "Sharjah, UAE",
} as const;