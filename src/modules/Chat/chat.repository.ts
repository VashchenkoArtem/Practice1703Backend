import { client } from "../../client/client";
import { ChatRepositoryContract } from "./types/chat.contracts";

export const ChatRepository: ChatRepositoryContract = {
    getChats: async (userId) => {
        try{
            const userChats = await client.chat.findMany({
                where: {
                    participants: {
                        some: {
                            userId: userId
                        }
                    }
                },
                include: {
                    lastMessage: {
                        include: {
                            sender: true
                        }
                    },
                    participants: {
                        include: {
                            user: true
                        }
                    }
                }
            })
            const result = userChats.map(chat => {
                const otherUser = chat.participants.find(
                    participant => participant.userId !== userId
                )?.user;

                return {
                    ...chat,
                    otherUser
                };
        });
            return result
        } catch(error) {
            throw error
        }
    },

    getChatMessages: async (chatId) => {
        try {
            const chatMessage = await client.message.findMany({
                where: {
                    chatId: chatId
                },
                include: {
                    sender: true
                }
            })

            return chatMessage
        } catch(error) {
            throw error
        }
    }
}