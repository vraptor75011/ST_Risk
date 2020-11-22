import {MigrationInterface, QueryRunner} from "typeorm";

export class fixTypes1605871061577 implements MigrationInterface {
    name = 'fixTypes1605871061577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "full_name" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "country_code"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "country_code" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "pets" ADD "name" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "ownerId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb"`);
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "ownerId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "pets" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "country_code"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "country_code" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "full_name" character varying NOT NULL`);
    }

}
