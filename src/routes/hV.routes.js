import { Router } from "express";
import { getHVByFuncion, getHVByUsuario } from "../controllers/indexHV.controller.js";

const hVRouter = Router();

hVRouter.get("/hv/funcion", getHVByFuncion);
hVRouter.get("/hv/usuario", getHVByUsuario);

export default hVRouter;