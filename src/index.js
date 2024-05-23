import express from "express";
import { PORT } from "./config.js";
import morgan from "morgan";
import cors from "cors";
import categoriasRouter from "./routes/categorias.routes.js";
import productosRouter from "./routes/productos.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(categoriasRouter);
app.use(productosRouter);

app.listen(PORT);