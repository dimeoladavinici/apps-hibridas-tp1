import express from "express";
import {
    crearAlfajor,
    listarAlfajores,
    obtenerAlfajorPorId,
    actualizarAlfajor,
    eliminarAlfajor
} from "../controllers/alfajoresController.js";

const router = express.Router();

router.post("/", crearAlfajor);
router.get("/", listarAlfajores);
router.get("/:id", obtenerAlfajorPorId);
router.put("/:id", actualizarAlfajor);
router.delete("/:id", eliminarAlfajor);

export default router;
