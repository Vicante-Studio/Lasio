const ListingDetailsLoadingState = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 py-16 min-h-screen'>
      <div className='flex flex-col gap-8'>
        <div className='mb-2'>
          <div className='inline-flex items-center gap-3 bg-secondary/40 text-white px-4 py-2 shadow-md rounded animate-pulse'>
            <div className='w-4 h-4 rounded bg-white/60' />
            <span className='font-semibold w-20 h-4 bg-white/60 rounded' />
          </div>
        </div>

        <div className='mx-auto grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-start'>
          <section className='space-y-6'>
            <div className="overflow-hidden rounded-2xl h-[520px] relative bg-gray-100 animate-pulse">
              <div className='w-full h-full bg-neutral-300' />
              <div className='absolute top-4 right-4 bg-black/20 text-white text-sm px-3 py-1 rounded-md w-12 h-6' />
            </div>

            <div className='flex gap-4 overflow-x-auto py-2 items-center'>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className='flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden bg-neutral-300 mr-3 animate-pulse' />
              ))}
            </div>

            <div className='flex items-start justify-between gap-6'>
              <div className='w-3/4'>
                <div className='h-10 bg-neutral-300 rounded w-3/4 animate-pulse' />
                <div className='mt-2 h-6 bg-neutral-300 rounded w-1/3 animate-pulse' />
              </div>

              <div className='w-1/4'>
                <div className='h-8 bg-neutral-300 rounded w-full animate-pulse' />
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='h-4 bg-neutral-300 rounded w-full animate-pulse' />
              <div className='h-4 bg-neutral-300 rounded w-5/6 animate-pulse' />
              <div className='h-4 bg-neutral-300 rounded w-2/3 animate-pulse' />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className='h-12 bg-neutral-300 rounded animate-pulse' />
              ))}
            </div>

            <div className='flex flex-wrap gap-2'>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className='inline-flex items-center px-4 py-1.5 border bg-neutral-100 rounded h-8 w-28 animate-pulse' />
              ))}
            </div>
          </section>

          <aside className='space-y-6 sticky top-6 self-start'>
            <div className='bg-white/95 rounded-2xl p-6 border border-slate-100 shadow-sm animate-pulse'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-gray-200' />
                <div className='flex flex-col gap-1 w-40'>
                  <div className='h-4 bg-neutral-300 rounded' />
                  <div className='h-3 bg-neutral-200 rounded w-1/2' />
                </div>
              </div>

              <div className='mt-4 flex gap-3'>
                <div className='h-8 w-28 bg-neutral-300 rounded' />
                <div className='h-8 w-28 bg-neutral-200 rounded' />
              </div>
            </div>

            <div className='bg-white/95 rounded-2xl p-6 border border-slate-100 shadow-sm animate-pulse'>
              <div className='h-6 bg-neutral-300 rounded w-32 mb-2' />
              <div className='h-4 bg-neutral-200 rounded w-full mb-4' />
              <div className='flex flex-col gap-3'>
                <div className='h-10 bg-neutral-200 rounded' />
                <div className='h-10 bg-neutral-200 rounded' />
                <div className='h-10 bg-neutral-200 rounded' />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ListingDetailsLoadingState
