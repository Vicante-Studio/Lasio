import supabaseAdmin from '../config/supabaseAdmin.js';
import { Listing, listingFilters } from '../types/listing.types.js';
import parsePrice from '../utils/parsePriceFilter.js';

// Create listings
export const createListing = async (listingData: Listing) => {
  const result = await supabaseAdmin
    .from('listings')
    .insert(listingData)
    .select()

  const { data, error } = result

  if (error) {
    throw new Error(error.message)
  }

  return data
}

// Get all Listings
export const getAllListings = async (queryData: listingFilters = {}) => {
  console.log(1,'Service active')
    const { keyword, status, minPrice, maxPrice, property_type } = queryData

        let query = supabaseAdmin.from<'listings', Listing>('listings').select('*')

        /* -------------------------------- */
        /* Query Parameters */
        /* -------------------------------- */
        
         // Keyword filters
        if(keyword && keyword.trim().length > 0){
          const searchTerm = `%${keyword}`

          query = query.or(`title.ilike.${searchTerm},city.ilike.${searchTerm},state.ilike.${searchTerm},location.ilike.${searchTerm}`)
        }

        // Price filters
        if(minPrice){
          const min = parsePrice(minPrice as string)

          if (!isNaN(min as number)) query = query.gte('price', min)
        }
        if(maxPrice){
          const max = parsePrice(maxPrice as string)
          
          if (!isNaN(max as number)) query = query.lte('price', max)
        }

        // Status filters
        if (status) query = query.ilike('status', `%${status}%`)
        
        //Property Type filter 
        if (property_type) query = query.ilike('property_type', `%${property_type}%`)

        const { data, error } = await query

        if (error) throw error
        
        return data || []
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