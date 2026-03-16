import { prisma } from "../database.js";

export async function getUserById(id: number) {
	return prisma.user.findUnique({
		where: { id },
	});
}
