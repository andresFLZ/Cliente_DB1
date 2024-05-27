import { open } from "../db.js";

export const getHVByFuncion = async (req, res) => {
    try {
        const funcion = req.query.funcion;
        const sql = `SELECT * FROM hv WHERE INSTR(funcionactividad, :funcion) > 0`;
        const result = await open(sql, { funcion }, true);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: 'No se encontraron hojas de vida asociadas a la función' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener hojas de vida' });
    }
}

export const getHVByUsuario = async (req, res) => {
    try {
        const usuario = req.query.usuario;
        const sql = `select * from hv where usuario = :usuario`;
        const result = await open(sql, { usuario }, true);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: 'No se encontraron hojas de vida asociadas al usuario' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener hojas de vida' });
    }
}