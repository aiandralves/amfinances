export class Account {
    id?: string;
    name?: string;
    cpf?: string;
    password?: string;

    constructor(name?: string, cpf?: string, password?: string) {
        this.name = name;
        this.cpf = cpf;
        this.password = password;
    }
}
