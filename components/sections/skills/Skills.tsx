import CustomHeading from '@/components/customs/customHeading'

import React from 'react'
import SkillsCard from './SkillsCard'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { stackData } from '@/constants/stacksData'

const Skills = () => {
  return (
    <div className='container my-24 flex max-w-5xl flex-col items-center gap-4 overflow-hidden'>
      <div className='flex items-center justify-center'>
        <CustomHeading>
          Tools and technologies I've mastered along the way
        </CustomHeading>
      </div>
      <div className='relative flex h-auto flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
        <InfiniteMovingCards>
          {stackData.map((item, index) => (
            <SkillsCard
              key={index}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </InfiniteMovingCards>
      </div>
    </div>
  )
}

export default Skills
