export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export const contactHeading = "Let's talk";

export const contactIntro =
  "Open to full-stack development and AI engineering roles in the UAE. Fastest way to reach me is email, and I usually reply within a day.";

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "robinroy.engineer@gmail.com",
    href: "mailto:robinroy.engineer@gmail.com",
  },
  {
    label: "Phone",
    value: "+971 50 924 9267",
    href: "tel:+971509249267",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/robinroy/",
    href: "https://www.linkedin.com/in/robinroy/",
  },
  {
    label: "Location",
    value: "Sharjah, UAE",
    href: "",
  },
];

/**
 * Formspree endpoint. Swap in your own form ID, or set VITE_FORM_ENDPOINT
 * in .env.local and this falls back to it.
 */
export const formEndpoint =
  import.meta.env.VITE_FORM_ENDPOINT ?? "https://formspree.io/f/mwleqppl";