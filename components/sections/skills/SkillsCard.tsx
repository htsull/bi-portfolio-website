import Image, { StaticImageData } from 'next/image'

type SkillsCardProps = {
  title: string
  icon: StaticImageData
  desc: string
}

export default function SkillsCard({ title, icon, desc }: SkillsCardProps) {
  return (
    <div className='flex h-[200px] w-[200px] flex-col items-center justify-center gap-2 rounded-2xl border border-black/15 bg-black/5 shadow dark:border-gray-500 dark:bg-white/5'>
      <Image
        className='bg-transaprent size-24 rounded-lg p-1'
        src={icon}
        alt='product image'
      />
      <h5 className='text-center font-bold tracking-tight text-custom-primary dark:text-custom-primary md:text-xl'>
        {title}
      </h5>

      <div className='flex justify-between text-center'>
        <span className='md:sm px-2 text-xs font-semibold text-black text-muted-foreground dark:text-white'>
          {desc}
        </span>
      </div>
    </div>
  )
}
