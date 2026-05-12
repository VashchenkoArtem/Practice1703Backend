import type { NextFunction, Request, Response } from "express";
import { IMessage, IMessageWithPagination, IPaginationData } from "./message.types";


export interface MessageControllerContract {
    getChatMessages: (
        req: Request<
            { chatId: string },
            IMessage | string,
            object,
            { page: string },
            {userId: number}
        >,

        res: Response<
            // IMessage[] | string
            IMessageWithPagination
        >,
        next: NextFunction
    ) => void
}


export interface MessageServiceContract {
    // getChatMessages: (chatId: number) => Promise<IMessage[]>
    getChatMessages: (chatId: number, pagination: IPaginationData) => Promise<IMessageWithPagination>
    getAllByChatId: (chatId: number) => Promise<IMessageWithPagination>
    create: (text: string, userId: number, chatId: number ) => Promise<IMessage | null>
}


export interface MessageRepositoryContract {
    // getChatMessages: (chatId: number) => Promise<IMessage[]>
    getChatMessages: (chatId: number, pagination: IPaginationData) => Promise<IMessageWithPagination>
    getAllByChatId: (chatId: number) => Promise<IMessageWithPagination>
    create: (text: string, userId: number, chatId: number ) => Promise<IMessage | null>
}