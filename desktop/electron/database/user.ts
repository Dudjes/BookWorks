import { prisma } from "../database.js";

export async function getUserById(userID: number) {
	return prisma.user.findUnique({
		where: { userID },
	});
}
