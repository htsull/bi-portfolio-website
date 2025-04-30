'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import { ContactFormSchema } from '@/lib/schema'
import CustomFormField from './FormField'
import { useEffect, useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      acceptFutureContact: false
    }
  })

  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    try {
      console.log(values)
      setIsDisabled(true)

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Handle success
      setIsDisabled(false)
      // TODO: Add toast on submit success
    } catch (error) {
      console.error('Submission failed', error)
      setIsDisabled(false)
      // TODO: Add error handling and toast here
    }
  }

  useEffect(() => {
    if (!isDisabled) {
      form.reset()
      // TODO: Add message sending related features
    }
  }, [isDisabled, form])

  return (
    <div className='w-full'>
      <Form {...form}>
        <form
          className='flex flex-1 flex-col font-serif'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='justify-between gap-8 sm:flex'>
            <div className='mb-4 flex-1'>
              <CustomFormField
                label='Name'
                placeholder='Enter your name...'
                name='name'
                control={form.control}
                textarea={false}
              />
            </div>
            <div className='mb-4 flex-1'>
              <CustomFormField
                label='Email'
                placeholder='Enter your email...'
                name='email'
                control={form.control}
                textarea={false}
              />
            </div>
          </div>
          <div className='flex-col'>
            <div className='mb-4'>
              <CustomFormField
                label='Message'
                placeholder='Enter your message here...'
                name='message'
                control={form.control}
                textarea={true}
              />

              <p className='pt-2 text-xs text-muted-foreground'>
                I will get back to you as soon as I receive your message...
              </p>
            </div>
            <div className='mb-4 flex items-center gap-2'>
              <Checkbox />
              <p className='text-xs text-muted-foreground sm:text-sm'>
                By checking this box, you consent to receive emails from me for
                future updates.
              </p>
            </div>
            <Button
              className='text-md w-full'
              type='submit'
              disabled={isDisabled}
            >
              Submit
            </Button>
          </div>
          {/* // TODO: Add privacy policy page */}
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
