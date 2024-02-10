import HeroContainer from '../components/layout/HeroContainer'

import services from '@/public/services.webp'
import BookVisit from '../components/layout/BookVisit'
import ServicesAbout from '../components/services/ServicesAbout'
import OurServices from '../components/services/OurServices'
import ServicesHeroAbout from '../components/services/ServicesHeroAbout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
}

function Services() {
  return (
    <>
      <HeroContainer backgroundImage={services.src}>
        <ServicesHeroAbout />
      </HeroContainer>
      <ServicesAbout />
      <OurServices />
      <BookVisit />
    </>
  )
}
export default Services
