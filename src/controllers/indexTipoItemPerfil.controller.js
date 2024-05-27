import { open } from "../db.js";

export const getTipoItemPerfiles = async (req, res) => {
    try {
        const sql = `select * from tipoitemperfil`;
        const result = await open(sql, [], true);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron requerimientos asociados al empleado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}