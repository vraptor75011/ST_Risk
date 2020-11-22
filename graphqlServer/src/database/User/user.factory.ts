import * as Factory from "factory.ts";
import * as faker from 'faker';
import { CreateUserInput } from './user.dto';

const userFactory = Factory.Sync.makeFactory<CreateUserInput>({
    full_name: Factory.each(()=>faker.name.lastName()) ,
    country_code: Factory.each(()=>faker.address.countryCode())    
})

export default userFactory;

