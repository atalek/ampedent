import BookVisit from '../components/layout/BookVisit'
import about from '@/public/about.webp'
import OurTeamAbout from '../components/about/OurTeamAbout'
import OurMission from '../components/about/OurMission'
import HeroContainer from '../components/layout/HeroContainer'
import AboutHeroAbout from '../components/about/AboutHeroAbout'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About'
}

function About() {
  return (
    <>

      <HeroContainer backgroundImage={about.src}>
        <AboutHeroAbout />
      </HeroContainer>
      <OurMission />
      <OurTeamAbout />
      <BookVisit />
    </>
  )
}
export default About
