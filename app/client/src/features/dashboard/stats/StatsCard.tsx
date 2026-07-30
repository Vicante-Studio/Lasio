import type { StatsCardType } from '@/types/DashboardElements'

const StatCard = ({title, Icon, value, additionalInfo}: StatsCardType) => {
    return(
        <div className='rounded-xl border border-gray-200 bg-white p-6'>
            <div>
                <Icon size={16} className="text-gray-800"/>
                <p className='text-sm text-gray-500'>{title}</p>
            </div>
            <h3 className='mt-3 text-3xl font-bold text-gray-900'>{value}</h3>
            <p className='mt-2 text-sm text-gray-500'>{additionalInfo}</p>
        </div>
    )
}

export default StatCard