'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

function Loader() {
  return (
    <ProgressBar
      height='4px'
      color='#2563EB'
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}
export default Loader
