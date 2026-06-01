import type { StatsType } from '@/types/UiTypes'
import { DollarSign, Home, MapPin, MessagesSquare } from 'lucide-react'

const Stats = () => {
    const stats: StatsType[] = [
        {
            title: 'Total Properties',
            value: '1,245',
            icon: 'Home'
        },
        {
            title: 'Average Price',
            value: '$350,000',
            icon: 'DollarSign'
        },
        {
            title: 'Cities',
            value: '300',
            icon: 'MapPin'
        },
        {
            title: 'Positive Reviews',
            value: '1300',
            icon: 'MessagesSquare'
        },
    ]

    const iconMap = {
        Home: Home,
        DollarSign: DollarSign,
        MapPin: MapPin,
        MessagesSquare: MessagesSquare
    }

  return (
    <section className='relative '>
        <img src="../../Images/Hero/hero12.webp" alt="" />
    
        <article className='p-8 w-full h-full flex justify-between items-center absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] *:text-white'>
            {
                stats.map((stat) => {
                    const Icon = iconMap[stat.icon]
                    return (
                        <article className='flex flex-col items-center'>
                            <Icon size={24} color='white'/>
                            <h4 className='text-secondary font-bold text-3xl'>
                                {`${stat.value}+`}
                            </h4>
                            <p className='text-white'>
                                {`${stat.title}`}
                            </p>
                        </article>
                    )
                })
            }
        </article>  

    </section>
  )
}

export default Stats
