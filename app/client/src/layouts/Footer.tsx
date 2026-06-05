import BrandInfo from '@/components/features/footer/BrandInfo'
import ContactInfo from '@/components/features/footer/ContactInfo'
import Copyright from '@/components/features/footer/Copyright'
import Legals from '@/components/features/footer/Legals'
import QuickLinks from '@/components/features/footer/QuickLinks'
import SocialLinks from '@/components/features/footer/SocialLinks'
import Support from '@/components/features/footer/Support'

const Footer = () => {

  return (
    <footer className='bg-button-primary text-white'>

      {/* Main Footer Content */}
      <div className='max-w-[80%] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20'>

        {/* Divider */}
       <div className='h-px w-full bg-neutral-300 mb-8 md:mb-10'></div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16 items-start w-full'>
            
          {/* Brand and Contact Info */}
          <div className='flex flex-col'>
            <BrandInfo />
            
            <ContactInfo />
          </div>

          {/* QuickLinks, Legals, Support */}
          <QuickLinks />
          <Legals />
          <Support />
        </div>

        {/* Social Links and Copyright */}
        <div className='flex flex-col gap-2'>
          <SocialLinks />
          <Copyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer