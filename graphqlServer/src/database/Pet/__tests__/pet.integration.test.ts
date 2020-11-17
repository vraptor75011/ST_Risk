import { Connection, createConnection, QueryRunner } from 'typeorm';
import createDatabasePerTest from '../../../jest/utils/createDatabasePerTest';
import { config } from '../../utils/orm.config';

describe('Pet test suite', () => {
  
    let connection: Connection;
    let queryRunner: QueryRunner;
    const databaseName:string = __filename.slice(__dirname.length + 1, -3);

    beforeAll(async () => {
        await createDatabasePerTest(databaseName)
        .then(async () => {
            connection = await createConnection(config);
            queryRunner = connection.createQueryRunner();                
        });
    });

    afterAll(() => {
        queryRunner.release();
        connection.close();
    });

    test('Pet must be created', () => {
    });
});
