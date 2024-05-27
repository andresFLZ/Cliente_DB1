import { Router } from "express"; 
import { getPerfiles } from "../controllers/indexPerfil.controller.js";

const perfilesRouter = Router();

perfilesRouter.get("/perfiles", getPerfiles);

export default perfilesRouter;