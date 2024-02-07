function Protected() {
  return (
    <section>
      <div className=' py-16 md:py-24 lg:py-32'>
        <form
          className='mx-auto mb-4 max-w-md w-full pb-4'
          name='wf-form-password'
          method='get'>
          <div className='relative'>
            <img
              alt=''
              src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg'
              className='absolute bottom-0 left-[5%] right-auto top-[26%] inline-block'
            />
            <input
              type='text'
              className='mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]'
              name='name'
              placeholder='username'
              required
            />
          </div>
          <div className='relative mb-4 pb-2'>
            <img
              alt=''
              src='https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg'
              className='absolute bottom-0 left-[5%] right-auto top-[26%] inline-block'
            />
            <input
              type='password'
              className='mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]'
              placeholder='password'
              required
            />
          </div>
          <a
            href='#'
            className='flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]'>
            <p className='mr-6 font-bold'>Login</p>
            <div className='h-4 w-4 flex-none'>
              <svg
                fill='currentColor'
                viewBox='0 0 20 21'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Arrow Right</title>
                <polygon points='16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9'></polygon>
              </svg>
            </div>
          </a>
        </form>
      </div>
    </section>
  )
}
export default Protected
