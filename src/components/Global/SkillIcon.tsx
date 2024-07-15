import { SkillIconT } from '@/lib/skillsData'
import React from 'react'
import { Button } from '../ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


type Props = {
  icon: SkillIconT
}

export default function SkillIcon({ icon }: Props) {
  return (
    <div className="">
      <TooltipProvider>
        <Tooltip delayDuration={50}>
          <TooltipTrigger asChild>
            <Button size={'icon'} className='rounded-sm'>
              <icon.icon size={24} className='' />
            </Button>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>{icon.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    </div>
  )
}