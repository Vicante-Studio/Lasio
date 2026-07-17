import ListingLoadingState from '@/components/ui/loading-states/ListingLoadingState'
import SearchPanel from '@/features/search/components/SearchPanel'
import PageLink from '@/components/ui/links/PageLink'
import AdminListingCard from '@/features/listings/components/AdminListingCard'
import type { Listing } from '@/types/Listing'

const AdminListingsPage = () => {
    const filteredListings: Listing[] = []

  return (
    <section className='mt-12 flex flex-col gap-48 items-center'>
      {/* TODO: Customize this for admins */}
        <SearchPanel/>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto px-6 place-items-center py-16'>
            {
                filteredListings.length !== 0 ? (
                    filteredListings.map(listing => (
                    <AdminListingCard 
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
                    <ListingLoadingState />
                )
            }
        </section>

        <PageLink to='/' children={'Return Home'} />
    </section>
  )
}

export default AdminListingsPage
