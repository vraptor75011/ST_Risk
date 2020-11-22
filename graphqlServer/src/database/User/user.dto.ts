import { Field, InputType } from "type-graphql";
import { User } from './user.model';

// User Data Transfer Object

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field()
  full_name: string;

  @Field()
  country_code: string;
}

@InputType()
export class UpdateUserInput implements Partial<User> {
  @Field({ nullable: true })
  full_name?: string;

  @Field({ nullable: true })
  country_code?: string;
}
