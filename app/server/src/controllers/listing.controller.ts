import { Request, Response } from 'express';
import supabase from '../config/supabase.js';
import type { Listing } from '../types/listing.types.js';
import parsePrice from '../utils/parsePriceFilter.js';
import { createListing, getAllListings } from '../services/listing.service.js';

// Get all listings
export const handleGetAllListings = async (req: Request, res: Response) => {
  try {

        const queryData = req.query as Record<string, string>;

        const data = await getAllListings(queryData)

        res.json(data)

  } catch (error) {

    res.status(500).json({ error: "Failed to fetch listings" });
    
  }
}

// Get one Listing
export const getOneListing = async (req: Request, res:Response) => {
    const { id } = req.params

    const { data, error } = await supabase.from('listings').select('*').eq('id', id).single()

    if (error || !data){
        return res.status(404).json({ error: 'Listing not found'})
    }

    res.json(data)
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
export const updateListing = async (req: Request, res: Response) => {
    const { id } = req.params
    const updates: Partial<Omit<Listing, 'id' | 'createdAt' >> = req.body

    const { data, error } = await supabase.from('listings').update(updates).eq('id', id).select().single()

    if(error){
        return res.status(500).json({ error: error.message })
    }

    res.json(data)
}

// Delete one listing
export const deleteOneListing = async (req: Request, res: Response) => {
  const { id } = req.params
  
  const { error } = await supabase.from('listings').delete().eq('id', id)

  if(error) {
    return res.status(500).json({ error: error.message })
  }

  res.status(200).json({ message: 'Listing deleted successfully'})
}