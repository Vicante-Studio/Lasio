import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])
  
  return (
    <main>
      <Navbar />
        <section className='flex flex-col gap-10'>
            {children}
        </section>
      <Footer />
    </main>
  )
}

export default MainLayout;
