
export interface Listing{
    id: string;
    title: string;
    price: number;
    location: string;
    city: string;
    state: string;
    property_type: string;
    bedrooms: number;
    bathrooms: number;
    sizeSqft: number;
    images: string[];
    description: string;
    features: string[];
    status: "For Sale" | "For Rent";
    agent_id: string;
    createdAt: string;
    is_available: boolean
}

export interface ListingContextType{
    listings: Listing[];
    setListings: React.Dispatch<React.SetStateAction<Listing[]>>;
}

export type ListingCardProps = Partial<Listing>

export interface DeleteListingsModalProps {
    listingId: string
    showToast: (message: string, type: 'success' | 'error') => void
    open: boolean
    onOpenChange: (open: boolean) => void
    onDeleted?: (listingId: string) => void
}

export interface TopLocationsType {
    location: string
    total: number
    image: string
}