
export interface Listing{
    id: string;
    title: string;
    price: number;
    location: string;
    city: string;
    state: string;

    propertyType: string;

    bedrooms: number;
    bathrooms: number;
    sizeSqft: number;

    images: string[];

    description: string;
    
    features: string[];
    
    
    
    status: "For Sale" | "For Rent";
    
    createdAt: string;
}

export interface listingFilters {
    title?: string
    city?: string
    state?: string
    location?: string
    status?: string
    minPrice?: string
    maxPrice?: string
    propertyType?: string
}