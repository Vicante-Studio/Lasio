import api from '@/config/api/axiosInstance'
import type { DashboardStatsDataType, StatsCardType } from '@/types/DashboardElements'
import { useEffect, useState, type ReactNode } from 'react'
import StatsCard from './StatsCard'
import { Building, CircleCheck } from 'lucide-react'
import { formatPrice } from '@/utils/formatPrice'

const StatsSection = () => {
    const [dashboardStats, setDashboardStats] = useState<DashboardStatsDataType | null>(null)

    useEffect(() => {
        const fetchStats = async () => {
        const token = localStorage.getItem('token')

            try {
                const { data } = await api.get(
                    `/api/dashboard/stats`,
                    { headers: { Authorization: `Bearer ${token}` } }
                ) 

                setDashboardStats (data.data)
            } catch (error) {
                    console.log(error)
                    return null
                }
        }

        fetchStats()
    }, [])

    const dashboardStatCards: StatsCardType[] = [
        {
            title: 'Total Revenue',
            value: `${formatPrice(dashboardStats?.total_revenue as number)}`,
            icon: <span className='font-bold text-gray-500'>₦</span>
        },
        {
            title: 'Total Listings',
            value: `${dashboardStats?.total_listings} properties`,
            icon:<Building size={16} className="text-gray-800"/>
        },
        {
            title: 'Available Listings',
            value: `${dashboardStats?.available_listings} available`,
            icon: <CircleCheck size={16} className="text-gray-800"/>
        }
    ]
    
    return (
        <>
            {
                dashboardStats ? (
                    <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>
                        {
                            dashboardStats && dashboardStatCards.map((stat,key) => (
                                <StatsCard key={key} title={stat.title as string} value={stat.value as string} icon={stat.icon as ReactNode}/>
                            ))
                        }
                    </section>
                ) : (
                    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                            <div className="h-32 rounded-xl bg-gray-200 animate-pulse" />
                            <div className="h-32 rounded-xl bg-gray-200 animate-pulse" />
                            <div className="h-32 rounded-xl bg-gray-200 animate-pulse" />
                    </section>
                )
            }
        </>
    )
}

export default StatsSection