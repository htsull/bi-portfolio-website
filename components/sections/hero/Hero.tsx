import Image from 'next/image'
import Picture from '@/public/img/picture.jpg'

import { Download } from 'lucide-react'
import { socialMediaLinks } from '@/constants/socials'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div
      className='container flex items-center justify-center gap-8 bg-black/5 pb-8 pt-16 dark:bg-white/5'
      id='/'
    >
      <div className='hidden items-center justify-center sm:flex'>
        <Image
          className='rounded-full'
          src={Picture}
          alt='my picture'
          quality={90}
          priority
          placeholder='blur'
          width={270}
          // objectFit='contain'
        />
      </div>
      <div className='flex flex-col justify-center gap-3 sm:flex-1 lg:items-center'>
        <h1 className='title no-underline'>
          Hey, I'm <span className='transition'>Berthony</span>
        </h1>
        <h2 className='subtitle text-xl'>
          I'm a Data Analyst based in Montreal, Canada 🇨🇦
        </h2>
        <p className='max-w-[500px] text-sm text-muted-foreground lg:text-center'>
          Welcome to my data portfolio where I share what I've been working on
          recently, things i've learned along the way, my thoughts and hobbies.
        </p>
        {/* // add tag for download functionality */}
        <div className='flex items-center gap-4'>
          <div className='cursor-pointer'>
            <Button
              variant='default'
              size='lg'
              className='hover:bg-orange-500 hover:text-white'
            >
              <a href='/cv/cvbs_en.pdf' className='flex gap-2' download>
                <span className='capitalize'>download resume</span>
                <Download size={18} />
              </a>
            </Button>
          </div>
          <div className='flex'>
            <ul className='flex gap-3'>
              {socialMediaLinks.slice(0, 2).map(link => (
                <li
                  key={link.name}
                  className='hover:text-custom-primary flex text-4xl transition hover:scale-[115%]'
                >
                  {/* //TODO : add social media icons */}
                  <a href={link.link} target='_blank'>
                    {link.icon && <link.icon />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <div className='flex flex-col gap-3'>
          <h1 className='title no-underline'>
            Hey, I'm{' '}
            <span className='transition hover:'>Berthony</span>
          </h1>
          <h2 className='subtitle text-xl'>
            I'm a Data Analyst based in Montreal, Canada 🇨🇦
          </h2>
          <p className='max-w-[500px] text-sm text-muted-foreground'>
            Welcome to my data portfolio where I share what I've been working on
            recently, things i've learned along the way and my hobbies.
          </p>
          // add tag for download functionality
          <div className='flex items-center gap-4'>
            <div className='cursor-pointer'>
              <Button
                variant='default'
                size='lg'
                className='hover:bg-orange-500 hover:text-white'
              >
                <a href='/cv/cvbs_en.pdf' className='flex gap-2' download>
                  <span className='capitalize'>download resume</span>
                  <Download size={18} />
                </a>
              </Button>
            </div>
            <div className='flex'>
              <ul className='flex gap-3'>
                {socialMediaLinks.slice(0, 2).map(link => (
                  <li
                    key={link.name}
                    className='flex text-3xl transition hover:scale-[115%] hover:'
                  >
                    //TODO : add social media icons 
                    <a href={link.link} target='_blank'>
                      {link.icon && <link.icon />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */
}
{
  /* </div>

    </div > */
}
{
  /* )
} */
}

export default Hero
