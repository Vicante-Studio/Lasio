import express from 'express';
import { handleCreateListing, handleGetOneListing, handleGetAllListings, handleUpdateListing, handleDeleteListing, handleGetTopLocations } from '../controllers/listing.controller.js';



const router = express.Router()



// PUBLIC View

// Get all listings + filtering
router.get('/', handleGetAllListings)

// Get top locations
router.get('/topLocations', handleGetTopLocations)

// Get one listing
router.get('/:id', handleGetOneListing)



// ONLY agents or admins

// Create listings
router.post('/', handleCreateListing)

// Update listing
router.put('/:id', handleUpdateListing)

// Delete one listing
router.delete('/:id', handleDeleteListing)

export default router;