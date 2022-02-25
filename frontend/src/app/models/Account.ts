export class Account {
    id?: string;
    name?: string;
    cpf?: string;
    password?: string;
    avatar?: string;

    constructor(
        id?: string,
        name?: string,
        cpf?: string,
        password?: string,
        avatar?: string
    ) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.password = password;
        this.avatar = avatar;
    }
}
