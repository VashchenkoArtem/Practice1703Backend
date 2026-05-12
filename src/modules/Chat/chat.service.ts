import { ChatRepository } from "./chat.repository";
import { ChatServiceContract } from "./types/chat.contracts";

export const ChatService: ChatServiceContract = {
    getChats: async (userId) => {
        try{
            const userChats = await ChatRepository.getChats(userId)
            return userChats
        } catch(error) {
            throw error
        }
    },

    getAllWithChatParticipantInfo: async (userId) => {
        try {
            const chats = await ChatRepository.getAllWithChatParticipantInfo(userId)
            return chats
        } catch(error){
            throw error
        }
    },

    getChatParticipants: async (chatId) => {
        try {
            const participants = await ChatRepository.getChatParticipants(chatId)
            return participants
        } catch(error){
            throw error
        }
    },

    isUserChatPartisipant: async (chatId, userId) => {
        try {
            const participants = await ChatRepository.getChatParticipants(chatId)
            const isUserInChat = participants.some((partisipant) => {
                return partisipant.userId === userId
            })

            return isUserInChat

        }  catch(error){
            throw error
        }
    }
}