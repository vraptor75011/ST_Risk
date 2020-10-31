import { getRepository } from "typeorm";
import { Pet, User } from "../entities";

export async function seedDatabase() {
    const userRepository = getRepository(User);
    const petRepository = getRepository(Pet);

    const defaultUser = userRepository.create({
        full_name: "Olivier",       
    })

    await userRepository.save(defaultUser);

    const pets = petRepository.create([
        {
            name: "Leon"
        },
        {
            name: "Manuia"
        }]);
    await petRepository.save(pets);

    return { defaultUser };
    
}