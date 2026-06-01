import { MapPin, BedDouble, Home } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setFilter } from '@/state/slices/filters/filterSlice'
import PriceFilter from './priceFilter'
import { listingFeatures, property_types } from '@/data/ListingData'

const SearchPanel = () => {
  const dispatch = useDispatch()

  const handleKeywordChange = (value: string) => {
    dispatch(setFilter({ key: 'keyword', value }))
  }

  const handleCategoryChange = (value: string) => {
    dispatch(setFilter({ key: 'property_type', value }))
  }

  const handleFeatureChange = (value: string) => {
    dispatch(setFilter({ key: 'features', value }))
  }

  const handleBedroomChange = (value: string) => {
    dispatch(setFilter({ key: 'bedrooms', value }))
  }

  return (
    <section className='w-full'>
      <div className='max-w-7xl mx-auto'>
        {/* Grid layout - responsive columns */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6'>
          {/* Keyword/Location Search */}
          <div className='sm:col-span-2 lg:col-span-2 xl:col-span-2'>
            <div className='flex items-center gap-2 mb-2'>
              <MapPin
                color='oklch(0.45 0.16 35)'
                size={20}
                className='md:w-5 md:h-5 shrink-0'
              />
              <label className='font-bold text-sm md:text-base text-text-primary'>
                Locations
              </label>
            </div>

            <input
              type='text'
              placeholder='Type a location'
              className='w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-oklch(0.45 0.16 35) transition-all text-sm md:text-base'
              onChange={(e) => handleKeywordChange(e.target.value)}
            />
          </div>

          {/* Property Type */}
          <div className='sm:col-span-1 lg:col-span-1 xl:col-span-1'>
            <div className='flex items-center gap-2 mb-2'>
              <Home
                color='oklch(0.45 0.16 35)'
                size={20}
                className='md:w-5 md:h-5 shrink-0'
              />
              <label className='font-bold text-sm md:text-base text-text-primary'>
                Property Type
              </label>
            </div>

            <select
              title='Category filter'
              className='w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-oklch(0.45 0.16 35) transition-all text-sm md:text-base cursor-pointer'
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value=''>Select type</option>
              {property_types.map((property, index) => (
                <option key={index} value={property}>
                  {property}
                </option>
              ))}
            </select>
          </div>

          {/* Features */}
          <div className='sm:col-span-1 lg:col-span-1 xl:col-span-1'>
            <div className='flex items-center gap-2 mb-2'>
              <Home
                color='oklch(0.45 0.16 35)'
                size={20}
                className='md:w-5 md:h-5 shrink-0'
              />
              <label className='font-bold text-sm md:text-base text-text-primary'>
                Features
              </label>
            </div>

            <select
              title='Feature filter'
              className='w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-oklch(0.45 0.16 35) transition-all text-sm md:text-base cursor-pointer'
              onChange={(e) => handleFeatureChange(e.target.value)}
            >
              <option value=''>Select feature</option>
              {listingFeatures.map((feature, index) => (
                <option key={index} value={feature}>
                  {feature}
                </option>
              ))}
            </select>
          </div>

          {/* Bedrooms */}
          <div className='sm:col-span-1 lg:col-span-1 xl:col-span-1'>
            <div className='flex items-center gap-2 mb-2'>
              <BedDouble
                color='oklch(0.45 0.16 35)'
                size={20}
                className='md:w-5 md:h-5 shrink-0'
              />
              <label className='font-bold text-sm md:text-base text-text-primary'>
                Bedrooms
              </label>
            </div>

            <input
              type='number'
              placeholder='No. of beds'
              className='w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-oklch(0.45 0.16 35) transition-all text-sm md:text-base'
              onChange={(e) => handleBedroomChange(e.target.value)}
            />
          </div>

          {/* Min Price */}
          <div className='sm:col-span-1 lg:col-span-1 xl:col-span-1'>
            <label className='font-bold text-sm md:text-base text-text-primary block mb-2'>
              Min Price
            </label>
            <PriceFilter
              label='Min Price'
              filterKey='minPrice'
            />
          </div>

          {/* Max Price */}
          <div className='sm:col-span-1 lg:col-span-1 xl:col-span-1'>
            <label className='font-bold text-sm md:text-base text-text-primary block mb-2'>
              Max Price
            </label>
            <PriceFilter
              label='Max Price'
              filterKey='maxPrice'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPanel