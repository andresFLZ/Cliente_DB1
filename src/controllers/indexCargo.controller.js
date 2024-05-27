import { open } from "../db.js";

export const getCargoEmpleado = async (req, res) => {
    try {
        const cod_empleado = req.query.cod_empleado;
        const sql = `select * from Cargo where codempleado = :cod_empleado`;
        const result = await open(sql, { cod_empleado }, true);

        if (result.length > 0) {
            console.log(result)
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontró cargo asociado alempleado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener cargo' });
    }
}