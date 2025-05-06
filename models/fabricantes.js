const express = require('express');
const router = express.Router();
const Fabricante = require('../models/Fabricante');

router.get('/', async (req, res) => {
    const fabricantes = await Fabricante.find();
    res.json(fabricantes);
});

router.post('/', async (req, res) => {
    const nuevo = new Fabricante(req.body);
    await nuevo.save();
    res.json(nuevo);
});

router.delete('/:id', async (req, res) => {
    await Fabricante.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Fabricante eliminado' });
});

module.exports = router;
