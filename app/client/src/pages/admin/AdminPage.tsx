import { selectCurrentUser } from '@/selectors/authSelectors'
import { useSelector } from 'react-redux'
import SideBar from '@/features/dashboard/Sidebar'
import { sideBarContent } from '@/data/sideBarData'
import { getCurrentDate } from '@/utils/getCurrentDate'

const AdminPage = () => {
    const user = useSelector(selectCurrentUser)
    const firstName: string = user?.full_name.split(' ')[0] ?? 'User'

    
    return(
        <main className='min-h-screen flex'>

            {/* Side bar */}
            <aside className='w-64 bg-white border-r border-gray-200 px-5 py-6'>
                <div className='mb-8'>
                    <h2 className='text-xl font-bold text-gray-900'>Lasio</h2>
                    <p className='text-sm text-gray-500'>Real estate dashboard</p>
                </div>
                <nav className="space-y-2">
                    {
                        sideBarContent.map(content => (
                            <SideBar title={content.title} description={content.description} Icon={content.Icon}/>
                        ))
                    }
                </nav>
            </aside>

            {/* Main Content */}
            <section className='flex-1 p-8'>

                {/* Top Bar */}
                <header className='flex items-center justify-between border-b border-gray-200 pb-5 mb-8'>
                <h1 className='text-xl font-semibold text-gray-900'>Dashboard</h1>

                <div className='flex items-center gap-4'>
                    <input
                    type='text'
                    placeholder='Search properties...'
                    className='w-80 rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />

                    <div className='h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium'>
                    {firstName.charAt(0)}
                    </div>
                </div>
                </header>

                {/* Welcome Section */}
                <section className='flex items-center justify-between mb-8'>
                <div>
                    <h2 className='text-3xl font-bold text-gray-900'>
                    Welcome back, {firstName}
                    </h2>

                    <p className='mt-1 text-gray-600'>
                    Here's a quick look at your properties and activity.
                    </p>
                </div>

                <div className='rounded-lg border border-gray-200 bg-white px-4 py-3'>
                    <p className='text-sm text-gray-500'>Today</p>
                    <p className='font-medium text-gray-900'>{getCurrentDate()}</p>
                </div>
                </section>

                {/* Stats Cards */}
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

                {/* Listings Table */}
                <section className='rounded-xl border border-gray-200 bg-white p-6'>
                <div className='flex items-center justify-between mb-6'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                    Recent Property Listings
                    </h3>

                    <button className='text-sm font-medium text-blue-600 hover:text-blue-700'>
                    View all
                    </button>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                    <thead>
                        <tr className='border-b border-gray-200 text-left text-gray-500'>
                        <th className='pb-3 font-medium'>Property</th>
                        <th className='pb-3 font-medium'>Location</th>
                        <th className='pb-3 font-medium'>Price</th>
                        <th className='pb-3 font-medium'>Status</th>
                        <th className='pb-3 font-medium'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className='border-b border-gray-100'>
                        <td className='py-4 font-medium text-gray-900'>
                            Luxury Apartment
                        </td>
                        <td className='py-4 text-gray-600'>
                            Port Harcourt
                        </td>
                        <td className='py-4 text-gray-900'>
                            ₦120,000,000
                        </td>
                        <td className='py-4'>
                            <span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700'>
                            Available
                            </span>
                        </td>
                        <td className='py-4'>
                            <button className='text-blue-600 hover:text-blue-700 mr-3'>
                            Edit
                            </button>
                            <button className='text-red-600 hover:text-red-700'>
                            Delete
                            </button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </section>

            </section>
        </main>
    )
}

export default AdminPage