import { Link } from 'react-router-dom'

const QuickLinks = () => {
  return (
    <div>
        <h4 className='text-base sm:text-lg font-bold text-white
            mb-4 md:mb-6'>
            Quick Links
        </h4>
        <ul className='space-y-2 md:space-y-3'>
            <li>
            <Link
                to='/'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                Home
            </Link>
            </li>
            <li>
            <Link
                to='/listings'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                Browse Listings
            </Link>
            </li>
            <li>
            <Link
                to='/createListing'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                List Property
            </Link>
            </li>
            <li>
            <Link
                to='/about'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                About Us
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default QuickLinks
