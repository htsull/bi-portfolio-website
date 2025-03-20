import CustomHeading from '@/components/customs/customHeading'
import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='container my-24 flex max-w-xl flex-col items-center gap-4'>
      <CustomHeading>Get in touch</CustomHeading>
      <ContactForm />
    </div>
  )
}

export default Contact
