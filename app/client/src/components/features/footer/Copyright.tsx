
const Copyright = () => {
    const currentYear = new Date().getFullYear()

  return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-fit mx-auto *:text-center'>
        {/* Copyright */}
        <p className='text-xs sm:text-sm text-[rgba(255,255,255,0.8)]'>
            © {currentYear} Lasio. All rights reserved. Developed by{' '}
            <span className='text-primary font-semibold'>Vicante Studio</span>
        </p>
    </div> 
  )
}

export default Copyright
