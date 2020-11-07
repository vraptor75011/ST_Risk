import { Query, Resolver } from "type-graphql";
import { userRepository } from '../entities';
import { User } from '../entities/user.model';

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