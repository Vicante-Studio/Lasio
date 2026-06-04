import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-button-primary text-white'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20'>
        {/* Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <div className='mb-6'>
              <h3 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
                LASIO
              </h3>
              <p className='text-sm sm:text-base text-white leading-relaxed'>
                A modern property listing platform connecting buyers, sellers, and agents seamlessly across Nigeria.
              </p>
            </div>

            {/* Contact Info */}
            <div className='space-y-3 mt-6'>
              <div className='flex items-start gap-3'>
                <Mail size={18} className='text-primary flex-shrink-0 mt-1' />
                <a
                  href='mailto:hello@lasio.com'
                  className='text-xs sm:text-sm text-text-secondary hover:text-primary transition-colors'
                >
                  hello@lasio.com
                </a>
              </div>
              <div className='flex items-start gap-3'>
                <Phone size={18} className='text-primary flex-shrink-0 mt-1' />
                <a
                  href='tel:+2341234567890'
                  className='text-xs sm:text-sm text-text-secondary hover:text-primary transition-colors'
                >
                  +234 (0) 123 456 7890
                </a>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin size={18} className='text-primary flex-shrink-0 mt-1' />
                <p className='text-xs sm:text-sm text-text-secondary'>
                  Lagos & Abuja, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-base sm:text-lg font-bold text-text-primary mb-4 md:mb-6'>
              Quick Links
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              <li>
                <Link
                  to='/'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/listings'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link
                  to='/createListing'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  List Property
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h4 className='text-base sm:text-lg font-bold text-text-primary mb-4 md:mb-6'>
              Legal
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              <li>
                <Link
                  to='/privacy'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to='/terms'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to='/cookies'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className='text-base sm:text-lg font-bold text-text-primary mb-4 md:mb-6'>
              Support
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              <li>
                <Link
                  to='/help'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to='/faq'
                  className='text-sm sm:text-base text-text-secondary hover:text-primary transition-colors duration-200'
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-neutral-300 mb-8 md:mb-10'></div>

        {/* Bottom Section */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6'>
          {/* Copyright */}
          <p className='text-xs sm:text-sm text-text-secondary'>
            © {currentYear} Lasio. All rights reserved. Developed by{' '}
            <span className='text-primary font-semibold'>Vicante Studio</span>
          </p>

          {/* Social Links */}
          <div className='flex items-center gap-4 md:gap-6'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary hover:text-primary transition-colors duration-200'
              aria-label='Facebook'
            >
              <Facebook size={20} />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary hover:text-primary transition-colors duration-200'
              aria-label='Instagram'
            >
              <Instagram size={20} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary hover:text-primary transition-colors duration-200'
              aria-label='Twitter'
            >
              <Twitter size={20} />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary hover:text-primary transition-colors duration-200'
              aria-label='LinkedIn'
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer