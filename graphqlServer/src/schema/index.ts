import Knex from 'knex';
import { createSqlmancerClient } from "sqlmancer";
import dbconfig from '../database/config';
import { SqlmancerClient } from './graphql/generated';

const db = Knex(dbconfig["development"]);

export const client = createSqlmancerClient<SqlmancerClient>("./graphql/schema.graphql", db);

