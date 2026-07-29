import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/App.css'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HomePage from '@/pages/home/HomePage'
import ListingDetails from '@/pages/listings/ListingDetails'
import MainLayout from '@/components/layout/MainLayout'
import NotFound from '@/pages/not-found/NotFound'
import ListingsPage from '@/pages/listings/ListingsPage'
import AboutPage from '@/pages/about/AboutPage'
import ContactPage from '@/pages/contact/ContactPage'
import CreateListingPage from '@/pages/listings/CreateListingPage'
import EditListing from '@/features/listings/components/EditListing'
import App from '@/app/App'
import SignUpPage from '@/pages/auth/signUpPage'
import LoginPage from '@/pages/auth/LoginPage'
import AdminPage from './pages/admin/AdminPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { index: true, element: <App />},
      { index: false, path: '/listings', element: <ListingsPage />},
      { index: false, path: '/home', element: <HomePage />},
      { index: false, path: '/about', element: <AboutPage />},
      { index: false, path: '/contact', element: <ContactPage />},
      { index: false, path: '/createListing', element: <CreateListingPage />},
    ],
    errorElement: <NotFound />
  },

  // Auth pages
  {
    path: '/signup', element: <SignUpPage />
  },
  {
    path: '/login', element: <LoginPage />
  },
  // Listing pages
  {
    path: 'listings/:listingId', element: <ListingDetails />
  },
  {
    path: 'listings/:listingId/edit', element: <EditListing />
  },

  // Admin Page
  { index: false, path: '/admin', element: <AdminPage />},

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
