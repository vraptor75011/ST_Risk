import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { seedDatabase } from './helpers/seed';
//import { Pet, User } from './entities';
import { Pet } from './Pet/pet.model';
import { PetResolver } from './Pet/pet.resolver';
import { User } from './User/user.model';
import { UserResolver } from './User/user.resolver';
import { initRepositories } from './utils/index';

async function bootstrap() {
    const connection = await createConnection({
            type: "postgres",
            host: process.env.PG_HOST ?? '',
            database: process.env.PG_DATABASE ?? '',
            port: +(process.env.PG_PORT as string) ?? '',
            username: process.env.PG_USER ?? '',
            password: process.env.PG_PASSWORD ?? '',
            ssl: true,
        entities: [User, Pet],
        synchronize: false ,// not in production mode,
        logging: 'all',
        logger: 'advanced-console',
//        dropSchema: true, // not in productin mode
        migrationsTableName: 'migrations',
        migrations: ["./src/database/migrations/*.js"],
        cli: {
            migrationsDir: './src/database/migrations'
        }

    }).then((connection) => initRepositories());
//    console.log(connection);
    seedDatabase();
    const schema = await buildSchema({
        resolvers: [UserResolver, PetResolver],
        emitSchemaFile: {
            path: __dirname + "/schema.gql",
            commentDescriptions: true,
            sortedSchema: false, // by default the printed schema is sorted alphabetically
          },
    });
    
    return {
//        connection,
        schema
    }
  
}



export default bootstrap;

