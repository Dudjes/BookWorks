import { prisma } from "../database.js";

export async function registerUser(username: string, password: string, email: string, role: string) {
	const existingUser = await prisma.user.findUnique({
		where: { email },
	});

	if (existingUser) {
		throw new Error("EMAIL_EXISTS");
	}

	try {
		return await prisma.user.create({
			data: {
				username,
				password,
				email,
				role,
			},
		});
	} catch (error: any) {
		if (error?.code === "P2002") {
			throw new Error("EMAIL_EXISTS");
		}

		throw error;
	}
}

export async function loginUser(email: string, password: string){
	const user = await prisma.user.findUnique({
		where: { email },
	});

	if (!user) {
		return null;
	}

	if (user.password !== password) {
		return null;
	}

	return user;
}
