import type { TopLocationsType } from '@/types/Listing'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MapPin, Home } from 'lucide-react'
import { motion } from 'framer-motion'

const TopLocations = () => {
    const [topLocations, setTopLocations] = useState<TopLocationsType[] | null>(null)

    useEffect(() => {
        const fetchTopLocations = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/listings/topLocations`)

                setTopLocations(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchTopLocations()
    }, [])

  return (
    <section className='mx-10 max-w-[80%] flex flex-col gap-4'>
      <h3 className='font-bold text-text-primary'>
        Top Locations
      </h3>

      <section className='flex w-full h-fit justify-between gap-8'>
        {
            // Sort out the topLocation object from highest to lowest, then map it out
            topLocations && topLocations.sort((a,b) => b.total - a.total).map(topLocation => (
                <div className='relative flex-1'>

                    {/* Image */}
                    <div className='overflow-hidden'>
                        <motion.img
                            src={topLocation.image}
                            alt={topLocation.location}
                            className='w-full h-50'
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                        />
                    </div>

                    {/* Overlay */}
                    <div className='bg-linear-to-t from-black via-black/50 to-black/10 absolute top-0 left-0 w-full h-full pointer-events-none'>
                        <div className='flex justify-between w-full flex-col absolute bottom-5 left-4 *:font-bold h-[30%]'>
                            <article className='flex gap-2 align-bottom *:text-white'>
                                <MapPin size={24} color='oklch(0.45 0.16 35)' />

                                <p className='text-md font-bold'>
                                    {topLocation.location}
                                </p>
                            </article>

                            <article className='flex gap-2 align-bottom *:text-white'>
                                <Home size={24} color='oklch(0.45 0.16 35)' />

                                <p>
                                    {
                                        topLocation.total > 1 ? `${topLocation.total} properties` : `${topLocation.total} property`
                                    }
                                </p>
                            </article>
                        </div>
                    </div>

                </div>
            ))
        }
      </section>
    </section>
  )
}

export default TopLocations
