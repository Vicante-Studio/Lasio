import { Button } from '@/components/ui/Buttons/button'
import NavLink from '../components/ui/links/NavLink'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectIsAuthenticated } from '@/selectors/authSelectors'
import { useSelector } from 'react-redux'
import ProfileMenu from '@/components/features/profile/ProfileMenu'
import { MenuIcon, XIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const navigate = useNavigate()
    
    const [isSticky, setIsSticky] = useState<boolean>(false)
    const [mobileIsOpened, setMobileIsOpened] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Shared nav link classes
    const navLinkClass = "hover:text-secondary transition-colors duration-300 ease-out text-white"

    return (
        <main className='relative'>
            {/* Spacer to prevent content jump */}
            <div className='h-0' />

            {/* DESKTOP NAVBAR */}
            <motion.nav
                animate={{
                    backgroundColor: isSticky ? 'rgba(20,15,10,0.9)' : 'rgba(20,15,10,0.7)',
                    width: isSticky ? '80%' : '100%',
                    top: isSticky ? 16 : 0,
                    left: isSticky ? '10%' : '0%',
                    right: isSticky ? '10%' : '0%',
                    borderRadius: isSticky ? 4 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className='hidden md:flex items-center justify-between fixed px-8 py-2 z-100 shadow-lg backdrop-blur-md border-b border-white/10'
            >
                {/* Left navigation links */}
                <NavLink to='/' color='inherit'>
                    <span className={navLinkClass}>Home</span>
                </NavLink>
                <NavLink to='/about' color='inherit'>
                    <span className={navLinkClass}>About</span>
                </NavLink>

                {/* Center Logo */}
                <NavLink to='/' className='w-1/3 flex justify-center'>
                    <h3
                        className={`font-serif text-lg font-bold underline underline-offset-4 decoration-secondary border-t-2 border-x-2 border-current px-3 py-1 transition-all duration-500 ease-out text-white
`}
                    >
                        LS
                    </h3>
                </NavLink>

                {/* Right Navigation Links */}
                <NavLink to='/listings' color='inherit'>
                    <span className={navLinkClass}>Listings</span>
                </NavLink>

                {isAuthenticated ? (
                    <ProfileMenu />
                ) : (
                    <Button
                        variant='outline'
                        onClick={() => navigate('/login')}
                        className={`transition-all duration-300 ease-out border-secondary text-white hover:bg-secondary hover:text-black`}
                    >
                        Log In
                    </Button>
                )}
            </motion.nav>

            {/* MOBILE NAVBAR */}
            {mobileIsOpened ? (
                // Mobile Open State
                <motion.nav
                    className={`fixed top-0 left-0 right-0 flex flex-col z-100 md:hidden w-full transition-all duration-300 ease-out backdrop-blur-md`}
                    animate={{
                        backgroundColor: isSticky ? 'rgba(20,15,10,0.8)' : 'rgba(20,15,10,0.4)',
                        width: isSticky ? '90%' : '100%',
                        top: isSticky ? 8 : 0,
                        left: isSticky ? '5%' : '0%',
                        right: isSticky ? '5%' : '0%',
                        borderRadius: isSticky ? 2 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    {/* Mobile Header with Close Button */}
                    <div className='flex items-center justify-between px-4 py-4 border-b border-white/10'>
                        <NavLink to='/' className='shrink-0'>
                            <h3
                                className={`font-serif text-lg font-bold underline underline-offset-4 decoration-secondary border-t-2 border-x-2 border-current px-2 py-1 text-white`}
                            >
                                LS
                            </h3>
                        </NavLink>

                        <button
                            type='button'
                            onClick={() => setMobileIsOpened(false)}
                            className={`p-2 rounded-lg transition-colors duration-200 ${
                                isSticky
                                    ? 'hover:bg-black/10'
                                    : 'hover:bg-white/10'
                            }`}
                            aria-label='Close menu'
                        >
                            <XIcon
                                size={24}
                                color={'#fff'}
                                strokeWidth={2.5}
                            />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div
                        className={`flex flex-col gap-4 px-4 py-6 text-white`}
                    >
                        <NavLink to='/' color='inherit'>
                            <span className='text-base font-medium hover:text-secondary transition-colors duration-300'>
                                Home
                            </span>
                        </NavLink>
                        <NavLink to='/about' color='inherit'>
                            <span className='text-base font-medium hover:text-secondary transition-colors duration-300'>
                                About
                            </span>
                        </NavLink>
                        <NavLink to='/listings' color='inherit'>
                            <span className='text-base font-medium hover:text-secondary transition-colors duration-300'>
                                Listings
                            </span>
                        </NavLink>

                        <div className='pt-4 border-t border-white/10'>
                            {isAuthenticated ? (
                                <ProfileMenu />
                            ) : (
                                <Button
                                    variant='outline'
                                    onClick={() => {
                                        navigate('/login')
                                        setMobileIsOpened(false)
                                    }}
                                    className={`w-full transition-all duration-300 ease-out border-primary text-white hover:text-white hover:bg-primary`}
                                >
                                    Log In
                                </Button>
                            )}
                        </div>
                    </div>
                </motion.nav>
            ) : (
                // Mobile Closed State (Hamburger)
                <motion.nav
                    className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-50 md:hidden transition-all duration-300 ease-out backdrop-blur-md`}
                    animate={{
                        backgroundColor: isSticky ? 'rgba(20,15,10,0.8)' : 'rgba(20,15,10,0.4)',
                        width: isSticky ? '90%' : '100%',
                        top: isSticky ? 8 : 0,
                        left: isSticky ? '5%' : '0%',
                        right: isSticky ? '5%' : '0%',
                        borderRadius: isSticky ? 2 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    <NavLink to='/' className='shrink-0'>
                        <h3
                            className={`font-serif text-lg font-bold underline underline-offset-4 decoration-secondary border-t-2 border-x-2 border-current px-2 py-1 transition-all duration-500 ease-out text-white`}
                        >
                            LS
                        </h3>
                    </NavLink>

                    <button
                        type='button'
                        onClick={() => setMobileIsOpened(true)}
                        className={`p-2 rounded-lg transition-colors duration-200 hover:bg-white/10`}
                        aria-label='Open menu'
                    >
                        <MenuIcon
                            size={24}
                            color={'#fff'}
                            strokeWidth={2.5}
                        />
                    </button>
                </motion.nav>
            )}
        </main>
    )
}

export default Navbar