import { Router } from "express";
import { getMaxIdProcessoRequerimiento, getProcesoRequerimientoById, getProcessoRequerimiento, postProcesoRequerimiento, putConvocatoriaProceso, putInvitacionProceso } from "../controllers/indexProcesoRequerimiento.controller.js";

const procesosRequerimientoRouter = Router();

procesosRequerimientoRouter.get("/procesos-requerimiento", getProcessoRequerimiento);
procesosRequerimientoRouter.get("/procesos-requerimiento/cod-requerimiento", getProcesoRequerimientoById);
procesosRequerimientoRouter.get("/procesos-requerimiento/max-id", getMaxIdProcessoRequerimiento);
procesosRequerimientoRouter.post("/procesos-requerimiento", postProcesoRequerimiento);
procesosRequerimientoRouter.put("/procesos-requerimiento/actualizar-convocatoria", putConvocatoriaProceso);
procesosRequerimientoRouter.put("/procesos-requerimiento/actualizar-invitacion", putInvitacionProceso);

export default procesosRequerimientoRouter;