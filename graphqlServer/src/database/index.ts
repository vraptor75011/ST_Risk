import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';

async function bootstrap() {
/*     console.log(process.env);
        const connection = await createConnection({
            type: "postgres",
            host: process.env.PG_HOST ?? '',
            database: process.env.PG_DATABASE ?? '',
            port: +(process.env.PG_PORT as String) ?? '',
            username: process.env.PG_USER ?? '',
            password: process.env.PG_PASSWORD ?? '',
            ssl: true,
            entities: [User, Pet]
        });
    console.log('Now Schema');
 */    debugger;

    const schema = await buildSchema({
        resolvers: [UserResolver]
    });
    
    return {
//        connection,
        schema
    }
  
}



export default bootstrap;

