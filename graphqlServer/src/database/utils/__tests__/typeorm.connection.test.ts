import closeDatabaseAndConnection from '../../../jest/utils/closeDatabaseAndConnection';
import initDatabaseAndConnectionPerTest, { DatabaseAndConnection } from '../../../jest/utils/initDabaseAndConnectionPerTest';

describe('TypeOrm connection test', () => {

    let connectionContainer: DatabaseAndConnection;
    const databaseName: string = __filename.slice(__dirname.length + 1, -3);
  
    beforeAll(async () => {
        connectionContainer = await initDatabaseAndConnectionPerTest(databaseName);
    });
  
    afterAll(async() => {
        await closeDatabaseAndConnection(connectionContainer);
    });
  
    test('Connection is connected ?', async () => {
        let isConnected = await connectionContainer.connection.isConnected;
        expect(isConnected).toBeTruthy()
    });

    test('Create Database', async () => {
        let hasDatabase = await connectionContainer.queryRunner.hasDatabase(databaseName);
    })


});
  