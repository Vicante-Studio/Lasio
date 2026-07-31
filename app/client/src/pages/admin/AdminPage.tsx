import { selectCurrentUser } from '@/selectors/authSelectors'
import { useSelector } from 'react-redux'
import SideBar from '@/features/dashboard/Sidebar'
import { sideBarContent } from '@/data/sideBarData'
import { getCurrentDate } from '@/utils/getCurrentDate'
import StatsSection from '@/features/dashboard/stats/StatsSection'
import TableSection from '@/features/dashboard/table/TableSection'

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
                        sideBarContent.map((content, index) => (
                            <SideBar key={index} title={content.title} description={content.description} Icon={content.Icon}/>
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
                <StatsSection />

                {/* Listings Table */}
                <TableSection />

            </section>
        </main>
    )
}

export default AdminPage