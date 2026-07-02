import express from 'express'
import { handleUploadFiles } from '../controllers/upload.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router()

router.post('/upload', verifyToken, handleUploadFiles)