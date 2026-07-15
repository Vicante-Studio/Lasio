const TopLocationsLoadingState = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full'>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className='relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-neutral-100 animate-pulse'>
          <div className='w-full h-full bg-neutral-300' />
          <div className='absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6'>
            <div className='h-5 w-3/4 bg-neutral-200 rounded mb-2' />
            <div className='h-4 w-1/3 bg-neutral-200 rounded' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopLocationsLoadingState
