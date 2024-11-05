import { StackData } from '@/constants/stacksData'
import { ToolAndStacks } from './ToolsAndStacks'

export default function GridBackground() {
  const items = StackData.map(item => ({
    name: item.name,
    imageUrl: item.imageUrl
  }))
  return (
    <div className='dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex h-[10rem] w-full items-center justify-center bg-white dark:bg-black'>
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div> */}
      <p className=''>{/* <ToolAndStacks items={items} /> */}</p>
    </div>
  )
}