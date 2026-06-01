import { Link } from 'react-router-dom'
import type { ListingCardProps } from '../../../types/Listing'
import { formatPrice } from '../../../utils/formatPrice'
import { Button } from '@/components/ui/Buttons/button'
import IconSet from '@/components/ui/IconSet'
import { Bath, Bed, Maximize } from 'lucide-react'

function ListingCard({id, images, title, location, city, state, price, bedrooms, bathrooms, sizeSqft }: ListingCardProps){
    return(
        
           <Link to={`/listings/${id}`} className='w-100 h-fit'>

             <article
                id={id}
                className='w-100 flex flex-col h-140 justify-between'
                >
                    <div>
                        {
                            images && (
                                <div className='overflow-hidden'>
                                    <img
                                        src={images[0]}
                                        className='w-full hover:scale-110 transition-all ease-in-out duration-500 h-68'
                                        alt={title} 
                                    />
                                </div>
                            )
                        }

                        {/* Title, price, and extra info*/}
                        <article className='py-2 flex flex-col gap-8'>

                            <div className='flex flex-col gap-2'>
                                <div>
                                    <h3 className='listing-display-heading'>
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

                                {/* Listing Icons */}
                                <div className='flex justify-between'>

                                    {
                                        bedrooms && <IconSet 
                                        title={bedrooms > 1 ? `Beds` : `Bed`}
                                        icon={<Bed color='oklch(0.75 0.08 65)' size={24}/>}
                                        value={`${bedrooms}`}
                                    />
                                    }

                                    {
                                        bathrooms && <IconSet 
                                        title={bathrooms > 1 ? `Baths` : `Bath`}
                                        icon={<Bath color='oklch(0.75 0.08 65)' size={24}/>}
                                        value={`${bathrooms}`}
                                    />
                                    }

                                    {
                                        sizeSqft && <IconSet 
                                        title={'SqFt'}
                                        icon={<Maximize color='oklch(0.75 0.08 65)' size={24}/>}
                                        value={`${sizeSqft}`}
                                    />
                                    }
                                </div>
                            </div>

                        </article>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='font-semibold text-neutral-700'>
                                {`${location}, ${city}, ${state}`}
                        </p>
 
                        <div className='flex justify-center *:w-full'>
                            <Button variant='secondary' type='button'
                            >
                                View Property
                            </Button>
                        </div>
                    </div>


                </article>
           </Link>

    )
}

export default ListingCard