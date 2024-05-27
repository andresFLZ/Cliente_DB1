import { open } from "../db.js";

export const getPerfilFasesByPerfil = async (req, res) => {
    try {
        const idPerfil = req.query.idPerfil;
        const sql = `select * from perfilFase where idperfil = :idPerfil`;
        console.log(sql)
        const result = await open(sql, { idPerfil }, true);
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