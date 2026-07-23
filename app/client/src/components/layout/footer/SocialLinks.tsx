import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react'


const SocialLinks = () => {
  return (
    <div className='flex items-center gap-4 md:gap-6 w-fit mx-auto'>
        <a
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
        aria-label='Facebook'
        >
        <FacebookLogoIcon size={20} />
        </a>
        <a
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
        aria-label='Instagram'
        >
        <InstagramLogoIcon size={20} />
        </a>
        <a
        href='https://twitter.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
        aria-label='Twitter'
        >
        <TwitterLogoIcon size={20} />
        </a>
        <a
        href='https://linkedin.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[rgba(255,255,255,0.8)] hover:text-primary transition-colors duration-200'
        aria-label='LinkedIn'
        >
        <LinkedinLogoIcon size={20} />
        </a>
    </div>
  )
}

export default SocialLinks
