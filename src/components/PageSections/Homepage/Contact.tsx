import { GlobeDemo } from '@/components/Global/GlobeDemo'
import { WobbleCard } from '@/components/aceternity/wobble-card'
import { Button } from '@/components/ui/button'
import { SocialsList } from '@/lib/socials'
import Link from 'next/link'
import React from 'react'
import ContactFormHome from '@/components/Global/ContactFormHome'

type Props = {}

export default function ContactSection({ }: Props) {
  return (
    <div id='contact' className='h-fit standard-container py-20'>
      <h1 className='font-black text-5xl sm:text-7xl uppercase'>
        <span>{`🚀 Let's Work `}</span>
        <span className='text-neutral-700'>{`Together`}</span>
      </h1>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[400px] sm:min-h-[300px]"
          className="py-16"
        >
          <div className="max-w-lg">
            <h2 className="text-left text-balance text-xl sm:text-2xl font-semibold tracking-[-0.015em] text-white">
              Connect with my Socials
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Im actively engaging with my every socials and Im posting many contents about various topics such as Web Developing, Programming and More...
            </p>

            <div className="relative h-12 mt-6 ">
              <div className="absolute flex items-center flex-wrap gap-3 z-10">
                {SocialsList.map(social => (
                  <Button key={social.id} asChild size={'icon'} variant={'outline'} className='group cursor-pointer border-transparent bg-pink-900/60 hover:bg-pink-900 w-12 h-12 text-pink-200 group-hover:text-pink-50'>
                    <Link href={social.link} target='_blank'>
                      <social.icon size={23} />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] relative overflow-hidden"
          className='flex flex-col p-0'
        >
          <div className="flex-1 py-10 px-4 sm:px-2">
            <h2 className='font-semibold text-xl sm:text-2xl text-white'>Timezone Flexibility</h2>
            <p className="mt-1 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              I can work remotely with my clients from any regions all around the world !
            </p>
          </div>
          <div className="h-1/3 px-2">
            <div className="absolute size-full right-0 -bottom-1/3">
              <GlobeDemo />
            </div>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[550px] sm:min-h-[300px]" className='flex items-center flex-col sm:flex-row gap-6'>
          <div className="max-w-sm">
            <h2 className="text-left text-balance text-xl sm:text-2xl font-semibold tracking-[-0.015em] text-white">
              Leave me a Email with brief of your Exclusive idea & Let's bring it to the Real World Together !
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Im so excited to read feedbacks you sent me ! Don't forget submit your Idea 🚀
            </p>
          </div>

          <div className="relative min-h-44 w-full">
            <div className="absolute w-full h-full z-20 ">
              <ContactFormHome />
            </div>
          </div>
        </WobbleCard>
      </div>


    </div>
  )
}