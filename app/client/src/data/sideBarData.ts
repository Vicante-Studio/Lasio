import type { SideBarProps } from '@/types/DashboardElements';
import { Building, LayoutDashboardIcon, User, Plus } from 'lucide-react'

export const sideBarContent: SideBarProps[] = [
        {
            title: 'Dashboard',
            description: 'Overview and key metrics.',
            Icon: LayoutDashboardIcon,
            link: `/admin`
        },
        {
            title: 'Listings',
            description: 'View, search, edit, and delete properties.',
            Icon: Building,
            link: `staffListingspage`
        },
        {
            title: 'Add listing',
            description: 'Create a new property listing.',
            Icon: Plus,
            link: `/createListing`
        },
        {
            title: 'Profile',
            description: 'Agent information and account settings.',
            Icon: User,
            link: `/profile`
        },
    ]