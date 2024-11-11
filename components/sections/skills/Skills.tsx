import CustomHeading from '@/components/customs/customHeading'
import React from 'react'
import { ToolAndStacks } from './ToolsAndStacks'
import { StackData } from '@/constants/stacksData'
import GridBackground from './GridBackground'

const Skills = () => {
  return (
    <div className='container flex max-w-5xl flex-col items-center overflow-hidden'>
      <CustomHeading>Tools I've mastered along the way</CustomHeading>
      <GridBackground>
        <ToolAndStacks items={StackData} className='container w-auto' />
      </GridBackground>
    </div>
  )
}

export default Skills
