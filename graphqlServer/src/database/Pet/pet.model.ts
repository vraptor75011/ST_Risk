import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
//import { User } from '../user/user.model';

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
    @PrimaryGeneratedColumn("increment")
    id: string;

    @Field()
    @Column({type: "varchar", length: 60, nullable: false})
    name: string;

    @Field(type => Species)
    @Column()
    specie: Species;

    @Field()
    @CreateDateColumn()
    created_at: Date

//    @Field(type => User )
//    @ManyToOne(type => User, user => user.pets)
//    owner?: User;
}

export { Pet };
