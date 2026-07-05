import { Button } from '@/components/ui/Buttons/button'
import PageLink from '../../components/ui/links/PageLink'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <main className='flex flex-col gap-24'>
      <section className='relative min-h-screen overflow-hidden'>
        <img
          src='/Images/Hero/hero5.webp'
          alt='Lasio real estate showcase'
          className='absolute inset-0 h-screen w-full object-cover'
        />
        <motion.div
         initial={{ opacity: 0.5 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.2, ease: 'easeIn' }}
         className='absolute inset-0 bg-black/70'
        />
        <div className='relative z-10 mx-auto flex min-h-screen max-w-[90%] items-center px-6  text-white'>
          <motion.div
            className='max-w-[70%] absolute bottom-17 left-0 flex flex-col gap-2'
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <span className='inline-flex items-center rounded w-fit border border-secondary/40 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.35em] text-secondary'>
              About Lasio
            </span>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight [word-spacing:0.1em]'>
              Modern real estate storytelling for <span className='text-secondary'>investors and operators.</span>
            </h1>
            <p className='text-slate-200 max-w-[50%]'>
              Lasio is a polished demo platform built to showcase premium listings, highlight value, and help teams present their capabilities to investors and partners.
            </p>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
              <PageLink to='/listings'>Browse Listings</PageLink>
              <Button
                variant='outline'
                className='text-white border-white/20 hover:border-secondary hover:bg-secondary hover:text-black'
                onClick={() => window.location.assign('mailto:hello@lasio.com')}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start'>
        <div className='space-y-6'>
          <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>
            Our story
          </p>
          <h2 className='text-3xl sm:text-4xl font-semibold text-primary leading-10'>
            Built as a demo-ready real estate experience with investor focus.
          </h2>
          <p className='text-lg leading-8 text-slate-700'>
            Lasio brings property search, landing pages, and investment-ready listing details together in a modern interface. It is designed to show your ability to deliver polished real estate technology and digital presentation.
          </p>

          <div className='grid gap-4 sm:grid-cols-2'>
            <article className='rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm'>
              <h3 className='text-xl font-semibold text-slate-900'>Investor-first pages</h3>
              <p className='mt-3 text-slate-600'>Cleanly structured property details help buyers and partners understand value quickly.</p>
            </article>
            <article className='rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm'>
              <h3 className='text-xl font-semibold text-slate-900'>Fast discovery</h3>
              <p className='mt-3 text-slate-600'>Search and filtered listings make it easy to find the right asset among opportunities.</p>
            </article>
          </div>
        </div>

        <aside className='rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-10 text-white shadow-2xl shadow-slate-900/10'>
          <p className='text-sm uppercase tracking-[0.35em] text-secondary'>Company values</p>
          <h3 className='mt-4 text-2xl font-semibold text-white'>Built for trust, transparency, and momentum.</h3>
          <p className='mt-4 text-slate-300'>
            Lasio is created to show how a modern real estate tool can combine clean, beautiful presentation with the data and workflow investors expect.
          </p>
          <div className='mt-8 space-y-4'>
            <div className='rounded-3xl bg-white/5 p-5'>
              <p className='font-semibold text-white'>Clear communication</p>
              <p className='mt-2 text-slate-300'>Every listing and section is built to elevate the story behind the asset.</p>
            </div>
            <div className='rounded-3xl bg-white/5 p-5'>
              <p className='font-semibold text-white'>Design with purpose</p>
              <p className='mt-2 text-slate-300'>The platform reflects a premium brand experience for buyers and investors.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className='bg-slate-950/5 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='space-y-4 text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>What we offer</p>
            <h2 className='text-3xl sm:text-4xl font-semibold text-slate-900'>Everything you need to present property with confidence.</h2>
            <p className='text-slate-600'>Lasio demonstrates how a strong digital presence can support lead generation, investor engagement, and portfolio growth.</p>
          </div>

          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            <article className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'>
              <h3 className='text-xl font-semibold text-slate-900'>Premium listing pages</h3>
              <p className='mt-3 text-slate-600'>Showcase assets with images, pricing, location, and key details in a modern layout.</p>
            </article>
            <article className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'>
              <h3 className='text-xl font-semibold text-slate-900'>Search and discovery</h3>
              <p className='mt-3 text-slate-600'>Make it easy for buyers and investors to explore properties and compare options.</p>
            </article>
            <article className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'>
              <h3 className='text-xl font-semibold text-slate-900'>Demo-ready UI</h3>
              <p className='mt-3 text-slate-600'>A polished, investor-facing experience that feels production ready while staying lightweight.</p>
            </article>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center'>
          <div className='space-y-6'>
            <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>By the numbers</p>
            <h2 className='text-3xl sm:text-4xl font-semibold text-slate-900'>A demo platform with real estate focus.</h2>
            <p className='text-slate-600'>Lasio may be illustrative, but the theme and structure are built for real estate storytelling and investor presentation.</p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'>
              <p className='text-3xl font-semibold text-slate-900'>100+</p>
              <p className='mt-3 text-slate-600'>Investor-ready listings</p>
            </div>
            <div className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'>
              <p className='text-3xl font-semibold text-slate-900'>24/7</p>
              <p className='mt-3 text-slate-600'>Agency-grade presentation</p>
            </div>
            <div className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'>
              <p className='text-3xl font-semibold text-slate-900'>3x</p>
              <p className='mt-3 text-slate-600'>Faster investor review</p>
            </div>
            <div className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'>
              <p className='text-3xl font-semibold text-slate-900'>Ready</p>
              <p className='mt-3 text-slate-600'>Demo-ready design and workflow</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage