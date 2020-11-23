import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { createConnection, useContainer } from 'typeorm';
import { PetResolver } from './pet/pet.resolver';
import { UserResolver } from './user/user.resolver';
import initRepositories from './utils/index';
import typeOrmConfig from './utils/orm.config';

useContainer(Container);

async function bootstrap() {
    console.log(typeOrmConfig);

    const connection = await createConnection(typeOrmConfig());

    initRepositories(connection);
 
    const schema = await buildSchema({
        resolvers: [PetResolver, UserResolver],
        emitSchemaFile: {
            path: __dirname + "/schema.gql",
            commentDescriptions: true,
            sortedSchema: false, // by default the printed schema is sorted alphabetically
        },
        container: Container,
    });
    
    return {
        schema
    }
  
}



export default bootstrap;

