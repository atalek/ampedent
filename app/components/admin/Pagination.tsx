import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import AlignLeft from '../Icons/AlignLeft'
import AlignRight from '../Icons/AlignRight'

function Pagination({
  page,
  setPage,
  pages,
}: {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  pages: number
}) {
  const [visiblePages, setVisiblePages] = useState<number[]>([])

  useEffect(() => {
    const generateVisiblePages = () => {
      const visiblePageCount = 5
      const halfVisibleCount = Math.floor(visiblePageCount / 2)

      let startPage = page - halfVisibleCount
      let endPage = page + halfVisibleCount

      if (startPage <= 0) {
        startPage = 1
        endPage = Math.min(pages, visiblePageCount)
      }

      if (endPage > pages) {
        endPage = pages
        startPage = Math.max(1, pages - visiblePageCount + 1)
      }

      const visiblePagesArray = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => i + startPage,
      )
      setVisiblePages(visiblePagesArray)
    }

    generateVisiblePages()
  }, [page, pages])

  return (
    <div className='flex items-center justify-between  bg-white px-4 py-3 sm:px-6'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <button
          disabled={page === 1}
          onClick={() => setPage(prevPage => Math.min(prevPage - 1, pages))}
          className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed'>
          Previous
        </button>
        <button
          disabled={page === pages}
          onClick={() => setPage(prevPage => Math.min(prevPage + 1, pages))}
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed'>
          Next
        </button>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing{' '}
            <span className='font-medium'>
              page {page} out of {pages} total pages
            </span>
          </p>
        </div>
        <div>
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'>
            <button
              disabled={page === 1}
              onClick={() => setPage(prevPage => Math.min(prevPage - 1, pages))}
              className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed disabled:bg-gray-300'>
              <span className='sr-only'>Previous</span>
              <AlignLeft aria-hidden='true' />
            </button>

            {visiblePages.map(pageNumber => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                aria-current={page === pageNumber ? 'page' : undefined}
                className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  page === pageNumber
                    ? 'bg-blue-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                }`}>
                {pageNumber}
              </button>
            ))}

            <button
              disabled={page === pages}
              onClick={() => setPage(prevPage => Math.min(prevPage + 1, pages))}
              className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:cursor-not-allowed disabled:bg-gray-300'>
              <span className='sr-only'>Next</span>
              <AlignRight aria-hidden='true' />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
