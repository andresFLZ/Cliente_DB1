import { Router } from "express";
import { getTipoItemPerfiles } from "../controllers/indexTipoItemPerfil.controller.js";

const tipoItemPerfilRouter = Router();

tipoItemPerfilRouter.get("/tipo-item-perfil", getTipoItemPerfiles);

export default tipoItemPerfilRouter;