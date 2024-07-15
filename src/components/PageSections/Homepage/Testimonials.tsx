import Image from 'next/image'
import React from 'react'
import duberIconAndTextLight from '../../../../public/images/duberIconAndText-Light.png'
import duberIconAndTextDark from '../../../../public/images/duberIconAndText-Dark.png'
import TestimonialImg from '../../../../public/images/Testimonial.jpg'
import { QuoteIcon } from 'lucide-react'

type Props = {}

export default function Testimonials({ }: Props) {
  return (
    <div id='testimonials' className="relative overflow-hidden h-screen sm:h-[80vh] bg-[#E7E7E7] 
    dark:bg-[#ffffff10] sm:dark:bg-[#ffffff09] w-full standard-container py-16 flex flex-col sm:flex-row">
      <QuoteIcon
        className='absolute -top-16 -left-4 text-transparent fill-neutral-400/30 dark:fill-[#ffffff05] rotate-180'
        size={300}
      />

      <div className="z-30 sm:flex-1 flex flex-col">
        <div className="flex-1">
          <h1 className='font-black uppercase text-neutral-800 dark:text-neutral-200 text-4xl sm:text-6xl'>Testimonials</h1>

          <p className='mt-8 text-sm font-normal text-neutral-600 dark:text-neutral-300'>
            {`Amazing work ! Dedicated to my project which is great - `}<span className='font-bold text-neutral-600 dark:text-neutral-100'>Duber Customer App</span>
          </p>

          <p className="mt-3 text-sm font-normal text-neutral-600 dark:text-neutral-300">
            {`
              "Great frontend and backend developer, really takes the time to understand what I wanted and far exceeded expectations. The app required technology he was not familiar with and took the time to learn them. Highly recommended" - 
            `} <span className='font-bold text-neutral-600 dark:text-neutral-100'>Duber Pilot App</span>
          </p>
        </div>

        <div className="sm:mt-0 mt-12">
          {/* Company Logo */}
          <Image className='flex dark:hidden w-36 sm:w-48' src={duberIconAndTextLight} width={300} alt='#' />
          <Image className='hidden dark:flex w-36 sm:w-48' src={duberIconAndTextDark} width={300} alt='#' />

          <div className="mt-1 sm:mt-3 flex items-center gap-x-2">
            <h2 className='text-base sm:text-lg font-bold uppercase text-neutral-800 dark:text-neutral-200'>
              {`Jaime C. Harris`}
            </h2>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm">
              {`( CEO of Duber LTD - UK )`}
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mt-0 mt-8 w-80 h-[40vh] sm:h-full bg-neutral-300 dark:bg-white/10 rounded-sm overflow-hidden opacity-100 dark:opacity-80">
        <Image src={TestimonialImg} alt='Duber' width={320} height={400} className='w-full h-full object-cover' />
      </div>
    </div>
  )
}