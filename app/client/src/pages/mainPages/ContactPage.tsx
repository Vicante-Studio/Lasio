import ContactForm from '@/components/features/forms/ContactForm'

const ContactPage = () => {
  return (
    <main className='mx-auto px-6 py-20'>
      <section className=' max-w-7xl text-center mx-auto mb-12'>
        <p className='text-sm font-semibold uppercase tracking-[0.35em] text-secondary'>Get in touch</p>
        <h1 className='text-3xl sm:text-4xl font-semibold mt-4 text-primary'>Contact Lasio</h1>
        <p className='text-slate-600 mt-2'>Questions about listings, partnerships, or demos — send us a message.</p>
      </section>

      <section>
        <ContactForm />
      </section>
    </main>
  )
}

export default ContactPage
