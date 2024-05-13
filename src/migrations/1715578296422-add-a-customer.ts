import { MigrationInterface, QueryRunner } from "typeorm";

export class AddACustomer1715578296422 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`INSERT INTO my_custom_entity ("createdAt", "updatedAt", code, id) VALUES (NOW(), NOW(), '1', 1);`, undefined);
    await queryRunner.query(`INSERT INTO customer ("createdAt", "updatedAt", "deletedAt", title, "firstName", "lastName", "phoneNumber", "emailAddress", "userId", "customFieldsMycustomentityid") VALUES (NOW(), NOW(), null, 'Mr.', 'John', 'Smith', '', 'john.smith@example.com', null, 1);`, undefined); 
    await queryRunner.query(`INSERT INTO customer_channels_channel ("customerId", "channelId") VALUES (1, 1);`,  undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // Doesn't matter
  }

}
