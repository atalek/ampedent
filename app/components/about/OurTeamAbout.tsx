import Image from 'next/image'

import doc1 from '@/public/doc1.webp'
import doc2 from '@/public/doc2.webp'
import doc3 from '@/public/doc3.webp'
import doc4 from '@/public/doc4.webp'

function OurTeamAbout() {
  return (
    <section className='mx-auto w-full max-w-[1400px] px-5 py-16 md:px-10 md:py-24 lg:py-32'>
      <h2 className='text-center text-3xl font-bold md:text-5xl'>
        Our Team Members
      </h2>
      <p className='mx-auto mb-8 mt-4 max-w-lg text-center text-slate-500 md:mb-16'>
        Meet the skilled hands & kind hearts behind your healthy smile
      </p>

      <div className='grid md:grid-cols-2 grid- gap-6 items-stretch text-balance'>
        <div
          className='p-2 border border-solid border-black rounded md:grid grid-cols-2 gap-6 '
          id='daniel'>
          <Image
            placeholder='blur'
            src={doc1}
            alt='Picture of Dr. Daniel Lee '
            height={1000}
            width={1000}
          />
          <div className='mt-4 md:mt-0 p-2'>
            <h3 className='font-bold text-lg'>Dr. Daniel Lee</h3>
            <p className='text-sm text-slate-500'>(Dentist)</p>

            <p className='text-sm text-slate-600 mt-4 '>
              Dr. Daniel Lee is an experienced dentist with over 20 years in the
              field. A graduate from the University of Dental Medicine, he is
              known for his gentle touch and commitment to patient health. He
              continually updates his knowledge to provide high-quality care.
              His goal is to improve his patients health, appearance, and
              self-esteem by creating their dream smiles.
            </p>
          </div>
        </div>
        <div
          className='p-2 border border-solid border-black rounded grid md:grid-cols-2  gap-6 '
          id='sarah'>
          <div className='order-2 sm:order-1 mt-4 md:mt-0 p-2'>
            <h3 className='font-bold text-lg'>Dr. Sarah Green</h3>
            <p className='text-sm text-slate-500'>(Pediatric Dentist)</p>
            <p className='text-sm text-slate-600 mt-4'>
              Dr. Sarah Green is a dedicated Pediatric Dentist with over 15
              years of experience. She graduated from the renowned Children's
              Dental College and is passionate about children's oral health. Dr.
              Green is known for her patient and caring approach, making dental
              visits a positive experience for kids. She is committed to
              providing excellent pediatric dental care and educating her young
              patients on the importance of dental hygiene.
            </p>
          </div>

          <Image
            placeholder='blur'
            src={doc2}
            alt='Picture of Dr.Sarah Green '
            height={1000}
            width={1000}
            className='order-1 sm:order-2'
          />
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-6 items-stretch mt-8'>
        <div
          className='p-2 border border-solid border-black rounded md:grid grid-cols-2 gap-6 '
          id='emily'>
          <Image
            placeholder='blur'
            src={doc4}
            alt='Picture of Dr. Emily Rose '
            height={1000}
            width={1000}
          />
          <div className='mt-4 md:mt-0 p-2'>
            <h3 className='font-bold text-lg'>Dr. Emily Rose</h3>
            <p className='text-sm text-slate-500'>(Cosmetic Dentist)</p>
            <p className='text-sm text-slate-600 mt-4'>
              Dr. Sarah Green is a dedicated Pediatric Dentist with over 15
              years of experience. She graduated from the renowned Children`s
              Dental College and is passionate about children`s oral health. Dr.
              Green is known for her patient and caring approach, making dental
              visits a positive experience for kids. She is committed to
              providing excellent pediatric dental care and educating her young
              patients on the importance of dental hygiene.
            </p>
          </div>
        </div>
        <div
          className='p-2 border border-solid border-black rounded grid md:grid-cols-2 gap-6 '
          id='michael'>
          <div className='order-2 sm:order-1 mt-4 md:mt-0 p-2'>
            <h3 className='font-bold text-lg'>Dr. Michael White</h3>
            <p className='text-sm text-slate-500'>(Endodontist)</p>
            <p className='text-sm text-slate-600 mt-4'>
              Dr. Michael White is a skilled Endodontist with over 20 years of
              experience. He earned his degree from the esteemed Dental School
              of Endodontics. Dr. White specializes in diagnosing tooth pain and
              performing root canal treatment and other procedures relating to
              the interior of the tooth. With his extensive knowledge and gentle
              approach, he is dedicated to relieving tooth pain and saving
              teeth, ensuring his patients smiles remain healthy and beautiful.
            </p>
          </div>
          <Image
            placeholder='blur'
            src={doc3}
            alt='Picture of Dr. Michael White'
            height={1000}
            width={1000}
            className='order-1 sm:order-2'
          />
        </div>
      </div>
    </section>
  )
}
export default OurTeamAbout
