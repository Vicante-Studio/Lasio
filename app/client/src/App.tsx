import { Analytics } from '@vercel/analytics/react'
import HomePage from './pages/mainPages/HomePage'

const App = () => {

  return (
    <>
      <HomePage />
      <Analytics />
    </>
  )
}

export default App
