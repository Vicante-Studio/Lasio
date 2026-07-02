import express from 'express'
import multer from 'multer';
import { handleUploadFiles } from '../controllers/upload.controller.js';

const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })

router.post('/upload', handleUploadFiles)