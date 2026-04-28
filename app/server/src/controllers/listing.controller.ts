import { Request, Response } from 'express';
import supabase from '../config/supabase.js';
import type { Listing } from '../types/listing.types.js';
import parsePrice from '../utils/parsePriceFilter.js';
import { createListing, deleteListing, getAllListings, getOneListing, updateListing } from '../services/listing.service.js';

// Get all listings
export const handleGetAllListings = async (req: Request, res: Response) => {
  try {

        const queryData = req.query as Record<string, string>;

        const data = await getAllListings(queryData)

        res.status(200).json(data)

  } catch (error) {

    res.status(500).json({ error: "Failed to fetch listings" });

  }
}

// Get one Listing
export const handleGetOneListing = async (req: Request, res:Response) => {
    try {
      const { id } = req.params

      const data = await getOneListing(id as string)

      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch listing" });
    }
}

// Create Listing
export async function handleCreateListing(req: Request, res: Response){

  try {
    const listingData: Omit<Listing, 'id' | 'createdAt'> = req.body

    const data = await createListing(listingData) // call createListing service

    return res.status(201).json(data);

  } catch (error) {
    if(error instanceof Error){
      return res.status(500).json({ error: error.message })
    }
  }
}

// Update one listing
export const handleUpdateListing = async (req: Request, res: Response) => {
    

    try {
      const { id } = req.params
      const updates: Partial<Omit<Listing, 'id' | 'createdAt' >> = req.body

      const data = await updateListing(id as string, updates)

      res.status(200).json(data)
    } catch (error) {
      if(error instanceof Error){
         return res.status(500).json({ error: error.message })
      }
    }
}

// Delete listing
export const handleDeleteListing = async (req: Request, res: Response) => {
  
  try {
    const { id } = req.params

    await deleteListing(id as string)

    return res.status(200).json({ message: 'Listing deleted successfully'})
  } catch (error) {
    if(error instanceof Error){
      const status = error.message === 'Listing not found' ? 404 : 500;

      return res.status(status).json({message: 'Listing could not be deleted'})
    }
  }
}