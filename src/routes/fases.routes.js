import { Router } from "express";
import { getFases } from "../controllers/indexFase.controller.js";

const fasesRouter = Router();

fasesRouter.get("/fases", getFases);

export default fasesRouter;