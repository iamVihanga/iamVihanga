import ProjectCard from '@/components/Global/ProjectCard'
import { WobbleCard } from '@/components/aceternity/wobble-card'
import { portfolioProjects } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className='py-20 standard-container'>
      <WobbleCard containerClassName='w-full bg-green-900 col-span-1 sm:col-span-2' className='w-full py-5 sm:py-0 h-48 sm:h-60'>
        <div className="max-w-md h-full flex flex-col sm:justify-center justify-start">
          <h1 className='text-3xl sm:text-5xl font-black uppercase text-white/90'>All Projects</h1>
          <p className='text-xs mt-1 text-white/70'>Browse my all projects in various categories such as Backend, Frontend, Full Stack Development & UI/UX Designs</p>
        </div>

        <Image
          src="/images/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 sm:-right-[4%] w-56 sm:w-96 rounded-sm grayscale filter -bottom-10 object-contain"
        />
      </WobbleCard>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {portfolioProjects.map(project => <ProjectCard project={project} key={project.id} />)}
      </div>
    </div>
  )
}