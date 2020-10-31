import { Query, Resolver } from "type-graphql";


@Resolver()
export class UserResolver {
//    @Query(() => [User])
    @Query(() => String)
    hello() {
        return "world"
    }
//    users() {
//        return User.find()
//    }
}