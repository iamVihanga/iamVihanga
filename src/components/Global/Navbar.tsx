import { NavLinks } from '@/lib/constants'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from './ThemeToggleButton'
import { ArrowDownToDot, ArrowUpRight, MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type Props = {
  className?: string
}

export default function Navbar({ className }: Props) {
  return (
    <header className={`w-full h-14 px-0 sm:px-28 flex flex-row justify-between bg-white/80 dark:bg-black/80 border-b border-b-black dark:border-b-white/70 backdrop-blur-md ${className}`}>
      <div className="hidden sm:flex flex-row flex-1">
        {NavLinks.map(({ id, slug, text }) => (
          <Button asChild className='text-black dark:text-white/70 dark:hover:text-white' size={'solid'} variant={'solid'}>
            <Link href={slug}>{text}</Link>
          </Button>
        ))}
      </div>
      <div className="flex sm:hidden">
        <MobileNavDrawer TriggerComponent={(
          <Button variant={'solid'} size={'solid'} className='border-r border-white'>
            <MenuIcon className='text-black dark:text-white' />
          </Button>
        )} />
      </div>


      <div className="flex flex-row">
        {/* Toggle Theme button */}
        <ModeToggle />

        {/* Download CV Button */}
        <Button asChild size={"solid"} variant={"solid"} className='hidden sm:flex border-r border-black dark:border-white hover:bg-primary-foreground/90 dark:hover:bg-primary/5'>
          <Link href={'#'} className='flex flex-row gap-x-2'>
            Download CV
            <ArrowDownToDot size={17} className='text-black dark:text-white' />
          </Link>
        </Button>

        {/* Lets talk */}
        <Button asChild size={"solid"} className='bg-black dark:bg-white text-white dark:text-black'>
          <Link href={'#'} className='flex flex-row gap-x-2'>
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>
        </Button>
      </div>
    </header>
  )
}

function MobileNavDrawer({ TriggerComponent }: { TriggerComponent: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {TriggerComponent}
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Navigate my Portfolio</SheetTitle>
        </SheetHeader>

        <div>
          some text
        </div>

        <SheetFooter>
          This is footer
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}