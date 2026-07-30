import type { LucideIcon } from 'lucide-react';

export interface SideBarProps {
    title: string;
    description: string;
    Icon: LucideIcon
}

export interface StatsCardType {
    title: string;
    value: string;
    Icon: LucideIcon;
    additionalInfo: string;
}