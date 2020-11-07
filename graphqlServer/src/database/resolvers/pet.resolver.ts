import { Query, Resolver } from "type-graphql";
import { petRepository } from '../entities';
import { Pet } from '../entities/pet.model';

@Resolver()
export class PetResolver {
//    @Query(() => String)
//    hello() {
//        return "world"
//    }
    @Query(returns => [Pet])
    pets() {
        return petRepository.find();
    }
}