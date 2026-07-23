import { Analytics } from '@vercel/analytics/react'
import HomePage from '@/pages/home/HomePage'

const App = () => {

  return (
    <>
      <HomePage />
      <Analytics />
    </>
  )
}

export default App
