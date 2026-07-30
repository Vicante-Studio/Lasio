import { dashboardRepository } from "../repositories/dashboard.repository.js";
import { Listing } from "../types/listing.types.js";

// Get admin/agent stats
export const getAdminStats = async(id: string, role: string) => {
  let listings: Listing[] = []

  if (role === 'admin'){
    // Get all listings if user is admin
    listings = await dashboardRepository.findAllListings()
  } else if (role === 'agent') {
    // Get total listings for a specific agent if user is agent
    listings = await dashboardRepository.findAllAgentListings(id)
  }

  const total_listings: number = listings.length  // Calculate total listings
  const total_revenue: number = listings.reduce((acc, listing) => acc + listing.price, 0) // Calculate total revenue
  const available_listings: number = listings.filter(listing => listing.is_available === true).length // filter the available ones and calculate them 

  return { total_listings, total_revenue, available_listings }
}