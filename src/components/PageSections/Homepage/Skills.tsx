import ServiceCard from '@/components/Global/ServiceCard'
import { ServiceSkills } from '@/lib/skillsData'
import Image from 'next/image'
import React from 'react'
import { Certificates, skillIcons } from '@/lib/skillsData'
import CertificationCard from '@/components/Global/CertificationCard'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import SkillIcon from '@/components/Global/SkillIcon'
import Link from 'next/link'

type Props = {}

export default function SkillsSection({ }: Props) {
  return (
    <div className='w-full h-fit py-20' id='skills'>
      <div className="standard-container">
        <h1 className='text-neutral-800 dark:text-white text-3xl sm:text-6xl uppercase font-black'>{`I Specialize in a`} <br /> {`Range of 💪Skills`}</h1>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ServiceSkills.map(service => <ServiceCard service={service} key={service.id} />)}
        </div>
      </div>


      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 mx-0 sm:standard-container">
        {/* Certifications */}
        <div className="bg-black dark:bg-neutral-100 p-4 sm:p-8 rounded-none sm:rounded-l pb-7">
          <h2 className='font-black uppercase text-white dark:text-black text-3xl'>Certifications</h2>

          <div className="mt-3 flex flex-col gap-y-3">
            {Certificates
              .filter(certificate => certificate.featured)
              .map(certificate => <CertificationCard key={certificate.slug} certificate={certificate} />)
            }
          </div>

          <div className="h-14 mt-6">
            <Button asChild variant={"solid"} size={"solid"} className='bg-white group dark:bg-neutral-950 uppercase '>
              <Link href={'/skills'} className='flex items-center gap-x-3'>
                {`See All Certifications`}
                <ArrowUpRight size={20} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="bg-neutral-200 dark:bg-neutral-950 p-8 rounded-r">
          <h2 className='font-black uppercase dark:text-white text-black text-3xl'>Tech Stacks</h2>

          <div className="mt-6">
            <p className='text-xs tracking-widest text-neutral-800 dark:text-neutral-300 uppercase'>
              Backend Technologies
            </p>

            <div className="mt-3 flex items-center flex-wrap gap-3">
              {skillIcons
                .filter(item => item.category === 'backend')
                .map(skill => <SkillIcon key={skill.id} icon={skill} />)
              }
            </div>
          </div>

          <div className="mt-7">
            <p className='text-xs tracking-widest text-neutral-800 dark:text-neutral-300 uppercase'>
              Frontend Technologies
            </p>

            <div className="mt-3 flex items-center flex-wrap gap-3">
              {skillIcons
                .filter(item => item.category === 'frontend')
                .map(skill => <SkillIcon key={skill.id} icon={skill} />)
              }
            </div>
          </div>

          <div className="mt-7">
            <p className='text-xs tracking-widest text-neutral-800 dark:text-neutral-300 uppercase'>
              Database Technologies
            </p>

            <div className="mt-3 flex items-center flex-wrap gap-3">
              {skillIcons
                .filter(item => item.category === 'database')
                .map(skill => <SkillIcon key={skill.id} icon={skill} />)
              }
            </div>
          </div>

          <div className="mt-7">
            <p className='text-xs tracking-widest text-neutral-800 dark:text-neutral-300 uppercase'>
              DevOps / Deployment / Cloud & Architecture Tools
            </p>

            <div className="mt-3 flex items-center flex-wrap gap-3">
              {skillIcons
                .filter(item => item.category === 'devops')
                .map(skill => <SkillIcon key={skill.id} icon={skill} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}