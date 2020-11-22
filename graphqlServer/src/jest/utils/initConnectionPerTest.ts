import { Connection, createConnection, QueryRunner } from "typeorm";
import { typeOrmConfigWithConnectionName } from '../../database/utils/orm.config.with.connection.name';

const initConnectionPerTest = async ():Promise<{connection:Connection, queryRunner:QueryRunner}> => {
    const connection = await createConnection(typeOrmConfigWithConnectionName);
    const queryRunner = connection.createQueryRunner();  
    return { connection, queryRunner }
}

export default initConnectionPerTest