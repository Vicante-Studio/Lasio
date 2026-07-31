import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

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
