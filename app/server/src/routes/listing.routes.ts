import express from 'express';
import { handleCreateListing, handleGetOneListing, handleGetAllListings, handleUpdateListing, handleDeleteListing, handleGetTopLocations } from '../controllers/listing.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { requireAdminOrAgent } from '../middleware/requireAdminOrAgent.middleware.js';



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
router.post('/', verifyToken, requireAdminOrAgent, handleCreateListing)

// Update listing
router.put('/:id', verifyToken, requireAdminOrAgent, handleUpdateListing)

// Delete one listing
router.delete('/:id', verifyToken, requireAdminOrAgent, handleDeleteListing)

export default router;