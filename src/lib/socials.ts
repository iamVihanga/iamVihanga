import { IconType } from "react-icons/lib"
import { SiDiscord, SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiX } from "react-icons/si"

interface SocialT {
  id: number
  name: string
  link: string
  icon: IconType
}

export const SocialsList: SocialT[] = [
  { id: 4, name: "LinkedIn", icon: SiLinkedin, link: "https://www.linkedin.com/in/iamvihangasilva" },
  { id: 3, name: "Twitter / X", icon: SiX, link: "https://x.com/de_vihanga" },
  { id: 2, name: "Instagram", icon: SiInstagram, link: "https://www.instagram.com/vihanga.de.silva" },
  { id: 1, name: "Facebook", icon: SiFacebook, link: "https://www.facebook.com/vihangarashansilva/" },
  { id: 1, name: "Discord", icon: SiDiscord, link: "https://discord.com/users/codeville_uk_93731" },
  { id: 5, name: "Whatsapp", icon: SiWhatsapp, link: "https://wa.me/94705848028" },
  { id: 5, name: "Github", icon: SiGithub, link: "https://github.com/iamVihanga" },
]