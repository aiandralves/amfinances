import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Statement1645294526765 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'statements',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'idaccount',
                        type: 'varchar',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'amount',
                        type: 'decimal(10,2)',
                    },
                    {
                        name: 'type',
                        type: 'enum',
                        enum: ['deposito', 'saque'],
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKAccountStatement',
                        columnNames: ['idaccount'],
                        referencedTableName: 'accounts',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('statements');
    }
}
