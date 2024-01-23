export default class PhoneValidator{
    static async validate(phone: string){
        phone = phone.replace(/\D/g, '');

        if(phone.length !== 13){
            return phone.slice(0, 4) + '9' + phone.slice(4);
        }
    }
}