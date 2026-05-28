import { Button } from '@/components/ui/Buttons/button'
import NavLink from '../components/ui/links/NavLink'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectIsAuthenticated } from '@/selectors/authSelectors'
import { useSelector } from 'react-redux'
import ProfileMenu from '@/components/features/profile/ProfileMenu'
import { MenuIcon, XIcon } from 'lucide-react'

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
    const navLinkClass = "text-sm font-medium tracking-wide hover:text-secondary transition-colors duration-300 ease-out"

    return (
        <main className='relative'>
            {/* Spacer to prevent content jump */}
            <div className='h-0' />

            {/* DESKTOP NAVBAR */}
            <nav
                className={`hidden md:flex items-center justify-between fixed top-0 left-0 right-0 px-8 py-5 z-100 transition-all duration-500 ease-out w-full ${
                    isSticky
                        ? 'bg-[rgba(133,107,71,0.95)] shadow-lg backdrop-blur-md *:text-black'
                        : 'bg-[rgba(20,15,10,0.55)] shadow-lg border-b border-white/10 backdrop-blur-xl *:text-white'
                }`}
            >
                {/* Left Navigation Links */}
                <div className='flex gap-8 w-1/3'>
                    <NavLink to='/' color='inherit'>
                        <span className={navLinkClass}>home</span>
                    </NavLink>
                    <NavLink to='/about' color='inherit'>
                        <span className={navLinkClass}>about</span>
                    </NavLink>
                </div>

                {/* Center Logo */}
                <NavLink to='/' className='w-1/3 flex justify-center'>
                    <h3
                        className={`font-serif text-lg font-bold underline underline-offset-4 decoration-secondary border-t-2 border-x-2 border-current px-3 py-1 transition-all duration-500 ease-out ${
                            isSticky ? 'text-black' : 'text-white'
                        }`}
                    >
                        LS
                    </h3>
                </NavLink>

                {/* Right Navigation Links */}
                <div className='flex gap-6 w-1/3 justify-end items-center'>
                    <NavLink to='/listings' color='inherit'>
                        <span className={navLinkClass}>listings</span>
                    </NavLink>

                    {isAuthenticated ? (
                        <ProfileMenu />
                    ) : (
                        <Button
                            variant='outline'
                            onClick={() => navigate('/login')}
                            className={`transition-all duration-300 ease-out ${
                                isSticky
                                    ? 'border-black text-black hover:bg-black hover:text-white'
                                    : 'border-white text-white hover:bg-white hover:text-black'
                            }`}
                        >
                            Log In
                        </Button>
                    )}
                </div>
            </nav>

            {/* MOBILE NAVBAR */}
            {mobileIsOpened ? (
                // Mobile Open State
                <nav
                    className={`fixed top-0 left-0 right-0 flex flex-col z-100 md:hidden w-full transition-all duration-300 ease-out ${
                        isSticky
                            ? 'bg-[rgba(133,107,71,1)] shadow-lg backdrop-blur-md'
                            : 'bg-[rgba(137,111,74,0.95)] backdrop-blur-md'
                    }`}
                >
                    {/* Mobile Header with Close Button */}
                    <div className='flex items-center justify-between px-4 py-4 border-b border-white/10'>
                        <NavLink to='/' className='shrink-0'>
                            <h3
                                className={`font-serif text-lg font-bold underline underline-offset-4 decoration-secondary border-t-2 border-x-2 border-current px-2 py-1 ${
                                    isSticky ? 'text-black' : 'text-white'
                                }`}
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
                                color={isSticky ? '#000' : '#fff'}
                                strokeWidth={2.5}
                            />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div
                        className={`flex flex-col gap-4 px-4 py-6 ${
                            isSticky ? 'text-black' : 'text-white'
                        }`}
                    >
                        <NavLink to='/' color='inherit'>
                            <span className='text-base font-medium hover:text-secondary transition-colors duration-300'>
                                home
                            </span>
                        </NavLink>
                        <NavLink to='/about' color='inherit'>
                            <span className='text-base font-medium hover:text-secondary transition-colors duration-300'>
                                about
                            </span>
                        </NavLink>
                        <NavLink to='/listings' color='inherit'>
                            <span className='text-base font-medium hover:text-secondary transition-colors duration-300'>
                                listings
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
                                    className={`w-full transition-all duration-300 ease-out ${
                                        isSticky
                                            ? 'border-black text-black hover:bg-black hover:text-white'
                                            : 'border-white text-white hover:bg-white hover:text-black'
                                    }`}
                                >
                                    Log In
                                </Button>
                            )}
                        </div>
                    </div>
                </nav>
            ) : (
                // Mobile Closed State (Hamburger)
                <nav
                    className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-50 md:hidden transition-all duration-300 ease-out ${
                        isSticky
                            ? 'bg-[rgba(133,107,71,0.95)] shadow-lg backdrop-blur-md'
                            : 'bg-[rgba(20,15,10,0.65)] shadow-lg border-b border-white/10 backdrop-blur-xl'
                    }`}
                >
                    <NavLink to='/' className='shrink-0'>
                        <h3
                            className={`font-serif text-lg font-bold underline underline-offset-4 decoration-secondary border-t-2 border-x-2 border-current px-2 py-1 transition-all duration-500 ease-out ${
                                isSticky ? 'text-black' : 'text-white'
                            }`}
                        >
                            LS
                        </h3>
                    </NavLink>

                    <button
                        type='button'
                        onClick={() => setMobileIsOpened(true)}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                            isSticky ? 'hover:bg-black/10' : 'hover:bg-white/10'
                        }`}
                        aria-label='Open menu'
                    >
                        <MenuIcon
                            size={24}
                            color={isSticky ? '#000' : '#fff'}
                            strokeWidth={2.5}
                        />
                    </button>
                </nav>
            )}
        </main>
    )
}

export default Navbar