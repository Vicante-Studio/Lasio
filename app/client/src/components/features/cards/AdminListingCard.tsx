import { Link, useNavigate } from 'react-router-dom'
import type { ListingCardProps } from '../../../types/Listing'
import { formatPrice } from '../../../utils/formatPrice'
import { Button } from '@/components/ui/Buttons/button'
import { Eye, Pencil } from 'lucide-react'
import DeleteListingsModal from '../listingFeatures/DeleteListingsModal'

function AdminListingCard({id, images, title, location, city, state, price }: ListingCardProps){
    const navigate = useNavigate();
    return(
         
        <section>

            {/* Listing Card */}
            <article
                id={id}
                className='w-full flex flex-col min-h-[24rem] justify-between'
             >
                <div>
                    { //Card Image
                        images && (
                            <div className='overflow-hidden'>
                                <img
                                    src={images[0]}
                                    className='w-full hover:scale-110 transition-all ease-in-out duration-500 h-64 sm:h-72'
                                    alt="" 
                                />
                            </div>
                        )
                    }

                    {/* Title, and price*/}
                    <article className='py-2 flex flex-col gap-6'>

                        <div>
                            <h3>
                                {title}
                            </h3>
                            
                            { // Listing Price 
                                price && (
                                    <p className='text-xl font-bold text-primary'>
                                        {formatPrice(price)}
                                    </p>
                                )
                            }
                        </div>

                    </article>
                </div>
                {/* Card Location and button */}
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-neutral-700'>
                            {`${location}, ${city}, ${state}`}
                    </p>

                    <div className='flex flex-col gap-2 w-full sm:flex-row sm:justify-between'>
                        <Link to={`/listings/${id}`} className='w-full sm:w-auto'>
                            <Button className='w-full sm:w-auto' variant="secondary">
                                View
                                <Eye color='black' size={18} />
                            </Button>
                        </Link>
                        <Button className='w-full sm:w-auto' variant='outline' type='button' onClick={() => navigate(`/listings/${id}/edit`)}
                        >
                            Edit
                            <Pencil color='black' size={18} />
                        </Button>

                        {
                            // Delete modal 
                            id && <DeleteListingsModal listingId={id}/>
                        }
                    </div>
                </div>
            </article>

        </section>
            
    )
}

export default AdminListingCard