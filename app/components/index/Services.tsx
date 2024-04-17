import Link from 'next/link'

function Services() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32'>
        <div className='mx-auto w-full max-w-3xl text-center'>
          <h2 className='text-3xl font-semibold md:text-5xl'>
            Make Every Step <br />
            <Link
              href='/services/#services'
              className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/63915f9749aaab0572c48dae_Rectangle%2018.svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
              Patient - Centric
            </Link>
          </h2>
          <div className='mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16'>
            <p className='text-[#636262]'>
              Our team is always ready to assist patients with their dental
              concerns, ensuring they receive the care and attention they
              deserve.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12 text-balance'>
          <div className='relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4'>
            <div className='absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8'>
              <img
                src='https://www.svgrepo.com/show/318498/tooth-shield.svg'
                alt='preventative care '
                loading='lazy'
                height='32'
                width='32'
                className='relative z-10 inline-block '
              />
              <div className='absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]'></div>
            </div>
            <p className='mb-4 text-xl font-semibold'>Preventive Care</p>
            <p>
              Our preventive services aim to maintain your oral health by
              stopping disease before it takes hold in your mouth. Regular
              exams, cleanings, x-rays, and home care are part of our preventive
              care.
            </p>
          </div>
          <div className='relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4'>
            <div className='absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8'>
              <img
                src='https://www.svgrepo.com/show/382221/dental-implant-health-healthcare-medical-medicine-pharmacy.svg'
                alt='restorative care '
                loading='lazy'
                height='32'
                width='32'
                className='relative z-10 inline-block '
              />
              <div className='absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]'></div>
            </div>
            <p className='mb-4 text-xl font-semibold'>Restorative Services</p>
            <p>
              Our restorative services include fillings, crowns, bridges,
              implants, root canal treatment, and dentures, aiming to restore
              your mouth to good health when problems arise.
            </p>
          </div>
          <div className='relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4'>
            <div className='absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8'>
              <img
                src='https://www.svgrepo.com/show/318582/tooth-clean.svg'
                alt='cosmetic procedures'
                loading='lazy'
                height='32'
                width='32'
                className='relative z-10 inline-block '
              />
              <div className='absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]'></div>
            </div>
            <p className='mb-4 text-xl font-semibold'>Cosmetic Procedures</p>
            <p>
              Our cosmetic procedures range from teeth whitening to veneers and
              bonding, designed to improve your smile.
            </p>
          </div>
          <div className='relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4'>
            <div className='absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8'>
              <img
                src='https://www.svgrepo.com/show/100660/braces.svg'
                alt='teeth braces'
                loading='lazy'
                height='32'
                width='32'
                className='relative z-10 inline-block '
              />
              <div className='absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]'></div>
            </div>
            <p className='mb-4 text-xl font-semibold'>Orthodontics</p>
            <p>
              We offer comprehensive orthodontic treatment for patients of all
              ages, including braces and Invisalign.
            </p>
          </div>
          <div className='relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4'>
            <div className='absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8'>
              <img
                src='https://www.svgrepo.com/show/148450/teeth.svg'
                alt='periodontal care'
                loading='lazy'
                height='32'
                width='32'
                className='relative z-10 inline-block '
              />
              <div className='absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]'></div>
            </div>
            <p className='mb-4 text-xl font-semibold'>Periodontal Care</p>
            <p>
              We provide diagnosis and treatment for conditions affecting the
              gums and bone that support your teeth.
            </p>
          </div>
          <div className='relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4'>
            <div className='absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8'>
              <img
                src='https://www.svgrepo.com/show/318572/tooth-health.svg'
                alt='emergency dental care '
                loading='lazy'
                height='32'
                width='32'
                className='relative z-10 inline-block '
              />
              <div className='absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]'></div>
            </div>
            <p className='mb-4 text-xl font-semibold'>Emergency Dental Care</p>
            <p>
              Our practice is equipped to handle most dental emergencies,
              understanding that they can happen at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services
