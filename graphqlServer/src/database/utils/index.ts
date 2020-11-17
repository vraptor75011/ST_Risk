import { getCustomRepository } from 'typeorm';
import { PetRepository } from '../Pet/pet.repository';
import { UserRepository } from '../User/user.repository';

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
