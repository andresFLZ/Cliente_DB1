import { open, openPost } from "../db.js";

export const getPruebasCandidato = async (req, res) => {
    try {
        const sql = `select * from prueba_candidato`;
        const result = await open(sql, [], true);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: 'No se encontraron procesos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}

export const postPruebasCandidato = async (req, res) => {
    try {
        const { id_prueba_candidato, id_usuario, id_proceso, id_requerimiento, id_fase, id_perfil, id_prueba, fecha, calificacion } = req.body;
        const sql = `INSERT INTO prueba_candidato VALUES (:id_prueba_candidato, :id_usuario, :id_proceso, :id_requerimiento, :id_fase, :id_perfil, :id_prueba, TO_DATE(:fecha, 'YYYY-MM-DD'), :calificacion)`;
        console.log(id_prueba_candidato, id_usuario, id_proceso, id_requerimiento, id_fase, id_perfil, id_prueba, fecha, calificacion)
        const binds = {
            id_prueba_candidato: id_prueba_candidato, 
            id_usuario: id_usuario, 
            id_proceso: id_proceso, 
            id_requerimiento: id_requerimiento, 
            id_fase: id_fase, 
            id_perfil: id_perfil, 
            id_prueba: id_prueba, 
            fecha: fecha, 
            calificacion: calificacion
        }
        const result = await openPost(sql,binds,true);
        console.log(result)
        if (result.rowsAffected > 0) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ message: 'Error al crear proceso' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al crear proceso' });
    }
}

export const getPruebasProcesoRequerimiento = async (req, res) => {
    try {
        const id_proceso = req.query.id_proceso;
        const id_requerimiento = req.query.id_requerimiento;
        const id_fase = req.query.id_fase;
        const id_perfil = req.query.id_perfil;
        const sql = `select idprueba from prueba_candidato where prueba_candidato.consproceso = :id_proceso and prueba_candidato.consecreque = :id_requerimiento and prueba_candidato.idfase = :id_fase and prueba_candidato.idperfil = :id_perfil`;
        const result = await open(sql, {id_proceso, id_requerimiento, id_fase, id_perfil}, true);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron requerimientos asociados al empleado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}