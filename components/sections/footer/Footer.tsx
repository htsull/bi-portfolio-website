import React from 'react'
import Nav from '../header/Nav'
import FooterNav from './FooterNav'

const Footer = () => {

  return (
    <footer className='flex max-w-5xl flex-col items-center justify-center  border-t-2 dark:border-white/30 py-16 container'>
      <div className='flex flex-col gap-6'>
        <Nav className='gap-6' />
        <FooterNav />
      </div>
    </footer>
  )
}

export default Footer
