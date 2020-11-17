import { ConnectionOptions } from 'typeorm';

console.log(process.env.PG_USE_SSL);

export const config:ConnectionOptions = {
    type: "postgres",
    host: process.env.PG_HOST ?? '',
    database: process.env.PG_DATABASE ?? '',
    port: +(process.env.PG_PORT as string) ?? '',
    username: process.env.PG_USER ?? '',
    password: process.env.PG_PASSWORD ?? '',
    ssl: JSON.parse(process.env.PG_USE_SSL as string),
//    ssl: process.env.PG_USE_SSL as boolean | undefined,
//    entities: [User, Pet],
    entities: ["./src/**/?(*.)+(model).[tj]s?"],
    synchronize: false ,// not in production mode,
    logging: 'all',
    logger: 'advanced-console',
//        dropSchema: true, // not in productin mode
    migrationsTableName: 'migrations',
    migrations: ["./src/database/migrations/*{.ts,.js}"],
    cli: {
        migrationsDir: './src/database/migrations'
    },
    migrationsRun: true
}
  
