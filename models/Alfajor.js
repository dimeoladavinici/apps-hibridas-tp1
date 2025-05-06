import mongoose from "mongoose";

const alfajorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    relleno: { type: String, required: true },
    banado: { type: String, required: true },
    precio: { type: Number, required: true },
    calorias: { type: Number, required: true },
    fabricanteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fabricante",
        required: true
    }
});

const Alfajor = mongoose.model("Alfajor", alfajorSchema);
export default Alfajor;
