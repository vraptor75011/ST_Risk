import Knex from 'knex';
import { createSqlmancerClient } from "sqlmancer";
import dbconfig from '../database/config';
import { SqlmancerClient } from './graphql/generated';

const db = Knex(dbconfig["development"]);

const client = createSqlmancerClient<SqlmancerClient>(__filename, db);

