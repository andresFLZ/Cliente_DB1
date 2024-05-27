import {open} from '../db.js';

export const getEmpleados = async(req,res) =>{
    try {
        const sql = 'select * from empleado';
        const result = await open(sql, [], true);

        console.log(result.length)
        if (result.length > 0) {
            res.status(200).json(result); 
        } else {
            res.status(404).json({ message: 'No se encontraron empleados' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
        console.log(error)
    }
};

export const getEmpleadosByCorreo = async (req, res) => {
    try {
        const correo = req.query.correo;
        // Consulta SQL para buscar empleado por correo electrónico
        const sql = `select * from Empleado E where E.CORREO like :correo`;
        const result = await open(sql, { correo }, true);

        if (result.length > 0) {
            console.log(result)
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron empleados' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
}

export const getAnalistasGenerales = async (req, res) => {
    try {
        // select * from empleado E, cargo C where C.codempleado = e.codempleado and c.idtipocargo = 'AG';
        const sql = `select * from empleado E, cargo C where C.codempleado = e.codempleado and c.idtipocargo = 'AG'`;
        const result = await open(sql, [], true);

        if (result.length > 0) {
            console.log(result)
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron empleados' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
}