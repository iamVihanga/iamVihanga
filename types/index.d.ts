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
    githubLink: string
  }

  interface TooltipItem {
    id: number;
    name: string;
    designation: string;
    image: string;
  }
}
