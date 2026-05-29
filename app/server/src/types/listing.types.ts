
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
    
    createdAt: string;

    agent_id: string
}

export interface listingFilters {
    keyword?: string
    status?: string
    minPrice?: string
    maxPrice?: string
    property_type?: string
    features?: string
    bedrooms?: string
}