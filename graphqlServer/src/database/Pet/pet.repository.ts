import { EntityRepository, Repository } from 'typeorm';
import { User } from '../user/user.model';
import { Pet } from './pet.model';
@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {
    setOwner(owner: User) {
        

    }

}