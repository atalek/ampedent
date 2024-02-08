import SideNav from '../components/SideNav'
import SideNav2 from '../components/SideNav2'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <div className='w-full flex-none md:w-64'>
          {/* <SideNav /> */}
          <SideNav2 />
        </div>
        <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
          {children}
        </div>
      </div>

      {/* {children} */}
    </>
  )
}
