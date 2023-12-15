import HttpServer from "../HttpServer";
import {Request, Response} from 'express';
import User from "../../../domain/entity/User";
import UserRepositoryPrisma from "../../../repository/prisma/UserRepositoryPrisma";

export default class UserController {
    private static noAuth = (req: any, res: any, next: any) => {
        next()
    };

    static configureRoutes(httpServer: HttpServer) {
        httpServer.register("post", "/user", async(req: Request, res: Response) => {
            try {
                const createUser: any = UserRepositoryPrisma;
                const { name, email, phone, profile_image, type, password } = req.body;

                let userImg: string = '';
                if(profile_image){
                    userImg = 'foto'
                }

                const user: User = await User.createUser(
                    name,
                    email,
                    phone,
                    userImg,
                    type,
                    password,
                );

                return {
                    body: await createUser.createUser(user),
                    status: 200
                }
            } catch (error: any) {
                return {
                    body: error,
                    status: 413
                }
            }
        }, this.noAuth);
    }
}