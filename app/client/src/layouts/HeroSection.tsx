import { Button } from '@/components/ui/Buttons/button'
import Divider from '../components/ui/Divider'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

type CTA = { label: string; to?: string; variant?: 'default' | 'outline' }

type HeroProps = {
    eyebrow?: string
    title?: React.ReactNode
    subtitle?: React.ReactNode
    ctas?: CTA[]
    bgImage?: string
}

const HeroSection = ({ eyebrow = 'Premium Real Estate', title, subtitle, ctas, bgImage = '/Images/Hero/hero11.webp' }: HeroProps) => {
    const navigate = useNavigate()

    return (
        <section className='relative w-full overflow-hidden h-[70vh] sm:h-[75vh] md:h-screen' style={{ minHeight: '70vh' }}>
            <div className='absolute inset-0'>
                <img src={bgImage} className='absolute z-0 inset-0 w-full h-full object-cover' alt='Hero section Image' />

                <motion.div
                    className='absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-black/10'
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeIn' }}
                />
            </div>

            <motion.article
                className='relative z-20 flex min-h-full items-center justify-center text-left px-6 gap-6'
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                <article className='flex flex-col gap-6 items-start max-w-[min(90vw,56rem)] md:max-w-[60%]'>
                    <p className='text-secondary uppercase tracking-widest text-xs md:text-sm font-medium text-left'>{eyebrow}</p>

                    <h1 className='text-left text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight'>
                        {title ?? (
                            <>
                                Find Verified Homes <span className='font-bold italic'>Faster.</span>
                            </>
                        )}
                    </h1>

                    <Divider />

                    <p className='text-neutral-300 text-sm md:text-base font-light leading-relaxed max-w-full sm:max-w-[80%]'>
                        {subtitle ?? 'Explore verified real estate and architectural listings designed for modern buyers and sellers. Every property is presented with clarity, helping you discover spaces that match your lifestyle.'}
                    </p>

                    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-4 justify-center md:justify-start'>
                        {ctas?.map((cta, i) => (
                            <Button
                                key={i}
                                variant={cta.variant === 'outline' ? 'outline' : 'default'}
                                onClick={() => {
                                    if (!cta.to) return
                                    if (cta.to.startsWith('mailto:')) return window.location.assign(cta.to)
                                    navigate(cta.to)
                                }}
                            >
                                {cta.label}
                            </Button>
                        ))}
                    </div>
                </article>
            </motion.article>
        </section>
    )
}

export default HeroSection