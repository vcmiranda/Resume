/**
 * The site reads as one page, so the header navigates to anchors on '/'.
 * The standalone routes (/work, /about, /resume) still exist and are still
 * prerendered — they are just not the primary path through the site.
 */
export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const
