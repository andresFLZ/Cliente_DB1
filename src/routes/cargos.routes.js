import { Router } from "express";
import { getCargoEmpleado } from "../controllers/indexCargo.controller.js";

const cargosRouter = Router();

cargosRouter.get("/cargos/cargo-empleado", getCargoEmpleado);


export default cargosRouter;