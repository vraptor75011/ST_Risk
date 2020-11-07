
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.model';

export enum Species {
    BIRDS = "BIRDS",
    FISH = "FISH",
    MAMMALS = "MAMMALS",
    REPTILES = "REPTILES"
}

registerEnumType(Species, {
    name: "Species"
})

@ObjectType()
@Entity('pets')
class Pet {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field()
    @Column()
    name: string;

    @Field(type => ID)
    @Column()
    ownerId: string;

    @Field(type => Species)
    @Column()
    specie: Species;

    @Field()
    @CreateDateColumn()
    created_at: Date

    @Field(type => User)
    @ManyToOne(() => User, user => user.pets)
    owner?: User;
}

export { Pet };
