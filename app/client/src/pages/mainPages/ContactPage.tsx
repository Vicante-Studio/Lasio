import ContactForm from '@/components/features/forms/ContactForm'
import HeroSection from '@/layouts/HeroSection'

const ContactPage = () => {
  return (
    <main className='mx-auto px-6 py-20'>
      <HeroSection
        eyebrow='Contact'
        title={'Contact Lasio'}
        subtitle={'Questions about listings, partnerships, or demos — send us a message.'}
        bgImage={'/Images/Hero/hero7.webp'}
      />

      <section className=' max-w-7xl text-center mx-auto mb-12'>
        <ContactForm />
      </section>
    </main>
  )
}

export default ContactPage
