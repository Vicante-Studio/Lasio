
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
    agent_id: string;
    is_available: boolean
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

export interface cleanListingFilters {
    keyword?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
    propertyType?: string;
    features?: string;
    bedrooms?: number;
}