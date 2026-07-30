import express from 'express';
import { handleGetDashboardStats } from '../controllers/dashboard.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { requireAdminOrAgent } from '../middleware/authz.middleware.js';

const router = express.Router()

router.get('/stats', verifyToken, requireAdminOrAgent, handleGetDashboardStats)
export default router