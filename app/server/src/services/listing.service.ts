import supabaseAdmin from '../config/supabaseAdmin.js';
import { cleanListingFilters, Listing, listingFilters } from '../types/listing.types.js';
import parsePrice from '../utils/parsePriceFilter.js';
import { listingRepository } from '../repositories/listing.repository.js'

// Create listings
export const createListing = async (listingData: Listing) => {
  const { data, error } = await listingRepository.insertNewListing(listingData)

  if (error) {
    throw new Error(error.message)
  }

  return data
}

// Get all Listings
export const getAllListings = async (queryData: listingFilters = {}) => {
    const { keyword, status, minPrice, maxPrice, property_type, features, bedrooms } = queryData

    const filters: cleanListingFilters = {}

        let query = supabaseAdmin.from('listings').select('*')

        /* -------------------------------- */
        /* Query Parameters */
        /* -------------------------------- */
        
         // Keyword filters
        if(keyword && keyword.trim().length > 0){
          filters.keyword = keyword.trim();
        }

        // Price filters
        if(minPrice){
          const min = parsePrice(minPrice as string);
            if (!isNaN(min as number)) filters.minPrice = min as number;
          }

         if (maxPrice) {
          const max = parsePrice(maxPrice as string);
          if (!isNaN(max as number)) filters.maxPrice = max as number;
        }

        // Status filters
        if (status) filters.status = status;
        
        //Property Type filter 
        if (property_type) filters.propertyType = property_type;

        //Features filter
        // Use query.contains for an array of texts
        if (features) filters.features = features;

        //Bedrooms filter
        if (bedrooms) filters.bedrooms = Number(bedrooms);

        return listingRepository.findAllListings(filters);
}

// Get one listing
export const getOneListing = async (id: string) => {
  const { data, error } = await supabaseAdmin.from('listings').select('*').eq('id', id).single()

  if(error) throw new Error(error.message)

  return data
}

// Update Listing
export const updateListing = async (id: string, updatedListingData: Partial<Omit<Listing, 'id' | 'createdAt' >>) => {

  const cleanData = Object.fromEntries(
    Object.entries(updatedListingData).filter(
      ([_, v]) => v !== undefined
    )
  ) // Ensure updatedListingData doesn't have undefined fields

  const { data, error } = await supabaseAdmin.from('listings').update(cleanData).eq('id', id).select().single()

  if(error) throw new Error(error.message)

  return data
}

// Delete Listing
export const deleteListing = async (id: string) => {
  const { data, error } = await supabaseAdmin.from('listings').delete().eq('id', id).select()

  if(error) {
    throw new Error(error.message)
  }

  if(!data || data.length === 0) {
    throw new Error('Listing not found')
  }

  return true
}

export const getTopLocations = async () => {
  const { data, error } = await supabaseAdmin.from('top_locations').select('*').limit(10)

  if(error) {
    throw new Error(error.message)
  }

  return data
}