import express from 'express';
import { PORT } from "./config.js";
import morgan from "morgan";
import cors from "cors";
import empleadosRouter from './routes/empleados.routes.js';
import cargosRouter from './routes/cargos.routes.js';
import requerimientosRouter from './routes/requerimiento.routes.js';
import perfilesRouter from './routes/perfil.routes.js';
import procesosRequerimientoRouter from './routes/procesoRequerimiento.routes.js';
import perfilFasesRouter from './routes/perfilFase.routes.js';
import fasesRouter from './routes/fases.routes.js';
import hVRouter from './routes/hV.routes.js';
import tipoItemPerfilRouter from './routes/tipoItemPerfil.routes.js';
import institucionRouter from './routes/institucion.routes.js';
import procesosCandidatoRouter from './routes/procesoCandidato.routes.js';
import pruebasRouter from './routes/pruebas.routes.js';
import pruebasCandidatoRouter from './routes/pruebascandidato.routes.js';

const app = express();

app.use(morgan("dev"));
app.use(cors());
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(requerimientosRouter);
app.use(cargosRouter);
app.use(empleadosRouter);
app.use(perfilesRouter);
app.use(procesosRequerimientoRouter);
app.use(perfilFasesRouter);
app.use(fasesRouter);
app.use(hVRouter);
app.use(tipoItemPerfilRouter);
app.use(institucionRouter);
app.use(procesosCandidatoRouter);
app.use(pruebasRouter);
app.use(pruebasCandidatoRouter);

app.listen(PORT);