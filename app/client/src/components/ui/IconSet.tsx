import type { IconSetProps } from '../../types/UiTypes'

const IconSet = ({ title, icon, value }: IconSetProps) => {
  return (
    <article className='w-fit'>
        <div className='flex gap-2'>
            {icon}
            <p className='font-bold'>
                {value}
            </p>
        </div>
        <p>{title}</p>
    </article>
    )
}

export default IconSet
