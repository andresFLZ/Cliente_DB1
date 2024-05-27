import { Router } from "express";
import { getProcesosCandidatoDeProcesoRequerimiento, getProcesosCandidatoDeProcesoRequerimientoSeleccionados, putObservacionProceso } from "../controllers/indexProcesocandidato.controller.js";

const procesosCandidatoRouter = Router();

procesosCandidatoRouter.get("/procesos-candidato/proceso-requerimiento", getProcesosCandidatoDeProcesoRequerimiento);
procesosCandidatoRouter.get("/procesos-candidato/proceso-requerimiento-seleccionados", getProcesosCandidatoDeProcesoRequerimientoSeleccionados);
procesosCandidatoRouter.put("/procesos-candidato/actualizar-observacion", putObservacionProceso);

export default procesosCandidatoRouter;