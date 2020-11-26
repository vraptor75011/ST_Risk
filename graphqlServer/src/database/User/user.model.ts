import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pet } from '../pet/pet.model';

// User Model
@ObjectType()
@Entity('users')
class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 60, nullable: false })
  full_name: string;

  @Field()
  @Column({ type: 'varchar', length: 10, nullable: false })
  country_code: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field((type) => [Pet])
  @OneToMany(() => Pet, (pet) => pet.owner)
  pets?: Pet[];
}

//

export { User };
