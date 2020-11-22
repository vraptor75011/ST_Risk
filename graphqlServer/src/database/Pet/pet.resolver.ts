import { Query, Resolver } from "type-graphql";

@Resolver()
export class PetResolver {
    @Query(() => String)
    hello() {
        return "world"
    }
//    @Query(returns => [Pet])
//    pets() {
//        return petRepository.find();
//    }
}