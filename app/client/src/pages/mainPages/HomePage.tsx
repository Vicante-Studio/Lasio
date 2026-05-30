import HeroSection from '../../layouts/HeroSection'
import ListingCard from '@/components/features/cards/ListingCard'
import SearchPanel from '../../components/features/SearchPanel'
import ListingLoadingState from '../../components/ui/LoadingStates/ListingLoadingState'
import PageLink from '../../components/ui/links/PageLink'
import { Button } from '@/components/ui/Buttons/button'
import { useState, useEffect } from 'react'
import axios from 'axios'
import type { Listing } from '@/types/Listing'
import { useSelector } from 'react-redux'
import type { RootState } from '@/state/store'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const filters = useSelector((state: RootState) => state.filters.filterValues);
    const [isLoading, setIsLoading] = useState(true);
    const [listings, setListings ] = useState<Listing[]>([])
    const [hasSearched, setHasSearched] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            async function fetchListings(){
                setIsLoading(true)
                setError(null)

                try {            
                    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/listings`, {
                        params: filters
                    })

                    setListings(Array.isArray(data) ? data : [])
                    setHasSearched(true)
                } catch (error) {
                    console.log(`Error fetching listings: ${error}`)
                    setError('Failed to fetch listings. Please try again.')
                    setHasSearched(true)
                } finally {
                    setIsLoading(false)
                }
            }
                
            fetchListings()
        }, 300)

        return () => clearTimeout(debounceTimer)
    }, [filters])

    return (
        <main className='flex flex-col gap-20'>
        <HeroSection />
    
        <SearchPanel />
    
        <section className='flex flex-col gap-48 items-center'>
            {/* 
                Pseudocode for nested conditionals below
                
                1. If data is still loading → show a loading state component

                2.Else if there is an error → show an error message with a "Try Again" button

                3. Else if there are listings available → loop through each listing and render a ListingCard

                4. Else if the user has already searched but no listings were found → show a "No listings found" message with a button to create a new listing

                5. Else (meaning the user has not searched yet and there are no listings) → show a message prompting them to start searching

                6. After the grid: If there are listings available → show a link to view all listings
            */}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full max-w-7xl mx-auto px-6 place-items-center py-16'>
            {isLoading ? (
                <ListingLoadingState />
            ) : error ? (
                <div className='col-span-3 flex flex-col items-center gap-4 text-center'>
                <h3 className='text-lg font-semibold text-red-600'>{error}</h3>
                <Button
                    variant='outline'
                    type='button'
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </Button>
                </div>
            ) : listings.length > 0 ? (
                listings.map((listing) => (
                <ListingCard
                    key={listing.id}
                    id={listing.id}
                    images={listing.images}
                    title={listing.title}
                    location={listing.location}
                    state={listing.state}
                    city={listing.city}
                    price={listing.price}
                    description={listing.description}
                />
                ))
            ) : hasSearched ? (
                <div className='col-span-3 flex flex-col items-center gap-4 text-center'>
                <h3 className='text-lg font-semibold text-gray-700'>
                    No listings found
                </h3>
                <p className='text-gray-500'>
                    Try adjusting your search filters or create a new listing.
                </p>
                <Button
                    variant='default'
                    type='button'
                    onClick={() => navigate('/createListing')}
                >
                    Create New Listing
                </Button>
                </div>
            ) : (
                <div className='col-span-3 flex flex-col items-center gap-4 text-center'>
                <p className='text-gray-500'>Start searching to find listings</p>
                </div>
            )}
            </section>
    
            {listings.length > 0 && (
            <PageLink to='/listings' children={'View all Listings'} />
            )}
        </section>
        </main>
    )
}

export default HomePage
