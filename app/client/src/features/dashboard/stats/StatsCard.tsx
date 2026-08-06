import type { StatsCardType } from '@/types/DashboardElements'

const StatsCard = ({title, icon, value}: StatsCardType) => {
    return(
        <div className='rounded-xl border border-gray-200 bg-white p-6 w-fit'>
            <div className='flex gap-2'>
                {icon}
                <p className={`text-sm font-bold`}>{title}</p>
            </div>
            <h3 className={`mt-3 text-3xl font-bold ${title === 'Total Revenue' ? 'text-green-600' : 'text-gray-900'}`}>{value}</h3>
        </div>
    )
}

export default StatsCard