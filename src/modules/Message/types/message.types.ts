import { Prisma } from "@prisma/client";
import { client } from "../../../client/client";
import { PageNumberCounters, PageNumberPagination } from "prisma-extension-pagination/dist/types";

export type IMessage = Prisma.MessageGetPayload<{}>

export interface IMessageWithPagination {
    messages: IMessage[]
    pagination: PageNumberPagination & PageNumberCounters
}

export interface IPaginationData {
    page: number
}

// export type IMessageWithPagination = [
//     IMessage[],
//     number,
//     number
//     // // meta: {
//     // {
//     //     number,
//     // },
//     // {    
//     //     number
//     // }    // }
// ]
// ReturnType <typeof client.message.paginate> PageNumberPagination & PageNumberCounters