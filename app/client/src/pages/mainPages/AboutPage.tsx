import { motion } from 'framer-motion'
import ContactForm from '@/components/features/forms/ContactForm'
import HeroSection from '@/layouts/HeroSection'

const AboutPage = () => {
  return (
    <main className='flex flex-col gap-24'>
      <HeroSection
        eyebrow='About Lasio'
        bgImage='/Images/Hero/hero5.webp'
        title={
          <>
            Modern real estate storytelling for <span className='text-secondary'>investors and operators.</span>
          </>
        }
        subtitle={'Lasio is a polished demo platform built to showcase premium listings, highlight value, and help teams present their capabilities to investors and partners.'}
        ctas={[{ label: 'Browse Listings', to: '/listings' }, { label: 'Contact Us', to: 'mailto:hello@lasio.com', variant: 'outline' }]}
      />

      <section className='max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start'>
        <motion.div 
          className='space-y-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.aside 
          className='rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-10 text-white shadow-2xl shadow-slate-900/10'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
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
        </motion.aside>
      </section>

      <section className='bg-slate-950/5 py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <motion.div 
            className='space-y-4 text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>What we offer</p>
            <h2 className='text-3xl sm:text-4xl font-semibold text-slate-900'>Everything you need to present property with confidence.</h2>
            <p className='text-slate-600'>Lasio demonstrates how a strong digital presence can support lead generation, investor engagement, and portfolio growth.</p>
          </motion.div>

          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            {[
              { title: 'Premium listing pages', desc: 'Showcase assets with images, pricing, location, and key details in a modern layout.' },
              { title: 'Search and discovery', desc: 'Make it easy for buyers and investors to explore properties and compare options.' },
              { title: 'Demo-ready UI', desc: 'A polished, investor-facing experience that feels production ready while staying lightweight.' }
            ].map((item, i) => (
              <motion.article 
                key={i}
                className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className='text-xl font-semibold text-slate-900'>{item.title}</h3>
                <p className='mt-3 text-slate-600'>{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center'>
          <motion.div 
            className='space-y-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>By the numbers</p>
            <h2 className='text-3xl sm:text-4xl font-semibold text-slate-900'>A demo platform with real estate focus.</h2>
            <p className='text-slate-600'>Lasio may be illustrative, but the theme and structure are built for real estate storytelling and investor presentation.</p>
          </motion.div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {[
              { value: '100+', label: 'Investor-ready listings' },
              { value: '24/7', label: 'Agency-grade presentation' },
              { value: '3x', label: 'Faster investor review' },
              { value: 'Ready', label: 'Demo-ready design and workflow' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className='rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className='text-3xl font-semibold text-slate-900'>{stat.value}</p>
                <p className='mt-3 text-slate-600'>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>Contact</p>
            <h2 className='text-2xl font-semibold'>Reach out to the team</h2>
            <p className='text-slate-600'>For demos, partnerships, or general inquiries, send us a message below.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default AboutPage
