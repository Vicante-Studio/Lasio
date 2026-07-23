import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <div>
        <h4 className='text-base sm:text-lg font-bold text-white mb-4 md:mb-6'>
            Support
        </h4>
        <ul className='space-y-2 md:space-y-3'>
            <li>
            <Link
                to='/help'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                Help Center
            </Link>
            </li>
            <li>
            <Link
                to='/contact'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                Contact Us
            </Link>
            </li>
            <li>
            <Link
                to='/faq'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                FAQ
            </Link>
            </li>
        </ul>
        </div>
  )
}

export default Support
