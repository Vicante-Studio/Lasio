import { Mail, MapPin, Phone } from 'lucide-react'

const ContactInfo = () => {
  return (
    <div className='space-y-3 mt-6'
    >
        <div className='flex items-start gap-3'>
            <Mail size={18} className='text-primary shrink-0 mt-1' />
            <a
                href='mailto:hello@lasio.com'
                className='text-xs sm:text-sm text-white hover:text-primary transition-colors'
            >
                hello@lasio.com
            </a>
        </div>

        <div className='flex items-start gap-3'>
            <Phone size={18} className='text-primary shrink-0 mt-1' />
            <a
                href='tel:+2341234567890'
                className='text-xs sm:text-sm text-white hover:text-primary transition-colors'
            >
                +234 (0) 123 456 7890
            </a>
        </div>

        <div className='flex items-start gap-3'>
            <MapPin size={18} className='text-primary shrink-0 mt-1' />
            <p className='text-xs sm:text-sm text-white'>
                Lagos & Abuja, Nigeria
            </p>
        </div>
    </div>
  )
}

export default ContactInfo
