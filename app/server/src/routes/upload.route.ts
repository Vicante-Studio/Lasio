import express from 'express'
import multer from 'multer';
import { handleUploadImageFiles } from '../controllers/upload.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { requireAdminOrAgent } from '../middleware/requireAdminOrAgent.middleware.js';

const router = express.Router()

const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // limit the size of the file to be uploded -> 10MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
        cb(null, true)
        } else {
        cb(new Error('Only image files are allowed'))
        }
    } //Ensures only image files cn be uploaded
 })

router.post('/listing/image', verifyToken, requireAdminOrAgent, upload.single('image'), handleUploadImageFiles)

export default router
