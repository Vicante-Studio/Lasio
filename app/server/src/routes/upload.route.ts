import express from 'express'
import { handleUploadImageFiles } from '../controllers/upload.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router()

router.post('/image', verifyToken, handleUploadImageFiles)

export default router