import type { StatsCardType } from '@/types/DashboardElements';
import { Building, User } from 'lucide-react';

export const statsCardData: StatsCardType[] = [
    {
        title: 'Total Listings',
        Icon: Building, 
        value: '14', 
        additionalInfo: 'To do'
    },
    {
        title: '',
        Icon: User, 
        value: '14', 
        additionalInfo: 'To do'
    },
    {
        title: '',
        Icon: User, 
        value: '14', 
        additionalInfo: 'To do'
    }
]