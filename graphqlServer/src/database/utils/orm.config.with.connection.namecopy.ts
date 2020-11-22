//import { typeOrmConfig } from './orm.config';
import { ConnectionOptions } from 'typeorm';
import { Pet } from '../pet/pet.model';
import { User } from '../user/user.model';
export function typeOrmConfigWithConnectionName(): ConnectionOptions  {
//    console.log("ORM CONFIG", process.env);

    const connectionConfig:ConnectionOptions = {
        //        ...typeOrmConfig,
        type: "postgres",
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        port: +(process.env.PG_PORT as string),
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        ssl: (process.env.PG_USE_SSL === 'true'),
        //    ssl: process.env.PG_USE_SSL as boolean | undefined,
            entities: [User, Pet],
        //    entities: ["./src/**/?(*.)+(model).[tj]s?"],
//        entities: ["/../**/*.model.[tj]s?"],
        synchronize: false,// not in production mode,
        logging: "all",
        logger: 'advanced-console',
        //        dropSchema: true, // not in productin mode
        migrationsTableName: 'migrations',
        migrations: [
            "./src/database/migrations/*{.ts,.js}"
            //            "./dist/migrations{.ts,.js}"
        ],
        cli: {
            migrationsDir: './src/database/migrations'
        },
        migrationsRun: true,
        //    name: 'default'

        name: (process.env.NODE_ENV === 'test') ? process.env.PG_DATABASE : 'default'
    }
  //  console.log("ORM CONFIG", connectionConfig);

    return (connectionConfig) 
}
  
