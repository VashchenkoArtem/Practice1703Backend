import { MessageRepository } from "./message.repository";
import { MessageServiceContract } from "./types/message.contracts";

export const MessageService: MessageServiceContract = {
    getChatMessages: async (chatId, paginationData) => {
        try {
            const chatMessages = await MessageRepository.getChatMessages(chatId, paginationData)
            return chatMessages
        } catch(error){
            throw error
        }
    },

    create: async (text: string, userId: number, chatId: number ) => {
        try {
            const message = await MessageRepository.create(text, userId, chatId)
            return message
        } catch (error) {
            throw error
        }
    },

    getAllByChatId: async (chatId) => {
        try {
            const getAllMessages = await MessageRepository.getAllByChatId(chatId)
            return getAllMessages
        } catch (error) {
            throw error
        }
    }
}