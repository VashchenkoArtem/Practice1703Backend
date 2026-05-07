import { IChat, IMessage } from "./chat.types";
import type { NextFunction, Request, Response } from "express";


export interface ChatControllerContract{
    getChats: (
        req: Request<
            object,
            IChat[] | string,
            object,
            object,
            {userId: number}
        >,
        res: Response<
            IChat[] | string 
        >,
        next: NextFunction
    ) => void

    getChatMessages: (
        req: Request<
            { chatId: string },
            IMessage | string,
            object,
            object,
            {userId: number}
        >,

        res: Response<
            IMessage[] | string
        >,
        next: NextFunction
    ) => void
}

export interface ChatServiceContract{
    getChats: (userId: number) => Promise<IChat[]>
    getChatMessages: (chatId: number) => Promise<IMessage[]>
}

export interface ChatRepositoryContract{
    getChats: (userId: number) => Promise<IChat[]>
    getChatMessages: (chatId: number) => Promise<IMessage[]>

}