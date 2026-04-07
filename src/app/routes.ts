


import { Router } from "express";
import { UserRouter } from "../modules/User";


export const AppRouter = Router();

AppRouter.use("/api/users/", UserRouter);

