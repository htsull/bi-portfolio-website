import { socialMediaLinks } from '@/constants/socials'
import { getCustomLocaleDateTime } from '@/lib/getLocaleTime';

const FooterNav = () => {
    return (

        <div>
            <div className='flex'>
                <ul className='flex gap-6 items-center justify-center w-full mb-4'>
                    {socialMediaLinks.map(link => (
                        <li key={link.name} className='flex text-3xl hover:text-orange-500'>
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
                <p className='text-xs text-muted-foreground mt-2'>
                    {/* //TODO : Add github last push date */}
                    <span>Last update : </span>
                    {getCustomLocaleDateTime()}
                </p>
            </div>
        </div>
    )
}

export default FooterNav