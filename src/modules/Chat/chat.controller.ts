import { ChatService } from "./chat.service";
import { ChatControllerContract } from "./types/chat.contracts";

export const ChatController: ChatControllerContract = {
    getChats: async (req, res, next) => {
        try{
            const userId = res.locals.userId
            const userChats = await ChatService.getChats(userId)
            res.status(200).json(userChats)
        }catch(error){
            next(error)
        }
    }
}