import { cleanListingFilters, Listing, listingFilters } from '../types/listing.types.js';
import parsePrice from '../utils/parsePriceFilter.js';
import { listingRepository } from '../repositories/listing.repository.js'

// Create listings
export const createListing = async (listingData: Listing) => {
  const data = await listingRepository.insertNewListing(listingData)

  return data
}

// Get all Listings
export const getAllListings = async (queryData: listingFilters = {}) => {
    const { keyword, status, minPrice, maxPrice, property_type, features, bedrooms } = queryData

    const filters: cleanListingFilters = {}

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
  const { data, error } = await listingRepository.findOne(id)

  return data
}

// Update Listing
export const updateListing = async (id: string, updatedListingData: Partial<Omit<Listing, 'id' | 'createdAt' >>) => {

  const cleanData = Object.fromEntries(
    Object.entries(updatedListingData).filter(
      ([_, v]) => v !== undefined
    )
  ) // Ensure updatedListingData doesn't have undefined fields

  const data = await listingRepository.updateListing(id, cleanData)

  return data
}

// Delete Listing
export const deleteListing = async (id: string) => {
  const data = await listingRepository.deleteListing(id)

  return data
}

// Get top locations
export const getTopLocations = async () => {
  const data = await listingRepository.findTopLocations()

  return data
}

// Set listing availability
export const changeListingAvailability = async(id: string) => {
  // TODO
}