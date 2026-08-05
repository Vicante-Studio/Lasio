import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Listing } from './Listing';

export interface SideBarProps {
    title: string;
    description: string;
    Icon: LucideIcon
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
    showToast: (message: string, type: 'success' | 'error') => void
    onListingDeleted?: (listingId: string) => void
}
