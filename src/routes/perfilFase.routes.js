import { Router } from "express";
import { getPerfilFasesByPerfil } from "../controllers/indexPerfilFase.controller.js";


const perfilFasesRouter = Router();

perfilFasesRouter.get("/perfil-fases/cod_perfil", getPerfilFasesByPerfil);

export default perfilFasesRouter;