import { open, openPost, openPut } from "../db.js";

export const getMaxIdProcessoRequerimiento = async (req, res) => {
    try {
        const sql = `select MAX(consproceso) from procesorequerimiento`;
        const result = await open(sql, [], true);
        console.log(result)
        if (result.length > 0) {
            console.log(result)
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: 'No se encontraron procesos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}

export const getProcessoRequerimiento = async (req, res) => {
    try {
        const sql = `select * from procesoRequerimiento`;
        const result = await open(sql, [], true);
        console.log(result)
        if (result.length > 0) {
            console.log(result)
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: 'No se encontraron procesos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}

export const getProcesoRequerimientoById = async (req, res) => {
    try {
        const cod_requerimiento = req.query.cod_requerimiento;
        console.log(cod_requerimiento)
        const sql = `select * from procesoRequerimiento where consecreque = :cod_requerimiento`;
        const result = await open(sql, {cod_requerimiento}, true);
        console.log(result)
        if (result.length > 0) {
            console.log(result)
            res.status(200).json(result);
        } else {
            res.status(200).json({ message: 'No se encontraron procesos asociados al requerimientos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener requerimientos' });
    }
}

export const postProcesoRequerimiento = async (req, res) => {
    try {
        // const cod_requerimiento = req.query.cod_requerimiento;
        // console.log(cod_requerimiento)
        const { id_proceso, id_fase, id_perfil, id_requerimiento, id_empleado, fecha_inicio, fecha_fin, convocatoria, invitacion } = req.body;
        let sql;
        if (fecha_inicio != null && fecha_fin != null) {
            sql = `insert into procesorequerimiento values (:id_proceso, :id_requerimiento, :id_empleado, :id_fase, :id_perfil, TO_DATE(:fecha_inicio, 'YYYY-MM-DD'), TO_DATE(:fecha_fin, 'YYYY-MM-DD'), :convocatoria, :invitacion)`;
        } else if (fecha_inicio != null && fecha_fin == null) {
            sql = `insert into procesorequerimiento values (:id_proceso, :id_requerimiento, :id_empleado, :id_fase, :id_perfil, TO_DATE(:fecha_inicio, 'YYYY-MM-DD'), :fecha_fin, :convocatoria, :invitacion)`;
        } else if (fecha_inicio == null && fecha_fin != null) {
            sql = `insert into procesorequerimiento values (:id_proceso, :id_requerimiento, :id_empleado, :id_fase, :id_perfil, :fecha_inicio, TO_DATE(:fecha_fin, 'YYYY-MM-DD'), :convocatoria, :invitacion)`;
        } else {
            sql = `insert into procesorequerimiento values (:id_proceso, :id_requerimiento, :id_empleado, :id_fase, :id_perfil, :fecha_inicio, :fecha_fin, :convocatoria, :invitacion)`;
        }
        console.log(id_proceso, id_fase, id_perfil, id_requerimiento, id_empleado, fecha_inicio, fecha_fin, convocatoria, invitacion)
        console.log(sql)
        const binds = {
            id_proceso: id_proceso, 
            id_fase: id_fase, 
            id_perfil: id_perfil, 
            id_requerimiento: id_requerimiento, 
            id_empleado: id_empleado, 
            fecha_inicio: fecha_inicio, 
            fecha_fin: fecha_fin, 
            convocatoria: convocatoria, 
            invitacion: invitacion
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

export const putConvocatoriaProceso = async (req, res) => {
    try {
        const { convocatoria, id_proceso, id_requerimiento, id_fase, id_perfil, fecha_inicio, fecha_fin } = req.body;
        console.log(convocatoria, id_proceso, id_requerimiento, id_fase, id_perfil, fecha_inicio, fecha_fin)
        const sql = `UPDATE procesorequerimiento SET convocatoria = :convocatoria, fechainicio = TO_DATE(:fecha_inicio, 'YYYY-MM-DD'), fechafin = TO_DATE(:fecha_fin, 'YYYY-MM-DD') where consproceso = :id_proceso and consecreque = :id_requerimiento and idfase = :id_fase and idperfil = :id_perfil`;
        //const binds = {cod_empleado, consecutivo}
        const binds = {
            convocatoria: convocatoria, 
            id_proceso: id_proceso, 
            id_requerimiento: id_requerimiento, 
            id_fase: id_fase, 
            id_perfil: id_perfil,
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin
        }
        const result = await openPut(sql,binds,true);
        console.log(result);

        if (result.rowsAffected > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron el requerimientos asociados al empleado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar requerimientos' });
    }
}

export const putInvitacionProceso = async (req, res) => {
    try {
        const { invitacion, convocatoria, id_proceso, id_requerimiento, id_fase, id_perfil, fecha_inicio, fecha_fin } = req.body;
        console.log(invitacion, convocatoria, id_proceso, id_requerimiento, id_fase, id_perfil, fecha_inicio, fecha_fin)
        const sql = `UPDATE procesorequerimiento SET invitacion = :invitacion, convocatoria = :convocatoria, fechainicio = TO_DATE(:fecha_inicio, 'YYYY-MM-DD'), fechafin = TO_DATE(:fecha_fin, 'YYYY-MM-DD') where consproceso = :id_proceso and consecreque = :id_requerimiento and idfase = :id_fase and idperfil = :id_perfil`;
        //const binds = {cod_empleado, consecutivo}
        const binds = {
            invitacion: invitacion,
            convocatoria: convocatoria, 
            id_proceso: id_proceso, 
            id_requerimiento: id_requerimiento, 
            id_fase: id_fase, 
            id_perfil: id_perfil,
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin
        }
        const result = await openPut(sql,binds,true);
        console.log(result);

        if (result.rowsAffected > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron el requerimientos asociados al empleado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar requerimientos' });
    }
}