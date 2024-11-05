import Link from 'next/link'

const logo = () => {
    return (
        <div>
            <Link href={'/'} className='text-2xl font-serif font-bold hover:text-orange-500'>BS</Link>
        </div>
    )
}

export default logo