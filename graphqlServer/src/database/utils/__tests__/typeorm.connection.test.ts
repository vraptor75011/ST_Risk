//import "reflect-metadata";
import { Connection, createConnection, QueryRunner } from 'typeorm';
import createDatabasePerTest from '../../../jest/utils/createDatabasePerTest';
import { config } from '../orm.config';


describe('TypeOrm connection test', () => {

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
  
    test('Connection is connected ?', async () => {
        let isConnected = await connection.isConnected;
        expect(isConnected).toBeTruthy()
    });

    test('Create Database', async () => {
        let hasDatabase = await queryRunner.hasDatabase(databaseName);
    })


  });
  