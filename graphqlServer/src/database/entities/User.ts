import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import Pet from "./Pet";

@Entity()
@ObjectType()
export default class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    full_name: string;

    @Field(() => String)
    @Column()
    country_code: string;
    
    @Field(() => String)
    @CreateDateColumn()
    created_at: Date;

    @Field(() => [Pet])
    pets: Pet[];
}
