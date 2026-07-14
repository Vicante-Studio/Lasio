import { useParams, useNavigate } from 'react-router-dom'
import type { Listing } from '../../types/Listing';
import { formatPrice } from '../../utils/formatPrice';
import { MapPin, Bed, Bath, Maximize, Home, ArrowLeft, ArrowRight, Pencil } from 'lucide-react'
import Footer from '../../layouts/Footer';
import IconSet from '../../components/ui/IconSet';
import { Button } from '@/components/ui/Buttons/button';
import DeleteListingsModal from '@/components/features/listingFeatures/DeleteListingsModal';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectIsAdmin } from '@/selectors/authSelectors';
import { useToast } from '@/hooks/useToast';

const ListingDetails = () => {
    const userIsAdmin = useSelector(selectIsAdmin)

    const navigate = useNavigate();
    const { listingId } = useParams(); //unique Id for listing

    const [listing, setListing] = useState<Listing>()
    const [loading, setLoading] = useState<boolean>(true)
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

    const { showToast, ToastComponent } = useToast()

    // Fetching Listing
    useEffect(() => {
        const fetchListing = async () => {
            try {
                const { data } = await axios.get(`/api/listings/${listingId}`);

                setListing(data)
            
            } catch (error) {
                console.log(error)
                navigate('/listings') // redirect if listing not found
            } finally {
                setLoading(false)
            }
        }

        fetchListing();
    }, [listingId, navigate])

    // Image thumbnails + carousel
    const [mainImage, setMainImage] = useState<number>(0)
    const [imageLoaded, setImageLoaded] = useState(false)
    const carouselRef = useRef<number | null>(null)
    const getCurrentImage = () => listing && listing.images[mainImage];

    const stopCarousel = () => {
        if (carouselRef.current) {
            clearInterval(carouselRef.current)
            carouselRef.current = null
        }
    }

    const startCarousel = () => {
        if (!listing || !listing.images || listing.images.length <= 1) return;
        stopCarousel()
        carouselRef.current = window.setInterval(() => {
            setMainImage(prev => (prev + 1) % listing.images.length)
        }, 3000)
    }

    // Start carousel when listing loads; stop on unmount
    useEffect(() => {
        if (!listing) return
        startCarousel()
        return () => stopCarousel()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listing])

    // Reset imageLoaded state when image index changes
    useEffect(() => {
        setImageLoaded(false)
    }, [mainImage])

  return (
    <section className='flex flex-col'>

        {
            !loading ? (
                listing ? (
                <section className='max-w-7xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-start'>
                    {/* Left: listing media and details */}
                    <div className='flex flex-col gap-8'>
                        <div className='mb-2'>
                            <button
                                type='button'
                                onClick={() => navigate(-1)}
                                className='inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow-md'
                            >
                                <ArrowLeft size={16} />
                                <span className='font-semibold'>Back</span>
                            </button>
                        </div>

                        <div className='space-y-6'>
                            <div
                                className="overflow-hidden rounded-2xl h-[520px] relative bg-gray-100"
                                onMouseEnter={stopCarousel}
                                onMouseLeave={startCarousel}
                            >
                                <img
                                    key={mainImage}
                                    src={getCurrentImage()}
                                    alt={`Image of ${listing.title}`} 
                                    onLoad={() => setImageLoaded(true)}
                                    className={`object-cover w-full h-full transition-opacity duration-700 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                />

                                <div className='absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-md'>
                                    {`${mainImage + 1}/${listing.images.length}`}
                                </div>

                                <button
                                    type='button'
                                    onClick={() => { stopCarousel(); setMainImage(prev => (prev - 1 + listing.images.length) % listing.images.length); }}
                                    className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition'
                                    aria-label='Previous image'
                                >
                                    <ArrowLeft size={20} />
                                </button>

                                <button
                                    type='button'
                                    onClick={() => { stopCarousel(); setMainImage(prev => (prev + 1) % listing.images.length); }}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition'
                                    aria-label='Next image'
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className='flex gap-4 overflow-x-auto py-2 items-center'
                                onMouseEnter={stopCarousel}
                                onMouseLeave={startCarousel}
                            >
                                {
                                    listing.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => { stopCarousel(); setMainImage(index) }}
                                            className={`flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out focus:outline-none ${mainImage === index ? 'ring-2 ring-offset-2 ring-primary scale-105 shadow-lg' : 'opacity-80 hover:opacity-100 hover:scale-105'}`}
                                        >
                                            <img
                                                src={image}
                                                className='object-cover w-full h-full'
                                                alt={`Thumbnail ${index + 1} of ${listing.title}`} 
                                            />
                                        </button>
                                    ))
                                }
                            </div>

                            <div className='flex items-start justify-between gap-6'>
                                <h1 className='text-4xl font-semibold text-black leading-tight'>
                                    {listing.title}
                                </h1>

                                <h3 className='text-primary font-bold text-2xl'>
                                    {formatPrice(listing.price)}
                                </h3>
                            </div>

                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col md:flex-row justify-between items-start gap-6'>
                                    <div className='min-w-0 md:flex-1'>
                                        <p className={`text-md leading-7 text-gray-700 ${isDescriptionExpanded ? '' : 'line-clamp-3'}`}>
                                            {listing.description}
                                        </p>

                                        {listing.description.length > 220 ? (
                                            <button
                                                type='button'
                                                className='mt-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300'
                                                onClick={() => setIsDescriptionExpanded(prev => !prev)}
                                            >
                                                {isDescriptionExpanded ? 'See less' : 'See more'}
                                            </button>
                                        ) : null}
                                    </div>

                                    <div className='flex gap-3 items-start text-sm text-gray-700'>
                                        <MapPin color='#ff6666' size={20}/>
                                        <p>
                                            {`${listing.location}, ${listing.city}, ${listing.state}`}
                                        </p>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                                    <IconSet title={'Property Type'} icon={<Home color='gray' size={20}/>} value={listing.property_type} />
                                    <IconSet title={'Bedrooms'} icon={<Bed color='gray' size={20}/>} value={listing.bedrooms} />
                                    <IconSet title={'Bathrooms'} icon={<Bath color='gray' size={20}/>} value={listing.bathrooms} />
                                    <IconSet title={'Square Feet'} icon={<Maximize color='gray' size={20}/>} value={`${listing.sizeSqft}`} />
                                </div>

                                <div className='flex flex-wrap gap-2'>
                                    {listing.features.map((feature, index) => (
                                        <span key={index} className='inline-flex items-center px-4 py-1.5 border border-secondary/40 text-2xs uppercase tracking-wide-2 font-regular text-text-secondary rounded-none bg-secondary/5 hover:bg-secondary/10 hover:border-secondary transition-all duration-300 cursor-default'>
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {userIsAdmin ? (
                                    <div className='flex gap-4'>
                                        <Button variant='secondary' type='button' onClick={() => navigate(`/listings/${listingId}/edit`)}>
                                            Edit
                                            <Pencil color='black' size={18} />
                                        </Button>

                                        {listingId && <DeleteListingsModal listingId={listingId} showToast={showToast}/>} 
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    {/* Right: sidebar with contact / agent info (placeholder) */}
                    <aside className='space-y-6'>
                        <div className='bg-white/95 rounded-2xl p-6 border border-slate-100 shadow-sm'>
                            <div className='flex items-center gap-4'>
                                <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold'>A</div>
                                <div>
                                    <p className='font-semibold'>TopNotch City</p>
                                    <p className='text-sm text-gray-500'>Agent</p>
                                </div>
                            </div>

                            <div className='mt-4 flex gap-3'>
                                <button className='px-3 py-2 bg-neutral-900 text-white rounded-md text-sm'>View Portfolio</button>
                                <button className='px-3 py-2 border border-neutral-300 rounded-md text-sm text-neutral-600'>Chat Agent</button>
                            </div>
                        </div>

                        <div className='bg-white/95 rounded-2xl p-6 border border-slate-100 shadow-sm'>
                            <h4 className='text-lg font-semibold text-black mb-2'>Let's Talk</h4>
                            <p className='text-sm text-gray-600 mb-4'>Fill out this form and we'll get back to you.</p>

                            <div className='flex flex-col gap-3'>
                                <input placeholder='Full Name' className='w-full rounded-md border px-3 py-2' />
                                <input placeholder='Email' className='w-full rounded-md border px-3 py-2' />
                                <button className='mt-2 px-4 py-2 bg-orange-500 text-white rounded-md'>Send</button>
                            </div>
                        </div>
                    </aside>
                </section>
            ) : (
                <p>
                    Listing not found
                </p>
            )
            ) : <h2>Loading ...</h2>
        }

        { ToastComponent }

        <Footer />
    </section>
  )
}

export default ListingDetails
