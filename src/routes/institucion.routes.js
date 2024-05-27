import { Router } from "express";
import { getInstituciones } from "../controllers/indexInstitucion.controller.js";

const institucionRouter = Router();

institucionRouter.get("/instituciones", getInstituciones);

export default institucionRouter;