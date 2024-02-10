import about2 from '@/public/about2.webp'
import Image from 'next/image'

function OurMission() {
  return (
    <section className='my-16' id='mission'>
      <div className='mx-auto w-full max-w-[1400px] px-5 py-16 md:px-10 md:py-12 lg:py-16'>
        <h2 className='mb-8 text-3xl font-bold md:text-5xl lg:mb-14'>
          Meet AmpeDent: Where Smiles Shine Brighter
        </h2>
        <p className='mb-8  text-sm text-slate-800 sm:text-base lg:mb-24'>
          Tired of the dentist blues? Ready to experience dental care that's
          actually pleasant? Welcome to AmpeDent, your friendly neighborhood
          dental haven! We're here to change the way you think about going to
          the dentist - with gentle expertise, modern technology, and a focus on
          your comfort every step of the way.
        </p>
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-12'>
          <Image
            height={1000}
            width={1000}
            src={about2}
            alt='image of patient smiling'
            className='object-contain rounded'
          />
          <div className='flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20'>
            <h2 className='text-3xl font-bold md:text-5xl'>Our Mission</h2>
            <p className='text-sm text-slate-800 sm:text-base'>
              At AmpeDent, our mission is to provide exceptional dental care in
              a comfortable and friendly environment. We are committed to
              empowering our patients through education about oral health,
              offering a range of comprehensive services from preventive care to
              restorative procedures.
              <br /> Our team of dedicated professionals is passionate about
              staying abreast of the latest advancements in dental technology,
              ensuring that our patients receive the best care possible. We
              believe in building long-term relationships with our patients,
              based on mutual trust and respect. <br /> Our goal is to help each
              patient achieve and maintain a healthy, beautiful smile for a
              lifetime. We look forward to welcoming you to our dental family
              and promise to make your experience with us a positive one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default OurMission
