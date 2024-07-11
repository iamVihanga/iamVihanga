import Link from 'next/link';
import React from 'react'
import { BiLogoLinkedin, BiLogoInstagram, BiLogoFacebook, BiLogoGithub, BiLogoTwitter } from 'react-icons/bi'
import { FaXTwitter } from "react-icons/fa6";
import { Button } from '../ui/button';

type Socials = 'Facebook' | 'Instagram' | 'LinkedIn' | 'Github' | 'Twitter' | 'X';

type Props = {
  social: Socials
  color: string,
  iconSize: number,
  link: string
}

export default function SocialIcon({ color, social, iconSize, link }: Props) {
  return (
    <Button variant={'outline'} className='w-full py-3 h-full rounded-sm border border-black dark:border-white'>
      <Link href={link} target='_blank' className='flex flex-col items-center justify-center'>
        <>
          {social === 'Facebook' && <BiLogoFacebook size={iconSize} className={''} />}
          {social === 'Instagram' && <BiLogoInstagram size={iconSize} className={''} />}
          {social === 'LinkedIn' && <BiLogoLinkedin size={iconSize} className={''} />}
          {social === 'Github' && <BiLogoGithub size={iconSize} className={''} />}
          {social === 'Twitter' && <BiLogoTwitter size={iconSize} className={''} />}
          {social === 'X' && <FaXTwitter size={iconSize} className={''} />}

          <p className="text-xs text-neutral-500 mt-0.5 dark:text-neutral-400">{social === 'X' ? 'Twitter (X)' : social}</p>
        </>
      </Link>
    </Button>
  )
}