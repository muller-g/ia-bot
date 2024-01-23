import {PrismaClient} from "@prisma/client";
import User from "../../domain/entity/User";

export default class UserRepositoryPrisma {

    constructor(readonly prisma: PrismaClient) {
    }

    async createUser(user: User): Promise<User> {
        const createdUser: any = await this.prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });

        return createdUser;
    }
}