import { StaticImageData } from "next/image"

declare global {

  interface TNavLink {
    id: number
    text: string
    slug: string
  }

  interface Project {
    id: number,
    thumbnail: StaticImageData,
    title: string,
    description: string,
    techStacks: TooltipItem[],
    previewLink: string,
    githubLink: string,
    isFeatured?: boolean
  }

  interface TooltipItem {
    id: number;
    name: string;
    designation: string;
    image: string;
  }

  interface Certificate {
    slug: string,
    name: string,
    link: string,
    fileLink: string
    thumbnail: string,
    provider: {
      name: string,
      icon: string
    },
    featured?: boolean
  }
}
