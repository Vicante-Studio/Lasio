import type { SideBarProps } from '@/types/DashboardElements'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ title, description, Icon, link }: SideBarProps) => {
    const navigate = useNavigate()
    return (
        <div className='hover:bg-yellow-100 hover:cursor-pointer p-2 transition ease-in-out duration-500' onClick={() => navigate(`${link}`)}>
            <div className='flex gap-2 items-center'>
                <Icon size={16} className="text-gray-800" />
                <h4 className='font-bold'>{title}</h4>
            </div>
            <p className='text-gray-800'>{description}</p>
        </div>
    )
}

export default SideBar