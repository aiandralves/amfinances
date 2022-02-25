import { IGetBalanceDTO } from '../dtos/IGetBalanceDTO';
import { IGetOperationDTO } from '../dtos/IGetOperationDTO';
import { IStatementDTO } from '../dtos/IStatementDTO';
import { Statement } from '../typeorm/entities/Statement';

export interface IStatementRepository {
    create(data: IStatementDTO): Promise<Statement>;

    findAccountBalance(
        data: IGetBalanceDTO
    ): Promise<
        { balance: number } | { balance: number; statement: Statement[] }
    >;

    findOperation(data: IGetOperationDTO): Promise<Statement | undefined>;
}
