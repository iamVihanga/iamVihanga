'use client';

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Loader2 } from 'lucide-react';
import { useToast } from '../ui/use-toast';

type Props = {}

interface ContactFormState {
  name: string,
  email: string,
  message: string
}

export default function ContactFormHome({ }: Props) {
  const [formState, setFormState] = useState<ContactFormState>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setIsLoading(true)

      if (formState?.email === null || formState?.name === null || formState?.message === null) {
        throw new Error("Required all Fields !")
      }

      const res = await fetch(`${window.origin}/api/send`, {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        throw new Error("Send message failed !")
      }

      const data = await res.json();
      toast({
        title: "Great..! 🚀",
        description: "Your message successfully sent to my inbox,"
      })

      setIsLoading(false)
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request."
      })

      setIsLoading(false)
    }
  }

  return (
    <form className='grid grid-cols-1 sm:grid-cols-2 gap-3' onSubmit={handleSubmit}>
      <Input
        className='rounded bg-blue-900/20 border border-white/40 placeholder:text-white/80 text-white'
        name='name'
        placeholder='Your Name'
        value={formState?.name}
        onChange={e => setFormState(prev => ({ ...prev!, name: e.target.value }))}
      />
      <Input
        className='rounded bg-blue-900/20 border border-white/40 placeholder:text-white/80 text-white'
        name='email'
        type='email'
        placeholder='johndoe@gmail.com'
        value={formState?.email}
        onChange={e => setFormState(prev => ({ ...prev!, email: e.target.value }))}
      />

      <Textarea
        className='rounded bg-blue-900/20 border border-white/40 placeholder:text-white/80 text-white col-span-1 sm:col-span-2'
        name='message'
        placeholder='Write your message here'
        value={formState?.message}
        onChange={e => setFormState(prev => ({ ...prev!, message: e.target.value }))}
      />

      <Button
        type='submit'
        className='bg-white dark:bg-blue-950/40 rounded text-black dark:text-white h-12'
        disabled={isLoading}
      >
        <div className="flex items-center gap-x-2">
          {isLoading && <Loader2 size={23} className="text-white h-4 w-4 animate-spin" />}
          <p>Leave Message</p>
        </div>
      </Button>
    </form>
  )
}