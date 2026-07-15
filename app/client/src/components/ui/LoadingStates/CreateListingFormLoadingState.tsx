const CreateListingFormLoadingState = () => {
  return (
    <div className='w-full max-w-7xl mx-auto py-12 px-6'>
      <div className='text-center flex flex-col items-center gap-2 mb-12'>
        <div className='h-8 w-64 bg-neutral-300 rounded animate-pulse' />
        <div className='h-4 w-96 bg-neutral-200 rounded mt-2 animate-pulse' />
      </div>

      <div className='flex flex-col gap-6'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className='h-12 bg-neutral-100 rounded border border-neutral-200 animate-pulse' />
        ))}
      </div>
    </div>
  )
}

export default CreateListingFormLoadingState
