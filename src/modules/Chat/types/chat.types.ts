import { Prisma } from "@prisma/client";

export type IChat = Prisma.ChatGetPayload<{}>
export type IMessage = Prisma.MessageGetPayload<{}>