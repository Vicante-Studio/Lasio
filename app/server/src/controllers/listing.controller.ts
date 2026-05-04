import { Request, Response } from 'express'
import type { Listing } from '../types/listing.types.js'

import {
  createListing,
  deleteListing,
  getAllListings,
  getOneListing,
  updateListing
} from '../services/listing.service.js'

/* -------------------------------- */
/* Get all listings */
/* -------------------------------- */
export const handleGetAllListings = async ( req: Request, res: Response ) => {
  try {
    const queryData = req.query as Record<string, string>

    const data = await getAllListings(queryData)

    return res.status(200).json(data)
  } catch (error) {

    if(error instanceof Error){
      return res.status(500).json({
        error: `Error: ${error.message}`
      })
    }
    
  }
}

/* -------------------------------- */
/* Get one listing */
/* -------------------------------- */
export const handleGetOneListing = async ( req: Request, res: Response ) => {
  try {
    const { id } = req.params

    const data = await getOneListing(id as string)

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to fetch listing'
    })
  }
}

/* -------------------------------- */
/* Create listing */
/* -------------------------------- */
export const handleCreateListing = async ( req: Request, res: Response ) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        error: 'Unauthorized'
      })
    }

    const listingData = {
      ...req.body,
      agent_id: req.user.id
    }

    const data = await createListing(listingData)

    return res.status(201).json(data)
  } catch (error) {
    return res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : 'Failed to create listing'
    })
  }
}

/* -------------------------------- */
/* Update listing */
/* -------------------------------- */
export const handleUpdateListing = async ( req: Request, res: Response ) => {
  try {
    const { id } = req.params

    const updates: Partial<
      Omit<Listing, 'id' | 'createdAt'>
    > = req.body

    const data = await updateListing(id as string, updates)

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : 'Failed to update listing'
    })
  }
}

/* -------------------------------- */
/* Delete listing */
/* -------------------------------- */
export const handleDeleteListing = async ( req: Request, res: Response ) => {
  try {
    const { id } = req.params

    await deleteListing(id as string)

    return res.status(200).json({
      message: 'Listing deleted successfully'
    })
  } catch (error) {
    const status =
      error instanceof Error &&
      error.message === 'Listing not found'
        ? 404
        : 500

    return res.status(status).json({
      error: 'Listing could not be deleted'
    })
  }
}