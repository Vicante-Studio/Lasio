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
    // Prevent browser from restoring previous scroll position on navigation
    if ('scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual'
      } catch (e) {
        // ignore
      }
    }

    // Jump to top immediately when route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
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
