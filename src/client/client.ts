import { PrismaClient } from "@prisma/client";
import { ENV } from "../config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
	url: process.env.DATABASE_URL!,
});

export const client = new PrismaClient({
	adapter,
});