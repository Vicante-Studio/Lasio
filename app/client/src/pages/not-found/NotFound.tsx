import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/buttons/button'

const NotFound = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-6'>
        <section className='flex flex-col gap-12 items-center max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl text-center text-primary'>
                <span className=''>Oops...</span> looks like you've taken a wrong turn. 
            </h1>

            <p className='font-bold text-center text-base sm:text-lg'>
                The page you're looking for doesn't exist. <br /> Don't worry, it happens to the best of us! <br /> Let's get you back on track.
            </p>

                <Link to='/'> 
                   <Button variant='default' type='button'>
                        Go back home
                    </Button>
                </Link>      
            
        </section>  
    </section>
  )
}

export default NotFound
