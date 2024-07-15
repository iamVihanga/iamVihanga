import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'

type Props = {}

export default function Footer({ }: Props) {
  return (
    <div className="">
      {/* Section 01 - Hero */}
      <div className="sm:h-[50vh] h-[30vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.1] relative flex flex-col">
        <div className="z-20 standard-container py-6 sm:py-12">
          <div className="w-full flex items-center justify-between">
            <div className="">
              <h1 className='font-black text-4xl sm:text-6xl'>Say Hello 👋</h1>
              <p className='font-semibold text-xl sm:text-3xl mt-1 opacity-80'>vihanga@codeville.uk</p>
            </div>

            <div className="hidden sm:flex w-40 h-14">
              <Button variant={'solid'} size={'solid'} className='flex gap-x-1 items-center bg-black dark:bg-white w-full h-full text-neutral-200 dark:text-neutral-700'>
                Let's Talk
                <ArrowUpRight size={17} />
              </Button>
            </div>
          </div>

          <div className="border-t my-8 border-neutral-600 dark:border-neutral-300 w-full" />

          <p className='sm:text-left text-center font-semibold text-xs'>{`Copyright @${new Date().getFullYear()} Vihanga Silva`}</p>
        </div>

        <div className='z-10 absolute w-full h-[5vh] sm:h-[20vh] top-0 left-0 bg-gradient-to-b dark:from-black/60 from-white/60 dark:to-black/0 to-white/0' />
        <div className='z-10 absolute w-full h-[20vh] sm:h-[50vh] bottom-0 left-0 bg-gradient-to-t dark:from-black from-white/80 dark:to-black/20 to-white/0' />
      </div>
    </div>
  )
}