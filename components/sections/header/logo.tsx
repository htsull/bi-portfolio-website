import Link from 'next/link'

const logo = () => {
  return (
    <div>
      <Link
        href={'/'}
        className='hover:text-custom-primary font-serif text-3xl font-bold'
      >
        BS
      </Link>
    </div>
  )
}

export default logo
