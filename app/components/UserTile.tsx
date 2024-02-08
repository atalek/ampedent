import { UserType } from '@/models/User'

function UserTile({ user }: { user: UserType }) {
  return (
    <div className='max-w-6xl mx-auto w-full border flex flex-col md:flex-row items-center md:py-1 px-4 py-3 shadow-md mb-4 '>
      <div className='flex items-center justify-center md:w-1/4 w-full'>
        <div className='flex flex-row items-center gap-2 px-2'>
          <span className='md:w-full w-3/4 inline-block text-sm font-semibold text-center'>
            ID: {user._id}
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center gap-1 md:w-1/4 w-full'>
        <span className='text-sm font-semibold inline-block text-center'>
          Username: {user.username}
        </span>
      </div>
      <div className='flex flex-row justify-center md:w-1/4 w-full'>
        Role: {user.role}
      </div>
      <div className='flex flex-row justify-center md:w-1/4 w-full gap-4'>
        <button className='btn'>Edit</button>
        <button className='btn'>Remove</button>
      </div>
    </div>
  )
}

export default UserTile
