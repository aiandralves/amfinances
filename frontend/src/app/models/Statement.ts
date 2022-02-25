export class Statement {
    id?: string;
    title?: string;
    amount?: number;
    idaccount?: string;

    constructor(title?: string, amount?: number, idaccount?: string) {
        this.title = title;
        this.amount = amount;
        this.idaccount = idaccount;
    }
}
