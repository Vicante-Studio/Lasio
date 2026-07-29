import { selectCurrentUser } from '@/selectors/authSelectors'
import { useSelector } from 'react-redux'
import SideBar from '@/features/dashboard/Sidebar'
import { sideBarContent } from '@/data/sideBarData'

const AdminPage = () => {
    const user = useSelector(selectCurrentUser)
    const currentDate = new Date().toDateString()
    const firstName = user?.full_name.split(' ')[1]

    
    return(
        <main className='p-8 w-full h-full flex'>
            {/* Side bar */}
            <aside className='border-r border-gray-300 h-screen flex flex-col gap-8 pr-4 max-w-[20%] '>
                {
                    sideBarContent.map(content => (
                        <SideBar title={content.title} description={content.description} Icon={content.Icon}/>
                    ))
                }
            </aside>

           <section>
                {/* Top bar */}
                <section className='border-b-2 border-gray-300'>
                    <h4>Dashboard</h4>
                </section>
                <section className='flex justify-between'>
                    <div>
                        <p>Welcome back, {firstName}</p>
                        <p>Here's a quick look at your properties and activity.</p>
                    </div>
                    <div>
                        <p>{currentDate}</p>
                        <div></div>
                    </div>
                </section>

                {/* Main content Area */}
                <section>

                </section>
           </section>
        </main>
    )
}

export default AdminPage