import SearchPanel from '@/components/features/SearchPanel'

const PropertySearch = () => {
  return (
    <section className='w-full px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-8 lg:py-12 flex flex-col gap-6 md:gap-8'>
      <div className='max-w-7xl mx-auto flex flex-col gap-6 md:gap-8'>
        <h3>Find Your New Property</h3>
        <SearchPanel />
      </div>
    </section>
  )
}

export default PropertySearch
