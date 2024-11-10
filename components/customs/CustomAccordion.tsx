import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { ChevronDown, Download, SquareArrowOutUpRight } from 'lucide-react'

import { experienceData } from '@/constants/experienceData'
import { Button } from '../ui/button'
import Link from 'next/link'

const CustomAccordion = () => {
  const index_ = experienceData.length
  console.log(index_)
  return (
    <div className='w-full'>
      {experienceData.map(item => (
        <Accordion type='single' collapsible key={item.id}>
          <AccordionItem value={`item-${item.id}`}>
            <AccordionTrigger
              className={`hover:text-custom-primary flex w-full items-center justify-between border border-white/5 bg-black/5 px-4 py-2 font-serif font-bold dark:bg-white/5 ${item.id === 1 ? 'rounded-t-md' : ''}`}
            >
              <div className='flex items-center gap-2 text-start'>
                {<item.icon />}
                <div className='flex flex-col items-start'>
                  <p>{item.company}</p>
                  <p className='hidden lg:flex'>{item.title}</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='hidden flex-col items-end lg:flex'>
                  <p>{item.period}</p>
                  <p className='hidden sm:flex'>{item.location}</p>
                </div>
                <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
              </div>
            </AccordionTrigger>
            <AccordionContent className='border-x border-b pl-16 dark:border-white/10 dark:text-muted-foreground'>
              <ul className='pt-4'>
                <div className='text-md w-full justify-between pb-2 font-bold sm:flex'>
                  <p className='lg:hidden'>{item.title}</p>
                  <p className='pr-6 lg:hidden'>{item.period}</p>
                </div>
                {Object.values(item.detail).map((item, idx) => (
                  <li className='list-disc pr-4' key={idx}>
                    {item}
                  </li>
                ))}
                {item.button && (
                  <div className='cursor-pointer pt-2'>
                    <Link href={`${item.href}`}>
                      <Button
                        variant='default'
                        size='sm'
                        className='hover:bg-orange-500 hover:text-white'
                      >
                        <span className='capitalize'>Learn more...</span>
                        <SquareArrowOutUpRight />
                      </Button>
                    </Link>
                  </div>
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}

export default CustomAccordion
