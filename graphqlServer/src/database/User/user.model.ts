import { Field, ID, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pet } from '../Pet/pet.model';

@ObjectType()
@Entity('users')
class User {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field()
    @Column()
    full_name?: string;

    @Field()
    @Column({nullable: true})
    country_code?: string;
    
    @Field()
    @CreateDateColumn()
    created_at: Date;

    @Field(type => [Pet])
    @OneToMany(() => Pet, pet => pet.owner)
    pets?: Pet[];
}

export { User };

