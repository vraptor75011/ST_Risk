import { IResolvers } from 'graphql-tools';
import Knex from 'knex';
import { createSqlmancerClient, makeSqlmancerSchema } from "sqlmancer";
import dbconfig from '../database/config';
import { SqlmancerClient } from './graphql/generated';
import typeDefs from './graphql/schema.graphql';

const db = Knex(dbconfig["development"]);

const client = createSqlmancerClient<SqlmancerClient>('/Users/vraptor/WebDev/ST_Risk/graphqlServer/src/schema/graphql/schema.graphql', db);

const { models: { User, Pet } } = client;

const resolvers:IResolvers = {
    Query: {
        users: (root, args, ctx, info) => {
            return User.findMany()
            .resolveInfo(info)
            .execute();
        },
        user: (_root, args, _ctx, info) => {
            return User.findById(args.id).resolveInfo(info).execute()
        },
        pets: (root, args, ctx, info) => {
            return Pet.findMany()
            .resolveInfo(info)
            .execute();
        },
        pet: (_root, args, _ctx, info) => {
            return Pet.findById(args.id).resolveInfo(info).execute()
        },
    }
};
  
const schema = makeSqlmancerSchema({ typeDefs, resolvers: resolvers as any });

export default schema;

