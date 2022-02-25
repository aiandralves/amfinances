import { OperationType } from './OperationType';

export interface IStatementDTO {
    id?: string;

    idaccount: string;

    idsender?: string;

    title: string;

    amount: number;

    type: OperationType;
}
