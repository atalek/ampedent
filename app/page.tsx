import Testemonials from './components/index/Testemonials'
import Hero from './components/index/Hero'
import Team from './components/index/Team'
import HeroBenefits from './components/index/HeroBenefits'
import Services from './components/index/Services'
import BookVisit from './components/layout/BookVisit'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AmpeDent | Your Dental Care Partner</title>
      </Head>
      <main className='flex flex-col items-center justify-between '>
        <Hero />
        <HeroBenefits />
        <Team />
        <Services />
        <Testemonials />
        <BookVisit />
      </main>
    </>
  )
}
