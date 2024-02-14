import React from 'react'

function SuccessBox(
  { children }: { children: React.ReactNode },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className='text-center bg-green-100 p-4 rounded-lg border border-green-300 max-w-3xl w-full'>
      {children}
    </div>
  )
}

export default React.forwardRef(SuccessBox)
