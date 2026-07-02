import supabaseAdmin from '../config/supabaseAdmin.js';
import multer from 'multer';

const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // limit the size of the file to be uploded
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
        cb(null, true)
        } else {
        cb(new Error('Only image files are allowed'))
        }
    } //Ensures only image files cn be uploaded
 })

export const uploadImageFile = async (image: Express.Multer.File) => {
    const fileName = `${crypto.randomUUID()}-${image.originalname}`

     const { error } = await supabaseAdmin.storage
    .from('listing-images')
    .upload(fileName, image.buffer, { contentType: image.mimetype })

    const { data } = supabaseAdmin.storage.from('listing-images').getPublicUrl(fileName)

    return {data, error}
}