import { Router } from "express";
import { getPruebasCandidato, getPruebasProcesoRequerimiento, postPruebasCandidato } from "../controllers/index.PruebaCandidato.controller.js";

const pruebasCandidatoRouter = Router();

pruebasCandidatoRouter.get("/pruebas-candidato", getPruebasCandidato);
pruebasCandidatoRouter.post("/pruebas-candidato", postPruebasCandidato);
pruebasCandidatoRouter.get("/pruebas-candidato/proceso-requerimiento", getPruebasProcesoRequerimiento);

export default pruebasCandidatoRouter;