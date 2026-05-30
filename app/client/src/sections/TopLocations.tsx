import type { TopLocations } from '@/types/Listing'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MapPin, Home } from 'lucide-react'

const TopLocations = () => {
    const [topLocations, setTopLocations] = useState<TopLocations[] | null>(null)

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
    <section className='mx-10'>
      <h3 className='font-bold text-text-primary'>
        Top Locations
      </h3>

      <section className='flex w-full h-fit justify-between gap-8'>
        {
            // Sort out the topLocation object from highest to lowest, then map it out
            topLocations && topLocations.sort((a,b) => b.total - a.total).map(topLocation => (
                <div className='relative flex-1'>

                    <img src={topLocation.image} alt={topLocation.location}  className='w-full h-50'/>

                    <div className='absolute bottom-0 left-0 flex justify-between w-full flex-col *:font-bold h-[30%] bg-overlay-main'>
                        <article className='flex gap-2 align-bottom *:text-white'>
                            <MapPin size={24} color='oklch(0.45 0.16 35)' />

                            <p>
                                {topLocation.location}
                            </p>
                        </article>

                        <article className='flex gap-2 align-bottom *:text-white'>
                            <Home size={24} color='oklch(0.45 0.16 35)' />

                            <p>
                                {
                                    topLocation.total > 1 ? `${topLocation.total} Properties` : `${topLocation.total} Property`
                                }
                            </p>
                        </article>
                    </div>

                </div>
            ))
        }
      </section>
    </section>
  )
}

export default TopLocations
