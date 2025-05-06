import express from 'express';
import { verificarToken } from '../token.js';

const router = express.Router();

router.get('/', verificarToken, (req, res) => {
    res.json({ mensaje: 'Accediste a una ruta protegida', usuario: req.usuario });
});

export default router;
