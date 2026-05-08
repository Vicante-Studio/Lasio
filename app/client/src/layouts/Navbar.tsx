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

    // Navigation
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false)

    const [mobileIsOpened, setMobileIsOpened] = useState<boolean>(false)


    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <>
            {/* DESKTOP */}
            {/* placeholder to prevent content jump when navbar becomes fixed */}
            <div className='h-0'/>

            <nav className={`h-fit py-2 px-8 md:flex items-center fixed justify-between z-100 left-0 right-0 transition-all duration-500 ease-in-out w-full hidden  ${
                isSticky
                ? 'fixed py-3 transition-all duration-200 ease-in-out bg-[rgba(133,107,71,0.8)] *:text-black backdrop-blur-lg'
                : 'mb-20'
            }`}>

                {/* NAVIGATION Links */}
                <div className='flex justify-between w-1/3'>
                    <NavLink children='home' to='/' />  

                    <NavLink children='about' to='/about' />  
                </div> 

                {/* Placeholder Logo */}
                <NavLink to={'/'} className='w-1/3'>
                    <h3 className='text-primary font-serif underline underline-offset-8 decoration-secondary border-t-2 border-primary border-x-2 pl-2 pr-2.5 flex-1'>
                        LS
                    </h3>
                </NavLink>             
                
                <div className='w-1/3 flex justify-between items-center'>
                    <NavLink children='listings' to='/listings' />

                    {
                        isAuthenticated ? (
                            <ProfileMenu />
                        ) : (
                            <Button variant='outline' onClick={() => navigate('/login')}>
                                Log In
                            </Button>
                        )
                    }
                </div>

            </nav>

            {/* MOBILE */}
            {
                mobileIsOpened ? (
                    <>
                        {/* MOBILE Nav - Opened */}
                        <nav className={`flex flex-col h-[40vh] items-center justify-between z-100 md:hidden transition-all duration-200 ease-in-out ${
                            isSticky
                            ? 'fixed py-3 bg-[rgba(133,107,71,1)] w-full backdrop-blur-lg'
                            : 'mb-20'
                        }`}>
                            <div className='flex justify-between w-full items-center'>
                                {/* Placeholder Logo */}
                                <NavLink to={'/'} className='w-1/3'>
                                    <h3 className='text-primary font-serif underline underline-offset-8 decoration-secondary border-t-2 border-primary border-x-2 pl-2 pr-2.5 flex-1'>
                                        LS
                                    </h3>
                                </NavLink>  
                                
                                <Button onClick={() => setMobileIsOpened(false)}>
                                    <XIcon size={24} color='#000'/>
                                </Button>
                            </div>

                            {/* NAVIGATION Links */}
                            <NavLink children='home' to='/' />  

                            <NavLink children='about' to='/about' />             
                            
                            <NavLink children='listings' to='/listings' />

                            {
                                isAuthenticated ? (
                                    <ProfileMenu />
                                ) : (
                                    <Button variant='outline' onClick={() => navigate('/login')}>
                                        Log In
                                    </Button>
                                )
                            }
                        </nav>
                    </>
                ) : (
                    <>
                        {/* MOBILE Nav - Closed */}
                        <nav className={`flex items-center justify-between z-100 md:hidden py-3 transition-all duration-200 ease-in-out ${
                            isSticky
                            ? 'fixed py-3 bg-[rgba(133,107,71,1)] w-full backdrop-blur-lg'
                            : null
                        }`}>
                            {/* Placeholder Logo */}
                            <NavLink to={'/'} className='w-1/3'>
                                <h3 className='text-primary font-serif underline underline-offset-8 decoration-secondary border-t-2 border-primary border-x-2 pl-2 pr-2.5 flex-1'>
                                    LS
                                </h3>
                            </NavLink>  

                            <Button onClick={() => setMobileIsOpened(true)}>
                                <MenuIcon size={24} color='#000'/>
                            </Button>
                        </nav>
                    </>
                )
            }

            
        </>
    )
}

export default Navbar