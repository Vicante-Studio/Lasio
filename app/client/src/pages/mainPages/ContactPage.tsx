import ContactForm from '@/components/features/forms/ContactForm'
import HeroSection from '@/layouts/HeroSection'

const ContactPage = () => {
  return (
    <main className='mx-auto w-full flex flex-col gap-20'>
      <HeroSection
        eyebrow='Contact'
        title={'Contact Lasio'}
        subtitle={'Questions about listings, partnerships, or demos — send us a message.'}
        bgImage={'/Images/Hero/hero7.webp'}
      />

      <section className='w-full max-w-7xl mx-auto text-left mb-12 px-4 sm:px-6 lg:px-12'>
        <section className='max-w-3xl text-left mb-12'>
        <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>Get in touch</p>
        <p className='text-slate-600 mt-2'>Questions about listings, partnerships, or demos — send us a message.</p>
      </section>
        <ContactForm />
      </section>
    </main>
  )
}

export default ContactPage
