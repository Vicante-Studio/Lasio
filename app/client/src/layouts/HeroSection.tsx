import { Button } from '@/components/ui/Buttons/button'
import Divider from '../components/ui/Divider';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

const HeroSection = () => {
    const navigate = useNavigate()

    return(
        <section className='h-screen relative overflow-hidden'>
            <div className='absolute inset-0'>
                <img src="../../Images/Hero/hero11.webp" className='absolute -z-1 w-full h-full object-cover' alt="Hero section Image" />

                {/* Gradient overlay — more premium than flat black */}
                <motion.div
                    className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10'
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeIn' }}
                />
            </div>
 
            {/* Hero content */}
            <motion.article
                className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 gap-6'
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                
                <article className='flex flex-col gap-6 items-start absolute bottom-6 left-6 max-w-[90%] md:max-w-[60%]'>
                    {/* Eyebrow label */}
                    <p className='text-secondary uppercase tracking-widest text-xs md:text-sm font-medium text-left'>
                        Premium Real Estate
                    </p>

                    {/* Main heading */}
                    <h1 className='text-left'>
                        Find Verified Homes{' '}
                        <span className='font-bold italic'>
                            Faster.
                        </span>
                    </h1>

                    {/* Divider */}
                    <Divider />

                    {/* Subheading */}
                    <p className='text-neutral-300 text-sm md:text-base font-light leading-relaxed max-w-[80%] text-left'>
                        Explore verified real estate and architectural listings designed for modern buyers and sellers. Every property is presented with clarity, helping you discover spaces that match your lifestyle.
                    </p>

                    {/* CTA */}
                    <div className='flex gap-4 mt-4'>

                        <Button variant='default' type='button' onClick={() => navigate('/listings')}>
                            Explore Listings
                        </Button>

                        <Button variant='outline' type='button' onClick={() => navigate('/about')}>
                            Learn More
                        </Button>
                    </div>
                </article>

            </motion.article>
            

        </section>
    )
}

export default HeroSection;