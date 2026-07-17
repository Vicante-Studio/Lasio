import { Link } from 'react-router-dom'

const Legals = () => {
  return (
    <div>
        <h4 className='text-base sm:text-lg font-bold text-white mb-2 md:mb-6'>
            Legal
        </h4>
        <ul className='space-y-2 md:space-y-3'>
            <li>
            <Link
                to='/privacy'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                Privacy Policy
            </Link>
            </li>
            <li>
            <Link
                to='/terms'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                Terms & Conditions
            </Link>
            </li>
            <li>
            <Link
                to='/cookies'
                className='text-sm sm:text-base text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
            >
                Cookie Policy
            </Link>
            </li>
        </ul>
        </div>
  )
}

export default Legals
