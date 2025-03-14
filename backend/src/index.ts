import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

if (!MONGO_DB_URL) {
    console.error('MONGO_DB_URL no está definida en .env');
    process.exit(1);
}

mongoose.connect(MONGO_DB_URL)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err: any) => console.error('Error conectando a MongoDB:', err));

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend with TypeScript!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});