import { MapPin, BedDouble, Home } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setFilter } from '@/state/slices/filters/filterSlice';
import PriceFilter from './priceFilter';
import { listingFeatures, property_types } from '@/data/ListingData';

const SearchPanel = () => {
    const dispatch = useDispatch();

    const handleKeywordChange = (value: string) => {
        dispatch(setFilter({ key: 'keyword', value}))
    }

    const handleCategoryChange = (value: string) => {
        dispatch(setFilter({ key: 'property_type', value}))
    }

    const handleFeatureChange = (value: string) => {
        dispatch(setFilter({ key: 'feature', value}))
    }

    return (
        <section className='flex flex-wrap border max-w-[90%] rounded mx-auto p-8 bg-accent  backdrop-blur-lg'>
            <div className='flex gap-8 items-center'>

                {/* Keyword and location search Bar */}
                <section className='flex flex-col gap-2'>
                    <article className='flex items-center gap-2'>
                        <MapPin color='oklch(0.45 0.16 35)' size={24} />
                        <h4 className='font-bold text-primary'>Locations</h4>
                    </article>
                    
                    <div className='flex items-center gap-4 rounded w-full bg-white shadow-lg py-3 p-4 hover:outline'>

                        <input
                            type="text"
                            title='search'
                            className='w-full outline-0'
                            placeholder='Type a location or keywords'
                            onChange={(e) => {
                                handleKeywordChange(e.target.value)
                            }}
                        />
                    </div>
                </section>

                {/* Category search Bar */}
                <section className='flex flex-col gap-2'>
                    <article className='flex items-center gap-2'>
                        <Home color='oklch(0.45 0.16 35)' size={24} />
                        <h4 className='font-bold text-primary'>Looking for</h4>
                    </article>
                    
                    <div className='flex items-center gap-4 rounded w-full bg-white shadow-lg py-3 p-4 hover:outline'>

                        <select title='category' name="category" className='w-full outline-0' onChange={(e) => {
                            handleCategoryChange(e.target.value)
                        }}>
                            <option value="">Search for a category</option>
                            {
                                property_types.map((property, index) => (
                                    <option key={index} value="">{property}</option>
                                ))
                            }
                        </select>
                    </div>
                </section>

                {/* Features search Bar */}
                <section className='flex flex-col gap-2'>
                    <article className='flex items-center gap-2'>
                        <Home color='oklch(0.45 0.16 35)' size={24} />
                        <h4 className='font-bold text-primary'>Looking for</h4>
                    </article>
                    
                    <div className='flex items-center gap-4 rounded w-full bg-white shadow-lg py-3 p-4 hover:outline'>

                        <select title='category' name="category" className='w-full outline-0' onChange={(e) => {
                            handleFeatureChange(e.target.value)
                        }}>
                            <option value="">Select features</option>
                            {
                                listingFeatures.map((feature, index) => (
                                    <option key={index} value="">{feature}</option>
                                ))
                            }
                        </select>
                    </div>
                </section>

                {/* no. of bedrooms search Bar */}
                <section className='flex flex-col gap-2'>
                    <article className='flex items-center gap-2'>
                        <BedDouble color='oklch(0.45 0.16 35)' size={24} />
                        <h4 className='font-bold text-primary'>Number of Bedrooms</h4>
                    </article>
                    
                    <div className='flex items-center gap-4 rounded w-full bg-white shadow-lg py-3 p-4 hover:outline'>

                        <input
                            type="number"
                            title='search'
                            className='w-full outline-0'
                            placeholder='Select no. of bedrooms'
                            onChange={(e) => {
                                handleKeywordChange(e.target.value)
                            }}
                        />
                    </div>
                </section>

                {/* All Price filters */}
                    <div className='flex gap-4'>

                        {/* Min Price Filter */}
                        <div>
                            <p className='text-md text-primary'>Min. Price</p>

                            <PriceFilter 
                                label='Enter Minimum Price'
                                filterKey='minPrice'
                            />
                        </div>

                        {/* Max Price Filter */}
                        <div>
                            <p className='text-md text-primary'>Max. Price</p>
                            <PriceFilter 
                            label='Enter Maximum Price'
                            filterKey='maxPrice'
                        />
                        </div>
                    </div>
            </div>


        </section>
    )
}

export default SearchPanel;