import type { SideBarProps } from '@/types/DashboardElements'

const SideBar = ({ title, description, Icon }: SideBarProps) => {
    return (
        <div className='hover:bg-yellow-100 hover:cursor-pointer p-2 transition ease-in-out duration-500'>
            <div className='flex gap-2 items-center'>
                <Icon size={16} className="text-gray-800" />
                <h4 className='font-bold'>{title}</h4>
            </div>
            <p className='text-gray-800'>{description}</p>
        </div>
    )
}

export default SideBar