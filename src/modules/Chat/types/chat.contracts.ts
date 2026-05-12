import { IChat, IChatPartisipant, IChatWithUsers } from "./chat.types";
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
}

export interface ChatServiceContract{
    getChats: (userId: number) => Promise<IChat[]>

    getAllWithChatParticipantInfo: (userId: number) => Promise<IChatWithUsers[]>
    isUserChatPartisipant: (chatId: number, userId: number) => Promise<boolean>
    getChatParticipants: (chatId: number)  => Promise<IChatPartisipant[]>
}

export interface ChatRepositoryContract{
    getChats: (userId: number) => Promise<IChat[]>
    
    getAllWithChatParticipantInfo: (userId: number) => Promise<IChatWithUsers[]>
    getChatByParticipants: (userId: number, userIdSecond: number) => Promise<IChat | null>
    getChatParticipants: (chatId: number)  => Promise<IChatPartisipant[]>
}