import express from 'express';
import { handleGetDashboardStats, handleGetListings } from '../controllers/dashboard.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { requireAdminOrAgent } from '../middleware/authz.middleware.js';

const router = express.Router()

router.get('/stats', verifyToken, requireAdminOrAgent, handleGetDashboardStats)
router.get('/listings', verifyToken, requireAdminOrAgent, handleGetListings)
export default router