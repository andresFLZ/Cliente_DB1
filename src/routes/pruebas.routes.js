import { Router } from "express";
import { getPruebasComputacion } from "../controllers/indexPrueba.controller.js";

const pruebasRouter = Router();

pruebasRouter.get("/pruebas/computacion", getPruebasComputacion);

export default pruebasRouter;