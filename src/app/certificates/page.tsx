import CertificationCard from '@/components/Global/CertificationCard'
import ProjectCard from '@/components/Global/ProjectCard'
import { WobbleCard } from '@/components/aceternity/wobble-card'
import { portfolioProjects } from '@/lib/constants'
import { Certificates } from '@/lib/skillsData'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <div className='py-20 standard-container'>
      <WobbleCard containerClassName='w-full bg-green-900 col-span-1 sm:col-span-2' className='w-full py-5 sm:py-0 h-48 sm:h-60'>
        <div className="max-w-md h-full flex flex-col sm:justify-center justify-start">
          <h1 className='text-3xl sm:text-5xl font-black uppercase text-white/90'>Certificates</h1>
          <p className='text-xs mt-1 text-white/70'>Browse my all certificates in various categories such as Professional Certifications, Tech Stacks, Best Practices & Programming Languages</p>
        </div>

        <Image
          src={Certificates.filter(cert => cert.slug === 'full-stack-web-developer')[0].thumbnail}
          width={500}
          height={500}
          alt="Vihanga Silva"
          className="absolute -right-2 sm:-right-[4%] w-44 sm:w-72 rounded-sm grayscale filter -bottom-10 object-contain"
        />
      </WobbleCard>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {Certificates.map(cert => <CertificationCard key={cert.slug} certificate={cert} type='card' />)}
      </div>
    </div>
  )
}