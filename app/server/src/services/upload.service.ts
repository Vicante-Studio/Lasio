import supabaseAdmin from '../config/supabaseAdmin.js';
import multer from 'multer';

export const uploadImageFile = async (image: Express.Multer.File) => {
    const fileName = `${crypto.randomUUID()}-${image.originalname}`

     const { error } = await supabaseAdmin.storage
    .from('listing-images')
    .upload(fileName, image.buffer, { contentType: image.mimetype })

    const { data } = supabaseAdmin.storage.from('listing-images').getPublicUrl(fileName)

    return {data, error}
}