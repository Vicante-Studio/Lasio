import express from 'express';
import cors from 'cors';
import listingRoutes from './routes/listing.routes.js'
import authRoutes from './routes/auth.route.js'
import uploadRoutes from './routes/upload.route.js'
import { errorHandler } from './middleware/error.middleware.js'

const app = express()

const allowedOrigins = [
    'http://localhost:5173', //development origin
    'https://localhost:5173', //development origin
  'https://lasio.vercel.app', //production origin
]

app.use((req, res, next) => {
  console.log('🔥 REQUEST HIT:', req.method, req.url)
  next()
})

app.use(cors({
  origin: (origin, callback) => {
     console.log('🌍 Incoming Origin:', origin) //Log the oriin that's being used
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      /\.app\.github\.dev$/.test(new URL(origin).hostname)
    ) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },

  credentials: true,
}));

app.use(express.json())
app.use('/api/listings', listingRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/upload', uploadRoutes)
app.use(errorHandler)

export default app;