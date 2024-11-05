import { socialMediaLinks } from '@/constants/socials'
import React from 'react'
import Nav from '../header/Nav'
import FooterNav from './FooterNav'

const Footer = () => {

  return (
    <footer className='flex max-w-5xl flex-col items-center justify-center gap-4 border-t border-red-500 py-16 container'>
      <div className='flex flex-col gap-6'>
        <Nav className='gap-6' />
        <FooterNav />
      </div>

    </footer>
  )
}

export default Footer
