'use client';

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

type Props = {}

interface ContactFormState {
  name: string,
  email: string,
  message: string
}

export default function ContactFormHome({ }: Props) {
  const [formState, setFormState] = useState<ContactFormState>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit() {
    try {

    } catch (err) {

    }
  }

  return (
    <form className='grid grid-cols-1 sm:grid-cols-2 gap-3' onSubmit={handleSubmit}>
      <Input
        className='rounded bg-blue-900/20 border border-white/40 placeholder:text-white/80 text-white'
        name='name'
        placeholder='Your Name'
      />
      <Input
        className='rounded bg-blue-900/20 border border-white/40 placeholder:text-white/80 text-white'
        name='email'
        type='email'
        placeholder='johndoe@gmail.com'
      />

      <Textarea
        className='rounded bg-blue-900/20 border border-white/40 placeholder:text-white/80 text-white col-span-1 sm:col-span-2'
        name='message'
        placeholder='Write your message here'
      />

      <Button
        type='submit'
        className='bg-white dark:bg-blue-950/40 rounded text-black h-12 dark:text-white'
      >
        Leave Message
      </Button>
    </form>
  )
}