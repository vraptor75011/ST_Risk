import { createConnection } from 'typeorm';
import { Pet } from '../pet/pet.model';
import { User } from '../user/user.model';

const typeOrmConnection = async (databaseName:string) => {
    const connection = await createConnection({
        type: "postgres",
//        url: process.env.PG_URL,
        host: process.env.PG_HOST ?? '',
        database: databaseName ?? '',
        port: +(process.env.PG_PORT as String) ?? '',
        username: process.env.PG_USER ?? '',
        password: process.env.PG_PASSWORD ?? '',

        //    database: 'test',
        migrationsRun: true,
        //      ssl: true,
        entities: [User, Pet],
        synchronize: false,// not in production mode,
        logging: 'all',
        logger: 'debug',
                dropSchema: true, // not in production mode
        migrationsTableName: 'migrations',
        migrations: ["./src/database/migrations/*.ts"],
        cli: {
            migrationsDir: './src/database/migrations'
        }

    })

    return connection
}

export default typeOrmConnection;