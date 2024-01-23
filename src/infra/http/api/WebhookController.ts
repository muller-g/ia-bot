import HttpServer from "../HttpServer";
import {Request, Response} from 'express';
import dotenv from "dotenv";
import IAService from "../../../service/IAService";
import Whatsapp from "../../../service/Whatsapp";
import winstonLoggerFile from "../../service/WinstonLoggerFile";

dotenv.config();

export default class WebhookController {
    private static noAuth = (req: any, res: any, next: any) => {
        next()
    };

    static configureRoutes(httpServer: HttpServer) {
        httpServer.register("get", "/api/v1/webhook", async(params: Response | any, body: Request) => {
            const challenge = body.query['hub.challenge'];
            const verify_token = body.query['hub.verify_token'];

            if (verify_token === "abcdef") {
                return {
                    body: challenge,
                    status: 200
                };
            }

            return {
                body: "Bad request!",
                status: 400
            }
        }, this.noAuth)

        httpServer.register("post", "/api/v1/webhook", async(params: Response | any, body: Request) => {
            if(!body.body.entry[0].changes[0].value.hasOwnProperty("messages")){
                return {
                    body: 'Success',
                    status: 200
                }
            }

            const fromWpp: any = body.body.entry[0].changes[0].value.messages[0].from;
            const type: any = body.body.entry[0].changes[0].value.messages[0].type;
            const msg: any = body.body.entry[0].changes[0].value.messages[0].text.body;

            if(type !== 'text'){
                return {
                    body: 'success',
                    status: 200
                }
            }

            try {
                const prompt: string = await IAService.generatePrompt(msg);
                await Whatsapp.sendMessage(prompt, fromWpp);
            } catch (e: any) {
                winstonLoggerFile.info(e);
            }

            return {
                body: "success",
                status: 200
            }
        }, this.noAuth)
    }
}