import Link from 'next/link'

import BookVisit from '../components/BookVisit'
import HeroContainer from '../components/HeroContainer'

import about from '@/public/about.webp'
import OurTeamAbout from '../components/OurTeamAbout'
import OurMission from '../components/OurMission'

function About() {
  return (
    <>
      <HeroContainer backgroundImage={about.src}>
        <div className='mx-auto  w-full max-w-7xl text-center mt-32'>
          <h1 className='mb-4 text-5xl font-bold md:text-7xl  text-center'>
            Building lifetime relationships through positive experiences
          </h1>

          <div className='flex items-stretch justify-center mt-8'>
            <Link
              href='/booking'
              className='mx-auto inline-block rounded-md bg-blue-800 hover:bg-blue-600 px-8 py-4 text-center font-semibold text-white'>
              BOOK ONLINE
            </Link>
          </div>
        </div>
      </HeroContainer>
      <OurMission />
      <OurTeamAbout />
      <BookVisit />
    </>
  )
}
export default About
