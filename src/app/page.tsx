import { Spotlight } from '@/components/aceternity/Spotlight'
import { FlipWords } from '@/components/aceternity/flip-words';
import { HoverBorderGradient } from '@/components/aceternity/hover-border-gradient'
import { Button } from '@/components/ui/button';
import { ArrowDownToDot, MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'
import ProfilePic from '../../public/images/profile.png'
import AboutUsSection from '@/components/PageSections/Homepage/AboutUs'
import PortfolioSection from '@/components/PageSections/Homepage/Portfolio'

export default function Home() {
  return (
    <div className="" id='home'>
      {/* Section 01 - Hero */}
      <div className="sm:h-screen h-[80vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center pt-14 sm:px-28 px-4 gap-12">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white sm:[mask-image:radial-gradient(ellipse_at_right,transparent_10%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <Spotlight />

        {/* Content Goes Here */}

        {/* <img src="images/profile.png" className='sm:flex hidden w-80 h-[80%] rounded-lg object-cover dark:brightness-[.7] dark:hover:brightness-95 duration-150' alt="" /> */}
        <div className="relative sm:flex hidden w-80 h-3/4 rounded-lg overflow-hidden">
          <Image
            src={ProfilePic}
            alt="Vihanga Silva (Vihanga Rashan Silva)"
            width={400}
            height={600}
            className='absolute sm:flex hidden -translate-y-5 dark:brightness-[.7] dark:hover:brightness-95 duration-150'
          />
        </div>

        <div className="flex-1">
          <HoverBorderGradient className='bg-white dark:bg-black text-black dark:text-white text-sm' >
            Hello, Im Vihanga Silva
          </HoverBorderGradient>

          <h1 className='mt-3 font-extrabold sm:text-6xl text-4xl leading-[1.3]'>
            Let me &nbsp;
            <FlipWords className='font-black' words={['Build', 'Design', 'Manage']} /> <br />
            Your Project Idea With <br />
            Latest Tech Stacks
          </h1>

          <p className="mt-2">{`Im Full Stack Developer based on JavaScript Frameworks & essential Programming practices, with more than 2+ Years of Industrial Experiences !`}</p>

          <div className="relative mt-7 h-12">
            <div className="absolute z-40 flex items-center">
              <Button asChild size={"solid"} variant={"solid"} className='h-12 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'>
                <Link href={'#'} className='flex flex-row gap-x-2'>
                  Download CV
                  <ArrowDownToDot size={17} />
                </Link>
              </Button>
              <Button asChild size={"solid"} variant={"solid"} className='h-12 bg-white dark:bg-black/50 text-black dark:text-white border border-neutral-500'>
                <Link href={'/projects'} className='flex flex-row gap-x-2'>
                  Featured Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 02 - About */}
      <AboutUsSection />

      {/* Section 03 - Portfolio */}
      <PortfolioSection />
    </div>
  );
}
