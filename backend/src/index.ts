import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
import specialPriceRoutes from './routes/specialPriceRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_DB_URL = process.env.MONGO_DB_URL

const allowedOrigins = ['http://localhost:3000'];

if (!MONGO_DB_URL) {
    console.error('MONGO_DB_URL no está definida en .env')
    process.exit(1)
}

mongoose.connect(MONGO_DB_URL)
    .then(() => console.log('Conectado'))
    .catch(err => console.error('Error conectando:', err))

app.use(cors({
    origin: (
          origin: string | undefined, 
          callback: (error: Error | null, allow: boolean) => void
        ) => {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origen no permitido por CORS'), false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/special-prices', specialPriceRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})