import { Connection } from 'typeorm';
import { PetRepository } from '../pet/pet.repository';
import { UserRepository } from '../user/user.repository';

export let userRepository: UserRepository;
export let petRepository: PetRepository;

const initRepositories = (connection:Connection) => {
    userRepository = connection.getCustomRepository(UserRepository);
    petRepository = connection.getCustomRepository(PetRepository);
}

export default initRepositories;
