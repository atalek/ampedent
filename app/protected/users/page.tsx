import Link from 'next/link'

function UserList() {
  return (
    <section className='mt-8 max-w-3xl w-full mx-auto'>
      {/* <Title>{{ 'Users' }}</Title>

<UserTabs :isAdmin="isAdmin" /> */}

      {/* <Loader v-if="pending" /> */}
      <div className='mt-8 p-4'>
        <div className='bg-slate-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4'>
          <div className='grid grid-cols-3 gap-4 grow items-center overflow-x-auto'>
            <div className='text-slate-900'>
              <span className=''>username</span>
            </div>
            <span className='text-slate-500'>role</span>
          </div>
          <div className='flex gap-1'>
            <Link href={`/users/fat`} className='button'>
              Edit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UserList
