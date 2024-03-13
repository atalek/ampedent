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
        className='opacity-65'
        src={backgroundImage}
        alt={backgroundImage}
        objectFit='cover'
        loading='lazy'
        fill
      />
      <div className='z-40'>{children}</div>
    </section>
  )
}

export default HeroContainer
