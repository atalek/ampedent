import Testemonials from './components/Testemonials'
import Hero from './components/Hero'
import Team from './components/Team'
import Yep from './components/Yep'
import Services from './components/Services'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between '>
      <Hero />
      <Yep />
      <Team />
      <Services />
      <Testemonials />
    </main>
  )
}
