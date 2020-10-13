import Knex from 'knex';
import {
  CreateManyBuilder,
  CreateOneBuilder,
  DeleteByIdBuilder,
  DeleteManyBuilder,
  FindByIdBuilder,
  FindManyBuilder,
  FindOneBuilder,
  PaginateBuilder,
  UpdateByIdBuilder,
  UpdateManyBuilder
} from 'sqlmancer';

export type ID = number | string;
export type JSON = boolean | number | string | null | JSONArray | JSONObject;
export interface JSONObject {
  [key: string]: JSON;
}
export type JSONArray = Array<JSON>;

export type UserFields = {
  id: number;
  fullName: string;
  countryCode: string;
  createdAt: string;
}
    
export type UserIds = unknown;
    
export type UserEnums = unknown;
    
export type UserAssociations = {
  pets: [PetFindManyBuilder, PetPaginateBuilder];
}
    
export type UserCreateFields = {
  id: number;
  fullName?: string;
  countryCode?: string;
  createdAt?: string;
};
    
export type UserUpdateFields = {
  fullName?: string;
  countryCode?: string;
  createdAt?: string;
};
    
export type UserFindOneBuilder<TSelected extends Pick<UserFields, any> = UserFields> = FindOneBuilder<
  'postgres',
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations,
  TSelected
>

export type UserFindManyBuilder<TSelected extends Pick<UserFields, any> = UserFields> = FindManyBuilder<
  'postgres',
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations,
  TSelected
>

export type UserFindByIdBuilder<TSelected extends Pick<UserFields, any> = UserFields> = FindByIdBuilder<
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations,
  TSelected
>

export type UserPaginateBuilder = PaginateBuilder<'postgres', UserFields, UserIds, UserEnums, UserAssociations>
      
export type UserDeleteManyBuilder = DeleteManyBuilder<
  'postgres',
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations
>

export type UserDeleteByIdBuilder = DeleteByIdBuilder

export type UserCreateManyBuilder = CreateManyBuilder<UserCreateFields>

export type UserCreateOneBuilder = CreateOneBuilder<UserCreateFields>

export type UserUpdateManyBuilder = UpdateManyBuilder<
  'postgres',
  UserUpdateFields,
  UserFields,
  UserIds,
  UserEnums,
  UserAssociations
>

export type UserUpdateByIdBuilder = UpdateByIdBuilder<UserUpdateFields>
  
export type PetFields = {
  id: number;
  name: string;
  ownerId: number;
  specie: Species;
  createdAt: string;
}
    
export type PetIds = unknown;
    
export type PetEnums = Species;
    
export type PetAssociations = {
  owner: [UserFindOneBuilder, UserPaginateBuilder];
}
    
export type PetCreateFields = {
  id: number;
  name?: string;
  ownerId: number;
  specie?: Species;
  createdAt?: string;
};
    
export type PetUpdateFields = {
  id?: number;
  name?: string;
  ownerId?: number;
  specie?: Species;
  createdAt?: string;
};
    
export type PetFindOneBuilder<TSelected extends Pick<PetFields, any> = PetFields> = FindOneBuilder<
  'postgres',
  PetFields,
  PetIds,
  PetEnums,
  PetAssociations,
  TSelected
>

export type PetFindManyBuilder<TSelected extends Pick<PetFields, any> = PetFields> = FindManyBuilder<
  'postgres',
  PetFields,
  PetIds,
  PetEnums,
  PetAssociations,
  TSelected
>

export type PetFindByIdBuilder<TSelected extends Pick<PetFields, any> = PetFields> = FindByIdBuilder<
  PetFields,
  PetIds,
  PetEnums,
  PetAssociations,
  TSelected
>

export type PetPaginateBuilder = PaginateBuilder<'postgres', PetFields, PetIds, PetEnums, PetAssociations>
      
export type PetDeleteManyBuilder = DeleteManyBuilder<
  'postgres',
  PetFields,
  PetIds,
  PetEnums,
  PetAssociations
>

export type PetDeleteByIdBuilder = DeleteByIdBuilder

export type PetCreateManyBuilder = CreateManyBuilder<PetCreateFields>

export type PetCreateOneBuilder = CreateOneBuilder<PetCreateFields>

export type PetUpdateManyBuilder = UpdateManyBuilder<
  'postgres',
  PetUpdateFields,
  PetFields,
  PetIds,
  PetEnums,
  PetAssociations
>

export type PetUpdateByIdBuilder = UpdateByIdBuilder<PetUpdateFields>
  
export enum Species {
  BIRDS = "BIRDS",
  FISH = "FISH",
  MAMMALS = "MAMMALS",
  REPTILES = "REPTILES",
}

export type SqlmancerClient = Knex & {
  models: {
    User: {
      findById: (id: ID) => UserFindByIdBuilder;
      findMany: () => UserFindManyBuilder;
      findOne: () => UserFindOneBuilder;
      paginate: () => UserPaginateBuilder;
      createMany: (input: UserCreateFields[]) => UserCreateManyBuilder;
      createOne: (input: UserCreateFields) => UserCreateOneBuilder;
      deleteById: (id: ID) => UserDeleteByIdBuilder;
      deleteMany: () => UserDeleteManyBuilder;
      updateById: (id: ID, input: UserUpdateFields) => UserUpdateByIdBuilder;
      updateMany: (input: UserUpdateFields) => UserUpdateManyBuilder;
    };
    Pet: {
      findById: (id: ID) => PetFindByIdBuilder;
      findMany: () => PetFindManyBuilder;
      findOne: () => PetFindOneBuilder;
      paginate: () => PetPaginateBuilder;
      createMany: (input: PetCreateFields[]) => PetCreateManyBuilder;
      createOne: (input: PetCreateFields) => PetCreateOneBuilder;
      deleteById: (id: ID) => PetDeleteByIdBuilder;
      deleteMany: () => PetDeleteManyBuilder;
      updateById: (id: ID, input: PetUpdateFields) => PetUpdateByIdBuilder;
      updateMany: (input: PetUpdateFields) => PetUpdateManyBuilder;
    };
  };
};
  