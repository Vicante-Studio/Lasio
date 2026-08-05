import express from 'express';
import { handleCreateListing, handleGetOneListing, handleGetAllListings, handleUpdateListing, handleDeleteListing, handleGetTopLocations, handleVerifyOwnership } from '../controllers/listing.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { requireAdminOrAgent, requireOwnershipOrAdmin } from '../middleware/authz.middleware.js';



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

// Verify if listing belongs to agent
router.get('/verifyOwnership/:id', verifyToken, requireAdminOrAgent, requireOwnershipOrAdmin, handleVerifyOwnership)

// Update listing
router.put('/:id', verifyToken, requireAdminOrAgent, requireOwnershipOrAdmin, handleUpdateListing)

// Delete one listing
router.delete('/:id', verifyToken, requireAdminOrAgent, requireOwnershipOrAdmin, handleDeleteListing)

export default router;