import type { TopLocationsType } from '@/types/Listing'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MapPin, Home } from 'lucide-react'
import { motion } from 'framer-motion'

const TopLocations = () => {
  const [topLocations, setTopLocations] = useState<TopLocationsType[] | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTopLocations = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/listings/topLocations`
        )
        setTopLocations(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTopLocations()
  }, [])

  return (
    <section className='w-full px-4 sm:px-6 md:px-10 lg:px-12 py-8 md:py-12'>
      <div className='max-w-7xl mx-auto flex flex-col gap-6 md:gap-8'>
        {/* Section Title */}
        <div>
          <h3>
            Top Locations
          </h3>
        </div>

        {/* Grid of Locations */}
        {isLoading ? (
          <div className='flex items-center justify-center h-64'>
            <p className='text-gray-500'>Loading locations...</p>
          </div>
        ) : topLocations ? (
          <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full'>
            {topLocations
              .sort((a, b) => b.total - a.total)
              .map((topLocation, index) => (
                <motion.div
                  key={index}
                  className='relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden group cursor-pointer'
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image with Hover Animation */}
                  <div className='overflow-hidden h-full'>
                    <motion.img
                      src={topLocation.image}
                      alt={topLocation.location}
                      className='w-full h-full object-cover'
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 30,
                      }}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10 pointer-events-none' />

                  {/* Content */}
                  <div className='absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white'>
                    {/* Location Info */}
                    <article className='flex items-center gap-2 mb-3 sm:mb-4'>
                      <MapPin
                        size={20}
                        className='sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 shrink-0'
                        color='oklch(0.75 0.08 65)'
                      />
                      <p className='font-bold text-sm sm:text-base md:text-lg lg:text-xl truncate text-white'>
                        {topLocation.location}
                      </p>
                    </article>

                    {/* Property Count */}
                    <article className='flex items-center gap-2'>
                      <Home
                        size={20}
                        className='sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 shrink-0'
                        color='oklch(0.75 0.08 65)'
                      />
                      <p className='font-medium text-xs sm:text-sm md:text-base text-white'>
                        {topLocation.total > 1
                          ? `${topLocation.total} properties`
                          : `${topLocation.total} property`}
                      </p>
                    </article>
                  </div>
                </motion.div>
              ))}
          </section>
        ) : (
          <div className='flex items-center justify-center h-64'>
            <p className='text-gray-500'>No locations found</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TopLocations