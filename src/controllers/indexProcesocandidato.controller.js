import { open, openPut } from "../db.js";

export const getProcesosCandidatoDeProcesoRequerimiento = async (req, res) => {
    try {
        const id_proceso = req.query.id_proceso;
        const id_requerimiento = req.query.id_requerimiento;
        const id_fase = req.query.id_fase;
        const id_perfil = req.query.id_perfil;
        const sql = `select * from procesocandidato where consproceso = :id_proceso and consecreque = :id_requerimiento and idfase = :id_fase and idperfil = :id_perfil`;
        const result = await open(sql, {id_proceso, id_requerimiento, id_fase, id_perfil}, true);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: 'No se encontraron procesos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}

export const getProcesosCandidatoDeProcesoRequerimientoSeleccionados = async (req, res) => {
    try {
        const id_proceso = req.query.id_proceso;
        const id_requerimiento = req.query.id_requerimiento;
        const id_fase = req.query.id_fase;
        const id_perfil = req.query.id_perfil;
        const sql = `select * from procesocandidato where consproceso = :id_proceso and consecreque = :id_requerimiento and idfase = :id_fase and idperfil = :id_perfil and observacion = 'Seleccionado'`;
        const result = await open(sql, {id_proceso, id_requerimiento, id_fase, id_perfil}, true);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: 'No se encontraron procesos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}

export const putObservacionProceso = async (req, res) => {
    try {
        const { observacion, id_fase_nueva, id_usuario, id_proceso, id_requerimiento, id_fase_actual, id_perfil } = req.body;
        console.log(observacion, id_fase_nueva, id_usuario, id_proceso, id_requerimiento, id_fase_actual, id_perfil)
        const sql = `update procesocandidato set observacion = :observacion, idfase = :id_fase_nueva where usuario = :id_usuario and consproceso = :id_proceso and consecreque = :id_requerimiento and idfase = :id_fase_actual and idperfil = :id_perfil`;
        const binds = {
            observacion: observacion,
            id_fase_nueva: id_fase_nueva,
            id_usuario: id_usuario,
            id_proceso: id_proceso, 
            id_requerimiento: id_requerimiento, 
            id_fase_actual: id_fase_actual, 
            id_perfil: id_perfil,
        }
        const result = await openPut(sql,binds,true);
        console.log(result);

        if (result.rowsAffected > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron el requerimientos asociados al empleado' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar requerimientos' });
    }
}