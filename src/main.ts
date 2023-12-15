import dotenv from "dotenv";
import HttpServer from "./infra/http/HttpServer";
import logger from "./infra/service/WinstonLogger";
import UserController from "./infra/http/api/UserController";
import LoginController from "./infra/http/api/LoginController";

dotenv.config();

const httpServer = new HttpServer()
try {
    UserController.configureRoutes(httpServer);
    LoginController.configureRoutes(httpServer);
    
    httpServer.listen(3001);
} catch (error) {
    console.error("Error on main.ts", error)
    logger.error("Error on main.ts", error);
}
export const api = httpServer.app;

