import { Query, Resolver } from "type-graphql";
import { petRepository } from '../utils';
import { Pet } from './pet.model';

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