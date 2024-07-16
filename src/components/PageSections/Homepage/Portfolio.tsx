import ProjectCard from '@/components/Global/ProjectCard'
import { BackgroundBeams } from '@/components/aceternity/background-beams'
import { Button } from '@/components/ui/button'
import { portfolioProjects } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Portfolio({ }: Props) {
  return (
    <div id='portfolio' className="h-[150vh] sm:h-[90vw] w-full bg-neutral-100/50  dark:bg-neutral-950/30 relative antialiased overflow-hidden">
      <div className="standard-container py-20 z-10 w-full absolute">
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row">
          <h1 className='hidden sm:block text-6xl uppercase font-black text-neutral-800 dark:text-white'>
            <span>{`HERE’S A GLIMPSE OF`}</span><br />
            <span>{`SOME EXCITING PROJECTS`}</span><br />
            <span>{`I’VE DONE`}</span><br />
          </h1>
          <h1 className='block sm:hidden text-2xl uppercase font-black text-neutral-800 dark:text-white'>
            <span>{`HERE’S A GLIMPSE OF `}</span>
            <span>{`SOME EXCITING PROJECTS`}</span><br />
            <span>{`I’VE DONE`}</span><br />
          </h1>

          <Button asChild variant={'solid'} size={'solid'} className='bg-black mt-6 sm:mt-0 flex items-center gap-x-3 dark:bg-white h-14 text-white dark:text-black'>
            <Link href='/projects'>
              <p>See all projects</p>
              <ArrowUpRight size={20} />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {portfolioProjects.filter(project => project.isFeatured).map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
      </div>

      <BackgroundBeams />

      <div className="absolute bottom-0 left-0 w-full h-64 z-40 bg-gradient-to-t from-white via-white/50 to-white/0 dark:from-black dark:via-black/70 dark:to-black/0"></div>
    </div >
  )
}