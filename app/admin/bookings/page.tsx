import Link from 'next/link'

function Bookings() {
  return (
    <section className='grid gap-4'>
      <div className='relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400'>
          <circle cx='11' cy='11' r='8'></circle>
          <path d='m21 21-4.3-4.3'></path>
        </svg>
        <input
          className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 w-full max-w-md'
          placeholder='Search bookings...'
          type='search'
        />
      </div>
      <div className='relative w-full overflow-auto'>
        <table className='w-full caption-bottom text-sm'>
          <thead className='[&amp;_tr]:border-b'>
            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]'>
                Booking
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                Name
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                Email
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                Phone
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                Status
              </th>
              <th className='h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right'>
                Scheduled
              </th>
              <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='[&amp;_tr:last-child]:border-0'>
            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
              <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium'>
                BK001
              </td>
              <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                John Doe
              </td>
              <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                john@example.com
              </td>
              <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                123-456-7890
              </td>
              <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                Confirmed
              </td>
              <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right'>
                10:00-11:00 AM - 10th Feb, 2024
              </td>
              <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                <button className='btn'>Show details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default Bookings
