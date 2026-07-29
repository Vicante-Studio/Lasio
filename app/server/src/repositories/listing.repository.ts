import supabaseAdmin from '../config/supabaseAdmin.js';
import { Listing } from '../types/listing.types.js';

export const listingRepository = {
    async insertNewListing(listingData: Listing) {
        const { data, error } = await supabaseAdmin.from('listings').insert(listingData).select()

        return { data, error }
    },
    
    async getAllListings() {
        
    }
}