import express from 'express';
import { handleCreateListing, handleGetOneListing, handleGetAllListings, handleUpdateListing, handleDeleteListing } from '../controllers/listing.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { requireRole } from '../middleware/role.middleware.js';
import { listingOwnerMiddleware } from '../middleware/listingOwner.middleware.js';



const router = express.Router()



// PUBLIC View

// Get all listings + filtering
router.get('/', handleGetAllListings)

// Get one listing
router.get('/:id', handleGetOneListing)



// ONLY agents or admins

// Create listings
router.post('/', authMiddleware, requireRole('agent', 'admin'), handleCreateListing)

// Update listing
router.put('/:id', authMiddleware, listingOwnerMiddleware, requireRole('agent', 'admin'), handleUpdateListing)

// Delete one listing
router.delete('/:id', authMiddleware, requireRole('agent', 'admin'), listingOwnerMiddleware, handleDeleteListing)

export default router;