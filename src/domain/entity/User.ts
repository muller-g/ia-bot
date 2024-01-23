export default class User {
    id?: string;

    private constructor(
        id: string | undefined,
        readonly name: string,
        readonly email: string,
        readonly phone: string,
    ) {
        this.id = id;
    }

    static async createUser(
        name: string,
        email: string,
        phone: string,
        id?: string
    ): Promise<User> {

        return new User(id,
            name,
            email,
            phone
        );
    }
}