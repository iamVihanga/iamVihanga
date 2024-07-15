import React from 'react'
import { type ServiceSkillT } from '@/lib/skillsData'
import Image from 'next/image'

type Props = { service: ServiceSkillT }

export default function ServiceCard({ service }: Props) {
  return (
    <div className="w-full p-11 border border-neutral-900 dark:border-neutral-400 rounded flex items-center justify-center flex-col cursor-pointer   hover:border-transparent  hover:dark:border-transparent group bg-neutral-100 dark:bg-neutral-950 hover:bg-limeFlucent hover:dark:bg-limeFlucent duration-150">
      {service.iconImg && (
        <div className="">
          <Image className='hidden dark:flex w-16 group-hover:dark:hidden' src={service.iconImg?.dark!} alt='icon' />
          <Image className='flex dark:hidden w-16 group-hover:dark:flex' src={service.iconImg?.light!} alt='icon' />
        </div>
      )}

      <p className='text-lg font-semibold text-neutral-900 dark:text-neutral-200 mt-5 group-hover:text-neutral-950'>{service.title}</p>
      <p className='text-sm font-normal text-neutral-600 dark:text-neutral-400 mt-1 text-center group-hover:text-neutral-800'>{service.description}</p>
    </div>
  )
}