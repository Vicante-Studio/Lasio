import supabase from '../config/supabase.js';
import { Listing, listingFilters } from '../types/listing.types.js';
import parsePrice from '../utils/parsePriceFilter.js';

// Create listings
export const createListing = async (listingData: Omit<Listing, 'id' | 'createdAt'>) => {
    const { data, error } = await supabase.from('listings').insert(listingData).select().single();

    if(error) throw new Error(error.message)

    return data
}

// Get all Listings
export const getAllListings = async (queryData: listingFilters) => {
    const { title, city, state, location, status, minPrice, maxPrice, propertyType } = queryData

        let query = supabase.from('listings').select('*')

        if (title) query = query.ilike('title', `%${title}%`)
        if (city) query = query.ilike('city', `%${city}%`)
        if (state) query = query.ilike('state', `%${state}%`)
        if (location) query = query.ilike('location', `%${location}%`)
        if (status) query = query.ilike('status', `%${status}%`)
        if (propertyType) query = query.ilike('propertyType', `%${propertyType}%`)
        if (minPrice) query = query.gte('price', parsePrice(minPrice))
        if (maxPrice) query = query.lte('price', parsePrice(maxPrice))

        const { data, error } = await query

        if (error) throw error

        return data
}