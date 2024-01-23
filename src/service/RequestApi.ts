/*
import axios from "axios";
import dotenv from "dotenv";
import winstonLoggerFile from "../infra/service/WinstonLoggerFile";

dotenv.config();

export default class RequestApi {
    static async post(method: any, url: string, body?: any){
        try {
            return axios({ method: method, url: url, data: body,
                headers: {
                    'Authorization': `Bearer ${process.env.ACCESS_TOKEN_MP}`
                } })
        } catch (e: any) {
            winstonLoggerFile.info(e)
        }
    }
}*/
