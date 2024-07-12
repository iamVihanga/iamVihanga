'use client';

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { AnimatedTooltip } from '../aceternity/animated-tooltip'
import { useTheme } from 'next-themes'
import { renderTooltipItems } from '@/lib/constants';

type Props = { className?: string, project: Project }

export default function ProjectCard({ className, project }: Props) {
  const { theme } = useTheme()
  const [tooltipItems, setTooltipItems] = useState<TooltipItem[] | []>([]);

  useEffect(() => {
    if (theme) {
      setTooltipItems(renderTooltipItems(project.techStacks, theme))
    } else {
      setTooltipItems(renderTooltipItems(project.techStacks, 'light'))
    }
  }, [theme])


  return (
    <div className={cn("group cursor-pointer w-full h-full rounded-sm border border-neutral-400/60 dark:border-neutral-700 bg-neutral-100/70 dark:bg-neutral-950 p-2", className)}>
      <div className="flex flex-col">
        <div className="w-full rounded-sm h-56 bg-neutral-600 overflow-hidden">
          <Image src={project.thumbnail} alt='#' className='w-full h-full object-cover' width={400} height={300} objectFit='cover' />
        </div>

        <div className="flex-1">
          <p className='mt-3 text-2xl font-bold text-black dark:text-white line-clamp-1'>{project.title}</p>

          <p className='mt-2 text-xs font-light line-clamp-2 text-neutral-700 dark:text-neutral-400'>
            {project.description}
          </p>
        </div>

        <div className="mt-8 mb-3 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex flex-row items-center justify-start w-full">

              <AnimatedTooltip
                items={tooltipItems}
              />
            </div>
          </div>

          <Link href={'#'}>
            <div className="border rounded-full border-neutral-700 dark:border-neutral-800 p-1 flex items-center ">
              <p className="flex-1 text-center text-sm font-normal text-neutral-700 dark:text-neutral-300 px-3">Preview</p>
              <div className='p-2 rounded-full bg-black dark:bg-neutral-400 group-hover:bg-lime-400 duration-200'>
                <ArrowUpRight size={20} className='text-white dark:text-neutral-800 group-hover:text-black ' />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}