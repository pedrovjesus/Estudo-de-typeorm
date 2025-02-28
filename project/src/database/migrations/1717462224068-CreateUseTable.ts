import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUseTable1717462224068 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
        ],
      })
    );
  } // o up é aquilo que eu quero fazer da modificação

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  } // o down é para desfazer aquilo o que eu fiz
}
