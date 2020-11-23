import { ConnectionOptions } from 'typeorm';
import * as entities from './entities.index';
import * as migrations from './migrations.index';
console.log(entities, migrations, process.env);

const typeOrmConfig = (): ConnectionOptions => {
    return {
    
        type: "postgres",
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        port: +(process.env.PG_PORT as string),
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        ssl: (process.env.PG_USE_SSL === 'true'),
        entities: Object.values(entities),
        synchronize: false,// not in production mode,
        logging: "all",
        logger: 'advanced-console',
        migrationsTableName: 'migrations',
        migrations: Object.values(migrations),
        cli: {
            migrationsDir: './src/database/migrations'
        },
        migrationsRun: true,
        name: (process.env.NODE_ENV === 'test') ? process.env.PG_DATABASE : 'default'
    }
}

export default typeOrmConfig;
  
