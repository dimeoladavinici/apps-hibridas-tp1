import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import alfajoresRoutes from './routes/alfajores.js';
import fabricantesRoutes from './routes/fabricantes.js';
import rutaProtegida from './routes/protegida.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/alfajores', alfajoresRoutes);
app.use('/api/fabricantes', fabricantesRoutes);
app.use('/api/protegida', rutaProtegida);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    })
    .catch((error) => console.log('Error en la conexión:', error));
