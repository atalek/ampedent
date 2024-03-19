import Image from 'next/image'

function HeroContainer({
  backgroundImage,
  children,
}: {
  backgroundImage: string
  children: React.ReactNode
}) {
  return (
    <section className='hero-container'>
      <Image
        priority
        className='object-cover opacity-70'
        src={backgroundImage}
        alt={backgroundImage}
        loading='eager'
        fill
      />
      <div className='z-40'>{children}</div>
    </section>
  )
}

export default HeroContainer
