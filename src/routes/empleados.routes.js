import { Router } from "express";
import { getAnalistasGenerales, getEmpleados, getEmpleadosByCorreo} from "../controllers/indexEmpleado.controller.js";


const empleadosRouter = Router();

empleadosRouter.get("/empleados", getEmpleados);
empleadosRouter.get("/empleados/correo", getEmpleadosByCorreo);
empleadosRouter.get("/empleados/analistas-generales", getAnalistasGenerales);


export default empleadosRouter;