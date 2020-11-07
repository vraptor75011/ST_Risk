import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { initRepositories } from './entities/index';
//import { Pet, User } from './entities';
import { Pet } from './entities/pet.model';
import { User } from './entities/user.model';
import { seedDatabase } from './helpers/seed';
import { PetResolver } from './resolvers/pet.resolver';
import { UserResolver } from './resolvers/user.resolver';

async function bootstrap() {
    const connection = await createConnection({
            type: "postgres",
            host: process.env.PG_HOST ?? '',
            database: process.env.PG_DATABASE ?? '',
            port: +(process.env.PG_PORT as String) ?? '',
            username: process.env.PG_USER ?? '',
            password: process.env.PG_PASSWORD ?? '',
            ssl: true,
        entities: [User, Pet],
        synchronize: true ,// not in production mode,
        logging: 'all',
        logger: 'advanced-console',
        dropSchema: true
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

