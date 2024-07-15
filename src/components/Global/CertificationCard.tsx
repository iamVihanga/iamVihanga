import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

type Props = {
  certificate: Certificate
}

export default function CertificationCard({ certificate }: Props) {
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
}