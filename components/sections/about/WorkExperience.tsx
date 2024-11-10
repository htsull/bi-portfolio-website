import CustomAccordion from '@/components/customs/CustomAccordion'
import CustomHeading from '@/components/customs/customHeading'
import { CornerRightDown } from 'lucide-react'

const WorkExperience = () => {
  return (
    <div className='container flex flex-col items-center justify-center'>
      <CustomHeading>Here is my journey below...</CustomHeading>
      <CustomAccordion />
    </div>
  )
}

export default WorkExperience
