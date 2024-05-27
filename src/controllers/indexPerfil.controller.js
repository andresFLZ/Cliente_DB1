import { open } from "../db.js";

export const getPerfiles = async (req, res) => {
    try {
        const sql = `select * from Perfil`;
        const result = await open(sql, [], true);
        console.log(result)
        if (result.length > 0) {
            console.log(result)
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron requerimientos asociados al empleado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}