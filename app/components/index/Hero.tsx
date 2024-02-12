import Link from 'next/link'
import hero from '@/public/hero.webp'
import HeroContainer from '../layout/HeroContainer'

function Hero() {
  return (
    <HeroContainer backgroundImage={hero.src}>
      <div className='mx-auto  w-full max-w-3xl text-center mt-32 p-4'>
        <span className='sm:text-lg mb-2'>Let us help you</span>
        <h1 className='mb-4 text-4xl font-bold md:text-7xl text-center'>
          Reconnect with your smile
        </h1>
        <h2 className='mx-auto max-w-lg  text-slate-800 text-md sm:text-xl mb-4'>
          AmpeDent - A new approach to dental comfort
        </h2>
        <h2 className='mx-auto mb-5 max-w-lg  text-slate-800 text-md sm:text-xl '>
          Make your perfect smile even better
        </h2>
        <div className='flex items-stretch justify-center mt-8 '>
          <Link
            href='/booking'
            className='mx-auto inline-block rounded-md bg-blue-800 hover:bg-blue-600 px-8 py-4 text-center font-semibold text-white'>
            BOOK ONLINE
          </Link>
        </div>
      </div>
    </HeroContainer>
  )
}
export default Hero
