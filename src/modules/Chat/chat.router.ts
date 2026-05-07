import { Router } from "express";
import { authMiddleware } from "../../middlewares";
import { ChatController } from "./chat.controller";

export const ChatRouter = Router()

ChatRouter.get("", authMiddleware, ChatController.getChats)
ChatRouter.get("/:chatId", authMiddleware, ChatController.getChatMessages)