import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { PetResolver } from './pet/pet.resolver';
import { UserResolver } from './user/user.resolver';
import initRepositories from './utils/index';
import { typeOrmConfigWithConnectionName } from './utils/orm.config.with.connection.namecopy';

//useContainer(Container);

async function bootstrap() {
    console.log('BOOTSTRAP');

    const connection = await createConnection(typeOrmConfigWithConnectionName())
    console.log('BOOTSTRAP');

    initRepositories(connection);

    console.log('BOOTSTRAP');
 
    const schema = await buildSchema({
        resolvers: [PetResolver, UserResolver],
        emitSchemaFile: {
            path: __dirname + "/schema.gql",
            commentDescriptions: true,
            sortedSchema: false, // by default the printed schema is sorted alphabetically
        },
//        container: Container,
    });
    
    return {
        schema
    }
  
}



export default bootstrap;

