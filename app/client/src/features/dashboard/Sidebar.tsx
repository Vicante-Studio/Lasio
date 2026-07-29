import type { SideBarProps } from '@/types/DashboardElements'

const SideBar = ({ title, description, Icon }: SideBarProps) => {
    return (
        <div>
            <div className='flex gap-2 items-center'>
                <Icon size={16} className="text-gray-800" />
                <p>{title}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default SideBar