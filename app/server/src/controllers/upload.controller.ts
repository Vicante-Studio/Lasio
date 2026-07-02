import { Request, Response } from 'express'
import { uploadImageFile } from '../services/upload.service.js'

/* -------------------------------- */
/* Upload files */
/* -------------------------------- */
export const handleUploadImageFiles = async (req: Request, res: Response) => {
  try {
        const image = req.file as Express.Multer.File | undefined

        if (!image) return res.status(400).json({ message: 'No file provided'})
        
        const { data } = await uploadImageFile(image)

        return res.status(200).json({ message: 'Image upload successful', data, url: data.publicUrl})
  } catch (error) {
        return res.status(404).json({ message: 'Image upload failed', error: error })
  }
}