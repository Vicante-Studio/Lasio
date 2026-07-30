const StatsSection = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>

            <div className='rounded-xl border border-gray-200 bg-white p-6'>
                <p className='text-sm text-gray-500'>Total Listings</p>
                <h3 className='mt-3 text-3xl font-bold text-gray-900'>24</h3>
                <p className='mt-2 text-sm text-gray-500'>
                    3 added this month
                </p>
            </div>

            <div className='rounded-xl border border-gray-200 bg-white p-6'>
                <p className='text-sm text-gray-500'>Available Listings</p>
                <h3 className='mt-3 text-3xl font-bold text-gray-900'>18</h3>
                <p className='mt-2 text-sm text-gray-500'>
                Ready for enquiries
                </p>
            </div>

            <div className='rounded-xl border border-gray-200 bg-white p-6'>
                <p className='text-sm text-gray-500'>Featured Listings</p>
                <h3 className='mt-3 text-3xl font-bold text-gray-900'>6</h3>
                <p className='mt-2 text-sm text-gray-500'>
                Currently highlighted
                </p>
            </div>

        </section>
    )
}

export default StatsSection