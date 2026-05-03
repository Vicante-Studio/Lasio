import { Analytics } from '@vercel/analytics/react'
import HomePage from './pages/HomePage'

const App = () => {

  return (
    <>
      <HomePage />
      <Analytics />
    </>
  )
}

export default App
