import type { StatsType } from '@/types/UiTypes'
import { DollarSign, Home, MapPin, MessagesSquare } from 'lucide-react'

const Stats = () => {
  const stats: StatsType[] = [
    {
      title: 'Total Properties',
      value: '1,245',
      icon: 'Home',
    },
    {
      title: 'Average Price',
      value: '$350,000',
      icon: 'DollarSign',
    },
    {
      title: 'Cities',
      value: '300',
      icon: 'MapPin',
    },
    {
      title: 'Positive Reviews',
      value: '1300',
      icon: 'MessagesSquare',
    },
  ]

  const iconMap = {
    Home: Home,
    DollarSign: DollarSign,
    MapPin: MapPin,
    MessagesSquare: MessagesSquare,
  }

  return (
    <section className='relative w-full h-fit'>
      {/* Background Image */}
      <img
        src='../../Images/Hero/hero12.webp'
        alt='Stats background'
        className='w-full h-full object-cover block'
      />

      {/* Overlay with Stats */}
      <article className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex items-center justify-center'>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 lg:p-12 place-items-center'>
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <article
                key={index}
                className='flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-white w-full'
              >
                {/* Icon - Responsive size */}
                <Icon
                  size={32}
                  color='oklch(0.75 0.08 65)'
                  className='sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'
                  strokeWidth={1.5}
                />

                {/* Value - Responsive text */}
                <h4 className='text-secondary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>
                  {`${stat.value}+`}
                </h4>

                {/* Title - Responsive text */}
                <p className='text-white font-light text-xs sm:text-sm md:text-base lg:text-lg text-center line-clamp-2'>
                  {stat.title}
                </p>
              </article>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default Stats