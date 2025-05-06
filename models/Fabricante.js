import mongoose from "mongoose";

const fabricanteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    antiguedad: {
        type: Number,
        required: true
    }
});

const Fabricante = mongoose.model("Fabricante", fabricanteSchema);

export default Fabricante;
