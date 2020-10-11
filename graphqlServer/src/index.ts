import { ApolloServer, Config } from "apollo-server-koa";
import * as dotenv from 'dotenv';
import Knex from 'knex';
import Koa from "koa";
import KoaRouter from "koa-router";
import { Model } from 'objection';
import dbconfig from './database/config';
import schema from './schema';

const db = Knex(dbconfig["development"]);

Model.knex(db);
dotenv.config({ path: process.env.PWD + '/.env' });

async function main() {
    const app = createApp();
    const port = process.env.APP_PORT || 3100;
    console.log(port);
  
    app.listen(port);
  
    console.log(`Listening on port ${port}`);
  }

//const app: Application  = express();
function createApp(): Koa {
    const app = new Koa();
  
    const router = new KoaRouter();

    const config : Config = {
        schema:schema,
        introspection: true,//these lines are required to use the gui 
        playground: true,//   of playground
    
    }

    const server : ApolloServer = new ApolloServer(config);

    
  
 /*    const server = new ApolloServer({
      typeDefs: gql(`
        type RootQuery
  
        type RootMutation
  
        schema {
          query: RootQuery
          mutation: RootMutation
        }
      `),
      context: ({ ctx }) => ctx,
      formatError: errorHandler,
      resolvers: {
        RootQuery: {},
        RootMutation: {},
      }
    });
  */
    
    router.get("/healthz", ctxt => {
      ctxt.body = "ok";
    });
  
    router.post("/graphql", server.getMiddleware());
    router.get("/graphql", server.getMiddleware());
  
    app.use(router.routes());
    app.use(router.allowedMethods());
  
    return app;
}
  
main();



/* 

server.applyMiddleware({
    app,
    path: '/graphql'
  });

app.listen(3000,()=>{// change later to 4000
    console.log("We are running on http://localhost:3000/graphql")
}) */