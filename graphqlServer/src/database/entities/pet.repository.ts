import { EntityRepository, Repository } from 'typeorm';
import { Pet } from './pet.model';
import { User } from './user.model';

@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {
    setOwner(owner: User) {
        

    }

}