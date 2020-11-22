import closeDatabaseAndConnection from '../../../jest/utils/closeDatabaseAndConnection';
import initDatabaseAndConnectionPerTest, { DatabaseAndConnection } from '../../../jest/utils/initDabaseAndConnectionPerTest';

describe('Pet test suite', () => {
  
    let connectionContainer: DatabaseAndConnection;
    const databaseName: string = __filename.slice(__dirname.length + 1, -3);

    beforeAll(async () => {
        connectionContainer = await initDatabaseAndConnectionPerTest(databaseName);
    });

    afterAll(async () => {
        await closeDatabaseAndConnection(connectionContainer);
    });

    test('Pet must be created', () => {
    });
});
