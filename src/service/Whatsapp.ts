import axios from "axios";
import PhoneValidator from "./PhoneValidator";
import winstonLogger from "../infra/service/WinstonLogger";

export default class Whatsapp {
    static async sendMessage(text: string, phone: string){
        try {
            const validated: any = await PhoneValidator.validate(phone);

            return await axios.post(`https://graph.facebook.com/v17.0/230252090160384/messages`, {
                messaging_product: "whatsapp",
                recipient_type: "individual",
                to: validated,
                type: "text",
                text: {
                    preview_url: false,
                    body: text
                }
            }, {
                headers: {
                    'Authorization': 'Bearer ' + process.env.WHATSAPP_BUS_TOKEN,
                    'Content-Type': 'application/json'
                }
            });
        } catch (e: any) {
            winstonLogger.info(e);
            return ''
        }
    }
}