import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Repository } from 'typeorm';
import { InjectRepository } from "typeorm-typedi-extensions";
import { typeOrmConfigWithConnectionName } from '../utils/orm.config.with.connection.name';
import { CreateUserInput } from './user.dto';
import { User } from './user.model';

@Resolver()
export class UserResolver {

    constructor(
        connectionName:string,
        @InjectRepository(User, typeOrmConfigWithConnectionName.name as string) private userRepository:Repository<User>
    ) { }
    
    @Query(returns => [User])
    async users() {
        return await this.userRepository.find();
    }

    @Mutation(returns => User)
    async addUser(@Arg("data") newUserData: CreateUserInput): Promise<User> {
        const newUser =this.userRepository.create(newUserData);
        console.log(newUser);
        const newUserSaved = await this.userRepository.save(newUser);
        return (newUserSaved);
    }
}