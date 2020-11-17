import { petRepository, userRepository } from "../utils";

export async function seedDatabase() {
//    const userRepository = getRepository(User);
//    const petRepository = getRepository(Pet);

    const defaultUser = userRepository.create({
        full_name: "Olivier",       
    })

    console.log(defaultUser);

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