import supabaseAdmin from '../config/supabaseAdmin.js';
import { cleanListingFilters, Listing } from '../types/listing.types.js';

export const listingRepository = {
    // Insert new listing into database
    async insertNewListing(listingData: Listing) {
        const { data, error } = await supabaseAdmin.from('listings').insert(listingData).select()

        if(error) throw new Error(error.message)

        return data
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
    },

    // Find one listing by it's ID
    async findOne(id: string){
        const { data, error } = await supabaseAdmin.from('listings').select('*').eq('id', id).single()

        if(error) throw new Error(error.message)

        return data
    },

    // Update listing by id
    async updateListing(id: string, updatedData: Partial<Omit<Listing, 'id' | 'createdAt' >>) {
        const { data, error } = await supabaseAdmin.from('listings').update(updatedData).eq('id', id).select().single()

        if(error) throw new Error(error.message)

        return data
    },

    // Delete listing by id
    async deleteListing(id: string) {
        const { data, error } = await supabaseAdmin.from('listings').delete().eq('id', id).select()

        if(error) throw new Error(error.message)

        if(!data || data.length === 0) {
            throw new Error('Listing not found')
        }

        return true
    },

    // Get top locations
    async findTopLocations () {
        const { data, error } = await supabaseAdmin.from('top_locations').select('*').limit(10)

        if(error) {
            throw new Error(error.message)
        }

        return data
    }
}