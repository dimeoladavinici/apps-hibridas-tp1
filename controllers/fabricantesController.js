import Fabricante from "../models/Fabricante.js"

export const crearFabricante = async (req, res) => {
    try {
        const nuevo = new Fabricante(req.body)
        const guardado = await nuevo.save()
        res.status(201).json({ mensaje: "Fabricante guardado", datos: guardado })
    } catch (error) {
        res.status(500).json({ mensaje: "Error al guardar fabricante", error })
    }
}

export const listarFabricantes = async (req, res) => {
    try {
        const filtros = {}
        if (req.query.nombre) {
            filtros.nombre = new RegExp(req.query.nombre, "i")
        }
        const fabricantes = await Fabricante.find(filtros)
        res.json(fabricantes)
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener fabricantes", error })
    }
}

export const obtenerFabricantePorId = async (req, res) => {
    try {
        const fabricante = await Fabricante.findById(req.params.id)
        if (!fabricante) return res.status(404).json({ mensaje: "No encontrado" })
        res.json(fabricante)
    } catch (error) {
        res.status(500).json({ mensaje: "Error al buscar", error })
    }
}

export const actualizarFabricante = async (req, res) => {
    try {
        const actualizado = await Fabricante.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" })
        res.json({ mensaje: "Fabricante actualizado", datos: actualizado })
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar", error })
    }
}

export const eliminarFabricante = async (req, res) => {
    try {
        const eliminado = await Fabricante.findByIdAndDelete(req.params.id)
        if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" })
        res.json({ mensaje: "Fabricante eliminado" })
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar", error })
    }
}
