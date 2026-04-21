


import { Router } from "express";
import { UserRouter } from "../modules/User";
import { ContactRouter } from "../modules/Contact/contact.router";


export const AppRouter = Router();

AppRouter.use("/api/users/", UserRouter);
AppRouter.use("/api/contacts/", ContactRouter)
