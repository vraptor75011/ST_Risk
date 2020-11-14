import { getCustomRepository } from 'typeorm';
import { PetRepository } from './pet.repository';
import { UserRepository } from './user.repository';

//export {
//    User,
//    Pet,
//};

export let userRepository: UserRepository;
export let petRepository: PetRepository;

export function initRepositories() {
    userRepository = getCustomRepository(UserRepository);
    petRepository = getCustomRepository(PetRepository);
}
