import { Button } from '@/components/ui/Buttons/button'
import Divider from '../components/ui/Divider';

const HeroSection = () => {
    return(
        <section className='h-screen relative overflow-hidden'>
            <div className='absolute inset-0'>
                <img src="../../Images/Hero/hero11.webp" className='absolute -z-1 w-full h-full object-cover' alt="Hero section Image" />
                {/* Gradient overlay — more premium than flat black */}
                <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30' />
            </div>
 
            {/* Centered content */}
            <article className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 gap-6'>
                
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

                        <Button variant='default' type='button'>
                            Explore Listings
                        </Button>

                        <Button variant='outline' type='button'>
                            Learn More
                        </Button>
                    </div>
                </article>

            </article>
            

        </section>
    )
}

export default HeroSection;