import * as dotenv from 'dotenv';

dotenv.config({ path: process.env.PWD+'/.env' });

const default_config = {
    client: 'pg',
    connection: {
        host: process.env.PG_HOST ?? '',
        database: process.env.PG_DATABASE ?? '',
        user: process.env.PG_USER ?? '',
        password: process.env.PG_PASSWORD ?? '',
        port: process.env.PG_PORT,
        ssl: true
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: 'migrations'
    },
    timezone: 'UTC'
};
  
interface KnexConfig {
    [key: string]: object;
};
  
const config : KnexConfig = {
    development:{
      ...default_config
    },
    testing:{
      ...default_config
    },
    production:{
      ...default_config
    }
};

  export default config;