import supabase from '../config/supabase.js';
import { Listing } from '../types/listing.types.js';

export const createListing = async (listingData: Omit<Listing, 'id' | 'createdAt'>) => {
    const { data, error } = await supabase.from('listings').insert(listingData).select().single();

    if(error) throw new Error(error.message)

    return data
}