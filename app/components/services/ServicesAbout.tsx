import services2 from '@/public/services2.webp'
import Image from 'next/image'

function ServicesAbout() {
  return (
    <section className='my-16'>
      <div className='mx-auto w-full max-w-[1400px] px-5 py-16 md:px-10 md:py-12 lg:py-16'>
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col gap-5 rounded-2xl  p-4'>
            <h2 className='text-3xl font-bold md:text-5xl'>
              Love your general dental care
            </h2>
            <p className='text-sm text-slate-600 sm:text-base text-balance'>
              We're thrilled to be your new home for exceptional dentistry.
              Visit us for a cleaning, general dental exam, and a bit of
              pampering. Plus, everything else you need to look and feel your
              best.
            </p>
          </div>
          <Image
            height={1000}
            width={1000}
            src={services2}
            alt='image of patient smiling'
            className='object-contain rounded'
          />
        </div>
      </div>
    </section>
  )
}
export default ServicesAbout
