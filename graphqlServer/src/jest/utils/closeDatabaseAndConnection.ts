import { DatabaseAndConnection } from './initDabaseAndConnectionPerTest';

const closeDatabaseAndConnection = async (connectionContainer:DatabaseAndConnection) => {
    await connectionContainer.queryRunner.release();
    await connectionContainer.connection.close()
}

export default closeDatabaseAndConnection;

    