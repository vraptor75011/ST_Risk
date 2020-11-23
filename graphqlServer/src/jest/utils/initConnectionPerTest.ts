import { Connection, createConnection, QueryRunner } from "typeorm";
import typeOrmConfig from '../../database/utils/orm.config';

const initConnectionPerTest = async ():Promise<{connection:Connection, queryRunner:QueryRunner}> => {
    const connection = await createConnection(typeOrmConfig());
    const queryRunner = connection.createQueryRunner();  
    return { connection, queryRunner }
}

export default initConnectionPerTest