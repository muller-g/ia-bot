import HttpServer from "../HttpServer";
import {Request, Response} from 'express';

export default class UserController {
    private static noAuth = (req: any, res: any, next: any) => {
        next()
    };

    static configureRoutes(httpServer: HttpServer) {
        httpServer.register("get", "/user", async(req: Request, res: Response) => {
            try {
                
                return res.status(200).send('user');
            } catch (error) {
                res.status(500).send(error);
            }
        }, this.noAuth);
    }
}