import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm = ({ onSubmit } : { onSubmit?: (data: FormState) => void }) => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) onSubmit(form)
    // Placeholder: send to API or mailto in real app
    console.log('Contact form submitted', form)
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-3xl w-full mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-sm'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <label className='flex flex-col'>
          <span className='text-sm font-medium text-slate-700'>Name</span>
          <input name='name' value={form.name} onChange={handleChange} required className='mt-2 p-3 rounded-lg border border-slate-200' />
        </label>

        <label className='flex flex-col'>
          <span className='text-sm font-medium text-slate-700'>Email</span>
          <input name='email' type='email' value={form.email} onChange={handleChange} required className='mt-2 p-3 rounded-lg border border-slate-200' />
        </label>

        <label className='flex flex-col sm:col-span-2'>
          <span className='text-sm font-medium text-slate-700'>Phone</span>
          <input name='phone' value={form.phone} onChange={handleChange} className='mt-2 p-3 rounded-lg border border-slate-200' />
        </label>

        <label className='flex flex-col sm:col-span-2'>
          <span className='text-sm font-medium text-slate-700'>Message</span>
          <textarea name='message' value={form.message} onChange={handleChange} required rows={6} className='mt-2 p-3 rounded-lg border border-slate-200' />
        </label>
      </div>

      <div className='mt-6 flex items-center justify-between'>
        <button type='submit' className='rounded-lg bg-secondary text-black px-6 py-3 font-semibold hover:opacity-95'>
          Send Message
        </button>
        {sent && <span className='text-sm text-green-600'>Message sent — thanks!</span>}
      </div>
    </form>
  )
}

export default ContactForm
