import Alfajor from "../models/Alfajor.js"

export const crearAlfajor = async (req, res) => {
    try {
        const nuevo = new Alfajor(req.body)
        const guardado = await nuevo.save()
        res.status(201).json({ mensaje: "Alfajor guardado", datos: guardado })
    } catch (error) {
        res.status(500).json({ mensaje: "Error al guardar el alfajor", error })
    }
}

export const listarAlfajores = async (req, res) => {
    try {
        const filtros = {}
        if (req.query.relleno) filtros.relleno = req.query.relleno
        if (req.query.banado) filtros.banado = req.query.banado
        const alfajores = await Alfajor.find(filtros).populate("fabricanteId")
        res.json(alfajores)
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los alfajores", error })
    }
}

export const obtenerAlfajorPorId = async (req, res) => {
    try {
        const alfajor = await Alfajor.findById(req.params.id).populate("fabricanteId")
        if (!alfajor) return res.status(404).json({ mensaje: "No encontrado" })
        res.json(alfajor)
    } catch (error) {
        res.status(500).json({ mensaje: "Error al buscar", error })
    }
}

export const actualizarAlfajor = async (req, res) => {
    try {
        const actualizado = await Alfajor.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" })
        res.json({ mensaje: "Alfajor actualizado", datos: actualizado })
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar", error })
    }
}

export const eliminarAlfajor = async (req, res) => {
    try {
        const eliminado = await Alfajor.findByIdAndDelete(req.params.id)
        if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" })
        res.json({ mensaje: "Alfajor eliminado" })
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar", error })
    }
}
