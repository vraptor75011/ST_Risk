
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import User from './User';

export enum Species {
    BIRDS = "BIRDS",
    FISH = "FISH",
    MAMMALS = "MAMMALS",
    REPTILES = "REPTILES"
}
  
registerEnumType(Species, {
    name: "Species"
})

@Entity()
@ObjectType()
export default class Pet extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => ID)
    @Column()
    owner_id: string;

    @Field(() => Species)
    @Column()
    specie: Species;

    @Field(() => String)
    @CreateDateColumn()
    created_at: Date

    @Field(() => User)
    owner: User;
}