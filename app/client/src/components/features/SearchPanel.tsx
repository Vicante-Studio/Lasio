import { MapPin } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setFilter } from '@/state/slices/filters/filterSlice';
import PriceFilter from './priceFilter';

const SearchPanel = () => {
    const dispatch = useDispatch();

    const handleKeywordChange = (value: string) => {
        dispatch(setFilter({ key: 'keyword', value}))
    }

    return (
        <section className='flex justify-center'>
            <div className='flex flex-col gap-4 w-[80%] max-w-7xl items-center'>

                {/* Keyword and location search Bar */}
                <section className='w-full flex flex-col gap-2'>
                    <article className='flex items-center gap-2'>
                        <MapPin color='oklch(0.45 0.16 35)' size={24} />
                        <h4 className='font-bold text-primary'>Locations</h4>
                    </article>
                    
                    <div className='flex items-center gap-4 rounded-md w-full bg-white shadow-lg py-4 p-6 hover:outline'>

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

                {/* Price Filter Panel */}
                <section className='flex  flex-col items-start gap-4 w-full'>

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

                </section>
            </div>


        </section>
    )
}

export default SearchPanel;