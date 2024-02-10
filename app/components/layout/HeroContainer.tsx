function HeroContainer({
  backgroundImage,
  children,
}: {
  backgroundImage: string
  children: React.ReactNode
}) {
  return (
    <section
      className='hero-container hero-background'
      style={
        {
          '--background-image': `url(${backgroundImage})`,
        } as React.CSSProperties
      }>
      {children}
    </section>
  )
}

export default HeroContainer
