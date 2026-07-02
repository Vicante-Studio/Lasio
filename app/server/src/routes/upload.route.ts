import express from 'express'
import { handleUploadFiles } from '../controllers/upload.controller.js';

const router = express.Router()

router.post('/upload', handleUploadFiles)