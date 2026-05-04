


import { Router } from "express";
import { UserRouter } from "../modules/User";
import { ContactRouter } from "../modules/Contact/contact.router";
import { ChatRouter } from "../modules/Chat/chat.router";


export const AppRouter = Router();

AppRouter.use("/api/users/", UserRouter);
AppRouter.use("/api/contacts/", ContactRouter)
AppRouter.use("/api/chats/", ChatRouter)