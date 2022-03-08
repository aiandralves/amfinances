import { OperationType } from './OperationType';

export interface IStatementDTO {
    id?: string;

    idaccount: string;

    title: string;

    amount: number;

    type: OperationType;
}
