import { Connection, QueryRunner } from 'typeorm';
import initRepositories from '../../database/utils/index';
import createDatabasePerTest from './createDatabasePerTest';
import initConnectionPerTest from './initConnectionPerTest';

export type DatabaseAndConnection = {
    connection: Connection,
    queryRunner:QueryRunner
}

const initDatabaseAndConnectionPerTest = async (databaseName: string): Promise<DatabaseAndConnection> => {

    await createDatabasePerTest(databaseName);
    const connectionContainer:DatabaseAndConnection = await initConnectionPerTest();
    initRepositories(connectionContainer.connection);
   
    return (
        connectionContainer
    )
}

export default initDatabaseAndConnectionPerTest