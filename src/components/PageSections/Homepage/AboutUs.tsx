'use client';
import React, { useState } from 'react'
import { AboutMe_Paragraphs } from '@/lib/constants';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DuberIcon from '../../../../public/images/Duber Icon.png'
import Image from 'next/image';
import SocialIcon from '@/components/Global/SocialIcon';
import Link from 'next/link';
import { SocialsList } from '@/lib/socials';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useToast } from '@/components/ui/use-toast';

type Props = {}

export default function AboutUs({ }: Props) {
  const email = "vihanga@codeville.uk";
  const [copied, setCopied] = useState<boolean>(false);
  const { toast } = useToast()

  const handleCopy = () => {
    setCopied(true);

    toast({
      title: "Congratulations.! Email copied to clipboard",
      description: "Don't forget to leave me an email for me 🚀",
    })
  }

  return (
    <div id='about' className="sm:h-fit h-fit py-5 sm:py-20">
      <div className="w-full sm:py-8 py-1 standard-container grid sm:grid-cols-5 grid-cols-1 ">
        <div className="w-full border-0 sm:border-r border-black dark:border-white/20 col-span-3 pr-8">
          <h1 className='text-5xl sm:text-8xl text-center sm:text-left uppercase font-bold text-neutral-600'><span className='font-black text-black dark:text-white'>Who</span> am I</h1>

          <p className="mt-5 text-sm sm:text-base text-neutral-800 dark:text-neutral-400">
            {AboutMe_Paragraphs[0]}
          </p>

          <p className="mt-5 text-sm sm:text-base text-neutral-800 dark:text-neutral-400">
            {AboutMe_Paragraphs[1]}
          </p>

          <p className="mt-9 text-lg font-bold text-black dark:text-white">Are you willing to start your project with me ?</p>

          <div className="mt-4">
            <CopyToClipboard text={email} onCopy={handleCopy}>
              <Button
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-none border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400/25 focus:ring-offset-1 focus:ring-offset-slate-50"
              >
                {copied ? "Email Copied to Clipboard" : "Copy my Email to Clipboard"}
              </Button>
            </CopyToClipboard>

            <Button asChild variant={"solid"} size={"solid"} className='hidden sm:inline-flex h-12 bg-white text-black ml-2 border border-black dark:border-white'>
              <Link href="/resume.pdf" target="_blank">
                Download CV
              </Link>
            </Button>
          </div>
        </div>

        <div className="col-span-2 pl-0 sm:pl-8 mt-4 sm:mt-0">
          <div className="grid grid-cols-4 gap-3">
            {/* Card - University */}
            <div className="col-span-4 rounded-sm border border-black dark:border-white p-4 flex items-center gap-x-5">
              <GraduationCap size={42} className='text-black dark:text-white' />
              <div className="flex-1">
                <p className='font-bold text-black dark:text-white text-base sm:text-lg'>B.Tech in Software Technology</p>
                <p className='mt-0.5 font-medium text-neutral-500 text-xs sm:text-sm'>University of Vocational Technology, Sri Lanka</p>
                <p className='font-normal text-neutral-700 text-[9px] sm:text-xs'>From May of 2023 - Present</p>
              </div>
            </div>

            {/* Card - Company */}
            <div className="col-span-4 rounded-sm border border-black dark:border-white p-4 flex items-center gap-x-5">
              <div className="">
                <Image src={DuberIcon} alt='Duber LTD duber.uk jaime harris' width={60} height={60} className='w-12' />
              </div>
              <div className="flex-1">
                <p className='font-bold text-black dark:text-white text-base sm:text-lg'>Full Stack Software Developer</p>
                <p className='mt-0.5 font-medium text-neutral-500 text-xs sm:text-sm'>{`Duber LTD - United Kingdom`}</p>
                <p className='font-normal text-neutral-700 text-[9px] sm:text-xs'>From Sept. of 2022 - Present</p>
              </div>
            </div>

            {/* Cards - Experience and Projects */}
            <div className="col-span-2 rounded-sm border border-black dark:border-white p-4 flex items-center justify-center flex-col">
              <h2 className='text-black dark:text-white font-black text-5xl'>4+</h2>
              <p className='text-sm text-neutral-600 dark:text-neutral-500'>Years of</p>
              <p className='text-base text-neutral-900 dark:text-neutral-300'>Experience</p>
            </div>
            <div className="col-span-2 rounded-sm border border-black dark:border-white p-4 flex items-center justify-center flex-col">
              <h2 className='text-black dark:text-white font-black text-5xl'>4+</h2>
              <p className='text-sm text-neutral-600 dark:text-neutral-500'>Years of</p>
              <p className='text-base text-neutral-900 dark:text-neutral-300'>Experience</p>
            </div>

            {/* Social Cards */}
            <SocialIcon
              link={SocialsList.filter(social => social.name === 'Github')[0].link}
              social='Github'
              color='blue'
              iconSize={32}
            />
            <SocialIcon
              link={SocialsList.filter(social => social.name === 'LinkedIn')[0].link}
              social='LinkedIn'
              color='blue'
              iconSize={32}
            />
            <SocialIcon
              link={SocialsList.filter(social => social.name === 'Twitter / X')[0].link}
              social='X'
              color='blue'
              iconSize={32}
            />
            <SocialIcon
              link={SocialsList.filter(social => social.name === 'Instagram')[0].link}
              social='Instagram'
              color='blue'
              iconSize={32}
            />

          </div>
        </div>
      </div>
    </div>
  )
}