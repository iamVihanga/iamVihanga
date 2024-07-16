import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

type Props = {
  certificate: Certificate,
  type?: 'tab' | 'card'
}

export default function CertificationCard({ certificate, type = 'tab' }: Props) {

  if (type === 'tab') {
    return (
      <Link href={`/certificates/${certificate.slug}`} className='group'>
        <div className='p-2 rounded border border-neutral-600 dark:border-neutral-300 flex items-center gap-x-3 bg-primary-foreground/5'>
          <div className="size-16 sm:size-12 rounded overflow-hidden">
            <Image src={certificate.provider.icon} alt={certificate.provider.name} width={100} height={100} className='object-cover w-full h-full' />
          </div>

          <div className="group-hover:pl-3 duration-150">
            <h2 className='text-neutral-100 dark:text-neutral-800 font-semibold group-hover:underline text-sm sm:text-base'>{certificate.name}</h2>
            <p className='text-neutral-400 dark:text-neutral-700 text-[10px] sm:text-xs'>{`Issued by : ${certificate.provider.name}`}</p>
          </div>
        </div>
      </Link>
    )
  } else {
    return (
      <Link href={certificate.fileLink} target='_blank' className='group cursor-pointer rounded p-2 pb-4 bg-primary-foreground border border-primary/30 h-fit'>
        <Image
          src={certificate.thumbnail}
          alt={certificate.name}
          width={400} height={250}
          className='rounded w-full h-full object-cover grayscale group-hover:grayscale-0'
        />

        <div className="flex items-center gap-x-3 mt-4">
          <div className="w-12 h-12 rounded overflow-hidden">
            <Image
              src={certificate.provider.icon}
              alt={certificate.provider.name}
              width={100} height={100}
              className='object-cover w-full h-full'
            />
          </div>

          <div className="flex-1 group-hover:pl-1 duration-150">
            <h2 className='line-clamp-1 group-hover:underline text-neutral-800 dark:text-neutral-200 font-semibold text-sm sm:text-base'>{certificate.name}</h2>
            <p className='line-clamp-1 text-neutral-700 dark:text-neutral-300 text-[10px] sm:text-xs'>{`Issued by : ${certificate.provider.name}`}</p>
          </div>
        </div>
      </Link>
    )
  }
}