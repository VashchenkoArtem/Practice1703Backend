import { ChatRepository } from "./chat.repository";
import { ChatServiceContract } from "./types/chat.contracts";

export const ChatService: ChatServiceContract = {
    getChats: async (userId) => {
        try{
            const userChats = await ChatRepository.getChats(userId)
            return userChats
        }catch(error){
            throw error
        }
    },

    getChatMessages: async (chatId) => {
        try {
            const chatMessages = await ChatRepository.getChatMessages(chatId)
            return chatMessages
        } catch(error){
            throw error
        }
    }
}