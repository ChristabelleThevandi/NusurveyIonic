export class LoginReq{
    email : String | undefined;
    password: String | undefined;

    constructor(email?: string, password?: string) {
        this.email = email;
        this.password = password;
    }
}

