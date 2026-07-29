import supabaseAdmin from '../config/supabaseAdmin.js';
import { cleanListingFilters, Listing } from '../types/listing.types.js';

export const listingRepository = {
    // Insert new listing into database
    async insertNewListing(listingData: Listing) {
        const { data, error } = await supabaseAdmin.from('listings').insert(listingData).select()

        return { data, error }
    },
    
    // Find all listings
    async findAllListings(filters: cleanListingFilters) {
        let query = supabaseAdmin.from('listings').select('*');

        if (filters.keyword) {
            const term = `%${filters.keyword}%`;
            query = query.or(
                `title.ilike.${term},city.ilike.${term},state.ilike.${term},location.ilike.${term}`
            );
        }

        if (filters.minPrice !== undefined) query = query.gte('price', filters.minPrice);
        if (filters.maxPrice !== undefined) query = query.lte('price', filters.maxPrice);
        if (filters.status) query = query.ilike('status', `%${filters.status}%`);
        if (filters.propertyType) query = query.ilike('property_type', `%${filters.propertyType}%`);
        if (filters.features) query = query.contains('features', [filters.features]);
        if (filters.bedrooms !== undefined) query = query.eq('bedrooms', filters.bedrooms);

        const { data, error } = await query;
        if (error) throw error;

        return data || [];
    }
}