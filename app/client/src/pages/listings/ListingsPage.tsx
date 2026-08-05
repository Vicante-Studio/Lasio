import ListingCard from '@/features/listings/components/ListingCard'
import ListingLoadingState from '@/components/ui/loading-states/ListingLoadingState'
import SearchPanel from '@/features/search/components/SearchPanel'
import PageLink from '@/components/ui/links/PageLink'
import { useEffect, useState } from 'react'
import type { Listing } from '@/types/Listing'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store/store'
import HeroSection from '@/components/layout/HeroSection'
import api from '@/config/api/axiosInstance'

const ListingsPage = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const filters = useSelector((state: RootState) => state.filters.filterValues);

    useEffect(() => {
        const fetchListings = async () => {
            setIsLoading(true)
            const { data } = await api.get(`/api/listings`, {
                params: filters
            });
            setListings(data.data)
            setIsLoading(false)
        }

        fetchListings();
    }, [filters])

    return (
        <section className='flex flex-col gap-48 items-center'>
                <HeroSection
                    eyebrow='Listings'
                    title={
                        <>
                            Explore the market — find properties that fit your<span className='text-[rgb(224,24,24)] italic'>needs.</span>
                        </>
                    }
                    subtitle={'Search, filter, and browse curated listings with detailed photos and specs.'}
                    bgImage={'/Images/Hero/hero6.webp'}
                    ctas={[{ label: 'Browse Listings', to: '/listings' }]}
                />
            <SearchPanel/>

            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto px-6 place-items-center py-16'>
                {isLoading ? (
                    <ListingLoadingState />
                ) : listings.length !== 0 ? (
                    listings.map(listing => (
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
                ) : (
                    <p className='text-neutral-500 col-span-3 text-center'>No listings found</p>
                )}
            </section>

            <PageLink to='/' children={'Return Home'} />
        </section>
    )
}

export default ListingsPage
