import { useState } from 'react'

export default function DeleteButton({
  label,
  onDelete,
}: {
  label: string
  onDelete: () => void
}) {
  const [showConfirm, setShowConfirm] = useState(false)

  if (showConfirm) {
    return (
      <div className='fixed bg-black/80 inset-0 flex items-center h-full justify-center'>
        <div className='bg-white p-4 rounded-lg'>
          <div>Are you sure you want to delete?</div>
          <div className='flex gap-2 mt-4'>
            <button
              type='button'
              className='btn'
              onClick={() => setShowConfirm(false)}>
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete()
                setShowConfirm(false)
              }}
              type='button'
              className='p-2 bg-red-500 text-white rounded hover:bg-red-700'>
              Yes,&nbsp;delete!
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <button
      type='button'
      className='p-2 bg-red-500 text-white rounded hover:bg-red-700'
      onClick={() => setShowConfirm(true)}>
      {label}
    </button>
  )
}
