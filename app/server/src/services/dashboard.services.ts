import { dashboardRepository } from "../repositories/dashboard.repository.js";
import { Listing } from "../types/listing.types.js";

const getListingsByRole = async (role: 'admin' | 'agent', id?: string) => {
  let listings: Listing[] = []

  if (role === 'admin'){
    // Get all listings if user is admin
    listings = await dashboardRepository.findAllListings()
  } else if (role === 'agent') {
    // Get total listings for a specific agent if user is agent
    listings = await dashboardRepository.findAllAgentListings(id as string)
  } else {
    throw new Error('Invalid role')
  }

  return listings
}

// Get admin/agent stats
export const getDashboardStats = async(id: string, role: 'admin' | 'agent') => {
  const listings: Listing[] = role === 'admin' ? await getListingsByRole(role) : await getListingsByRole(role, id)  

  const total_listings: number = listings.length  // Calculate total listings
  const total_revenue: number = listings.reduce((acc, listing) => acc + Number(listing.price), 0) // Calculate total revenue
  const available_listings: number = listings.filter(listing => listing.is_available === true).length // filter the available ones and calculate them 

  return { total_listings, total_revenue, available_listings }
}

// Get All Agent or Admin listings
export const getAllListings = async(id: string, role: 'admin' | 'agent') => {
  const listings: Listing[] = await getListingsByRole(role, id)

  return listings
}