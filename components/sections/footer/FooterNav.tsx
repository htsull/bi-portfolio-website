import { socialMediaLinks } from '@/constants/socials'
// import { getCustomLocaleDateTime } from '@/lib/getLocaleTime';

const FooterNav = () => {
  return (
    <div>
      <div className='flex'>
        <ul className='mb-4 flex w-full items-center justify-center gap-6'>
          {socialMediaLinks.map(link => (
            <li
              key={link.name}
              className='hover:text-custom-primary flex text-3xl'
            >
              {/* TODO : add social media icons */}
              <a href={link.link} target='_blank'>
                {link.icon && <link.icon />}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center text-sm font-normal'>
        <p>Design with ❤️ and passion by me.</p>
        <p className='mt-2 text-xs text-muted-foreground'>
          {/* //TODO : Add github last push date */}
          <span>Last update : November 5, 2024</span>
          {/* {getCustomLocaleDateTime()} */}
        </p>
      </div>
    </div>
  )
}

export default FooterNav
