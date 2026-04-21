
import express from "express";
import cors from "cors";

import { AppRouter } from "./routes";
import { errorMiddleware } from "../middlewares";
import { ENV, uploadDir } from "../config";
import { ContactRouter } from "../modules/Contact/contact.router";


const app = express();

app.use(cors());
app.use("/media/", express.static(uploadDir));
app.use(express.json());
app.use(AppRouter)

app.use(errorMiddleware);

app.listen(ENV.PORT, ENV.HOST, () => {
	console.log(`Server started on http://${ENV.HOST}:${ENV.PORT}`);
});
