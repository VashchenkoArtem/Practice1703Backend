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

    getAllWithChatParticipantInfo: async (userId) => {
        try {
            const chats = await client.chat.findMany({
                where: {
                    participants: {
                        some: {
                            userId: userId
                        }
                    }
                },
                include: {
                    participants: {
                        where: {
                            userId: {
                                not: userId
                            }
                        },
                        select: {
                            userId: true
                        }
                    }
                }
            })
            return chats
        } catch(error) {
            throw error
        }
    },

    getChatByParticipants: async (userId, userIdSecond) => {
        try {
            const partisipantChat = await client.chat.findFirst({
                where: {
                    AND: [
                        {participants: {
                            some: {
                                userId: userId
                            }
                        }},

                        {participants: {
                            some: {
                                userId: userIdSecond
                            }
                        }}
                    ]
                },                
            })
            return partisipantChat
        } catch(error) {
            throw error
        }
    },

    getChatParticipants: async (chatId) => {
        try {
            const participants = await client.chatParticipant.findMany({
                where: {
                    chatId: chatId
                }
            })
            return participants
        } catch(error) {
            throw error
        }
    },

}