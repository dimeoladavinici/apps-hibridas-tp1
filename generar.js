import dotenv from 'dotenv';
dotenv.config();

import { generarToken } from "./token.js";

const token = generarToken({ usuario: "juan", rol: "rookie" });
console.log("Token generado:", token);
