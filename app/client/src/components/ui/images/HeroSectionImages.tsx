import type { HeroSectionImageProps } from '../../../types/UiTypes'

const HeroSectionImage = ({ src }: HeroSectionImageProps) => {
  return (
    <img
        src={src}
        alt="Hero Section Image"
        className='absolute -z-1 w-full h-full object-cover'></img>
  )
}

export default HeroSectionImage
