import jwt from "jsonwebtoken";

export const verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ mensaje: "Token requerido" });

    const token = authHeader.split(" ")[1];

    try {
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decodificado;
        next();
    } catch (error) {
        res.status(403).json({ mensaje: "Token inválido" });
    }
};
