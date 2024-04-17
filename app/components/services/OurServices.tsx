function OurServices() {
  return (
    <section
      className='mx-auto w-full max-w-[1400px] md:py-20 lg:py-26 mt-8 px-4 md:px-0'
      id='services'>
      <h2 className='text-center text-3xl font-bold md:text-5xl mt-8'>
        Our Dental Services
      </h2>

      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 max-w-[1400px] w-full mx-auto md:justify-stretch my-32 text-balance'>
        <div className='bg-sky-50 p-8 border border-solid border-black rounded'>
          <h2 className='text-3xl font-bold'>Cosmetic & Elective</h2>
          <hr className='w-40 my-8 border-2 border-black' />

          <p className='mt-4'>
            Unhappy with certain aspects of your smile? Having difficulty
            chewing or notice your teeth getting thin or worn? Restorative and
            cosmetic dentistry can help you achieve the smile of your dreams,
            boost your self-esteem, and improve your overall health and ability
            to enjoy eating again. We also offer take-home teeth whitening to
            brighten your smile and help you feel more confident.
          </p>
          <ul className='px-2'>
            <li className='my-2 list-none'>
              Our cosmetic and restorative dental treatments include:
            </li>
            <li>Porcelain Veneers</li>
            <li>Composite Resin Veneers</li>
            <li>Crowns, Bridges, and Implant Restorations</li>
            <li>Affordable Full-Mouth Restoration for Smile and Function</li>
            <li>
              All-On-4, Implant-Supported, Fixed Dentures, and Hybrid Dentures
            </li>
            <li>Custom Take-Home Teeth Whitening Kits & In-Office Whitening</li>
          </ul>
        </div>
        <div className='bg-sky-50 p-8 border border-solid border-black rounded'>
          <h2 className='text-3xl font-bold'>Preventive & General</h2>
          <hr className='w-40 my-8 border-2 border-black' />

          <p className='mt-4'>
            An ounce of prevention is worth a pound of cure. Preventive
            dentistry can help you keep your smile in tip-top shape while
            avoiding serious dental issues. Regular dental check-ups make it
            easier to spot potential problems for your oral health before they
            become larger concerns. Teeth cleaning can also prevent gum disease,
            cavities, and tooth decay.
          </p>
          <ul className='px-2'>
            <li className='my-2 list-none'>
              Our general dentistry services include:
            </li>
            <li>Teeth Cleanings & Exams</li>
            <li>Full-Mouth X-Rays</li>
            <li>Dental Sealants</li>
            <li>Fluoride Treatments</li>
            <li>Mouthguards & Nightguards</li>
            <li>Sleep Apnea Appliances</li>
            <li>TMJ/TMD Therapy</li>
          </ul>
        </div>
        <div className='bg-sky-50 p-8 md:col-span-2 border border-solid border-black rounded'>
          <h3 className='text-3xl font-bold'>Full-Mouth Transformation</h3>
          <hr className='w-40 my-8 border-2 border-black' />
          <p className='mt-8'>
            Tooth loss is extremely prevalent in the United States. 20% of
            Americans over the age of 65 are missing all of their teeth.
            Luckily, significant medical advances have been made providing a
            multitude of dental treatment options to reestablish your
            self-esteem and ability to eat, speak, and smile confidently.
            Implant-supported dentures, sometimes called all-on-four, hybrid
            dentures, implant dentures, or teeth-in-a-day, are dental
            prosthetics that replace all of your upper teeth and/or lower teeth.
            These are more secure than traditional dentures and the dental
            implants act as artificial tooth roots, stimulating your jaw and
            helping to prevent bone loss.
          </p>
        </div>
      </div>
    </section>
  )
}
export default OurServices
