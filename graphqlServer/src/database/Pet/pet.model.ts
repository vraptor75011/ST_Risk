import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.model';
import { Species } from './pet.enum';

@ObjectType()
@Entity('pets')
class Pet {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 60, nullable: false })
  name: string;

  @Field((type) => Species)
  @Column()
  specie: Species;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.pets)
  owner?: User;
}

//

export { Pet };
