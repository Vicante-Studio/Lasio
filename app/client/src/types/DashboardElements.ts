import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Listing } from './Listing';

export interface SideBarProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    link: string;
}

export interface StatsCardType {
    title: string;
    value: string;
    icon: ReactNode;
}

export interface DashboardStatsDataType {
    total_revenue: number
    available_listings: number
    total_listings: number
}

export interface DashboardTableProps {
    staffListings: Listing[]
    onListingDeleted?: (listingId: string) => void
}
