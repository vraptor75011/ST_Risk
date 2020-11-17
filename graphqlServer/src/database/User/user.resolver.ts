import { Query, Resolver } from "type-graphql";
import { userRepository } from '../utils';
import { User } from './user.model';

@Resolver()
export class UserResolver {
//    @Query(() => String)
//    hello() {
//        return "world"
//    }
    @Query(returns => [User])
    users() {
        return userRepository.find();
    }
}