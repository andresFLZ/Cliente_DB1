import { Router } from "express";
import { getRequerimientosEmpleadoACL, getRequerimientosEmpleadoAG, putAnalistaGeneralRequerimiento } from "../controllers/indexRequerimiento.controller.js"; 

const requerimientosRouter = Router();

requerimientosRouter.get("/requerimientos/requerimientos-empleado-cliente", getRequerimientosEmpleadoACL);
requerimientosRouter.get("/requerimientos/requerimientos-empleado-general", getRequerimientosEmpleadoAG);
requerimientosRouter.put("/requerimientos/actualizar-analista", putAnalistaGeneralRequerimiento);


export default requerimientosRouter;