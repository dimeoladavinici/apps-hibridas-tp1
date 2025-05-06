import express from "express";
import {
    crearFabricante,
    listarFabricantes,
    obtenerFabricantePorId,
    actualizarFabricante,
    eliminarFabricante
} from "../controllers/fabricantesController.js";

const router = express.Router();

router.post("/", crearFabricante);
router.get("/", listarFabricantes);
router.get("/:id", obtenerFabricantePorId);
router.put("/:id", actualizarFabricante);
router.delete("/:id", eliminarFabricante);

export default router;
