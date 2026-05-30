import axios from 'axios'
import { useEffect, useState } from 'react'

const TopLocations = () => {
    const [topLocations, setTopLocations] = useState(null)

    useEffect(() => {
        const fetchTopLoctions = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/listings/topLocations`)

                console.log(data)
                setTopLocations(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchTopLoctions()
    }, [])

    console.log(topLocations)
  return (
    <section className='mx-10'>
      <h3>
        Top Locations
      </h3>
    </section>
  )
}

export default TopLocations
