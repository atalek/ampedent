import alk from '@/public/alankaizer.webp'
import forsen from '@/public/forsen.webp'
import forsen2 from '@/public/forsen2.webp'
import woodland from '@/public/woodland.webp'
import Image from 'next/image'

function Testemonials() {
  return (
    <section className=''>
      <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32'>
        <h2 className='mb-8 text-center text-3xl font-bold md:mb-14 md:text-5xl'>
          What our clients are saying
        </h2>
        <ul className='mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16 text-balance'>
          <li className='grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10'>
            <div className='flex'>
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
            </div>
            <p className='text-[#647084]'>
              Dr. Lee transformed my smile! I'm no longer afraid to show my
              teeth. Best dentist ever!
            </p>
            <div className='flex'>
              <Image
                placeholder='blur'
                src={alk}
                alt='Alan Kaizer'
                className='mr-4 rounded-full'
                height={64}
                width={64}
              />
              <div className='flex flex-col'>
                <h3 className='font-bold'>Alan Kaizer</h3>
              </div>
            </div>
          </li>
          <li className='grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10'>
            <div className='flex'>
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
            </div>
            <p className='text-[#647084]'>
              Dr. Green made my child's first dental visit a breeze. Highly
              recommend for pediatric care!
            </p>
            <div className='flex'>
              <Image
                placeholder='blur'
                src={woodland}
                alt='Woodland Joseph'
                className='mr-4 '
                height={64}
                width={64}
              />
              <div className='flex flex-col'>
                <h3 className='font-bold'>Woodland Joseph</h3>
              </div>
            </div>
          </li>
          <li className='grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10'>
            <div className='flex'>
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
              <img
                src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg'
                alt=''
                className='mr-1.5'
                height='16'
                width='16'
              />
            </div>
            <p className='text-[#647084]'>
              Emergency root canal was painless. Dr. White is a lifesaver!
            </p>
            <div className='flex'>
              <Image
                placeholder='blur'
                src={forsen2}
                alt='Sebastian Fors'
                className='mr-4 rounded-full'
                height={64}
                width={64}
              />
              <div className='flex flex-col'>
                <h3 className='text-base font-bold'>Sebastian Fors</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Testemonials
