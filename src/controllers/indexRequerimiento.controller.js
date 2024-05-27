import { open } from "../db.js";

export const getRequerimientosEmpleadoACL = async (req, res) => {
    try {
        const cod_empleado = req.query.cod_empleado;
        console.log(cod_empleado)
        const sql = `select * from requerimiento where emp_codempleado = :cod_empleado`;
        console.log(sql)
        const result = await open(sql, { cod_empleado }, true);
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

export const getRequerimientosEmpleadoAG = async (req, res) => {
    try {
        const cod_empleado = req.query.cod_empleado;
        console.log(cod_empleado)
        const sql = `select * from requerimiento where emp_codempleado1 = :cod_empleado`;
        const result = await open(sql, { cod_empleado }, true);
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

export const putAnalistaGeneralRequerimiento = async (req, res) => {
    try {
        const { cod_empleado, consecutivo } = req.body;
        console.log(cod_empleado, consecutivo)
        const sql = `UPDATE requerimiento SET emp_codempleado1 = :cod_empleado where consecreque = :consecutivo`;
        const binds = {
            cod_empleado: cod_empleado, 
            consecutivo: consecutivo
        }
        const result = await open(sql,binds,true);
        console.log(result);

        if (result.length > 0) {
            //console.log(result)
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron el requerimientos asociados al empleado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar requerimientos' });
    }
}