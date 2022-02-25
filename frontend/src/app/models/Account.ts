export class Account {
    id?: string;
    name?: string;
    cpf?: string;
    password?: string;

    constructor(id?: string, name?: string, cpf?: string, password?: string) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.password = password;
    }
}
