import { Prisma } from "@prisma/client";

export type IChat = Prisma.ChatGetPayload<{}>
export type IChatPartisipant = Prisma.ChatParticipantGetPayload<{}>

export type IChatWithUsers = Prisma.ChatGetPayload<{
    include: {
        participants: {
            select: {
                userId: true
            }
        }
    }
}>