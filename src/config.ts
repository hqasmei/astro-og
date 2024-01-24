export const SITE = {
  title: "Astro OG",
  description: "Astro OG tester",
};

export const OPEN_GRAPH = {
  image: {
    src: "images/og-image.png",
    alt: "Astro OG",
  },
  twitter: "hqasmei",
};

// This is the type of the frontmatter you put in the docs markdown files.
export interface Frontmatter {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  ogLocale?: string;
}
