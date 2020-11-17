import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1605600932547 implements MigrationInterface {
    name = 'initial1605600932547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "country_code" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pets" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "ownerId" integer NOT NULL, "specie" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
