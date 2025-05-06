const express = require('express');
const router = express.Router();
const Alfajor = require('../models/Alfajor');

router.get('/', async (req, res) => {
    const alfajores = await Alfajor.find().populate('fabricanteId');
    res.json(alfajores);
});

router.post('/', async (req, res) => {
    const nuevo = new Alfajor(req.body);
    await nuevo.save();
    res.json(nuevo);
});

router.delete('/:id', async (req, res) => {
    await Alfajor.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Alfajor eliminado' });
});

module.exports = router;
