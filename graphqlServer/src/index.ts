import { ApolloServer, Config } from "apollo-server-koa";
import * as dotenv from 'dotenv';
import { GraphQLSchema } from 'graphql';
import * as Koa from "koa";
import * as KoaRouter from "koa-router";
import bootstrap from './database/index';

dotenv.config({ path: process.env.PWD + '/.env' });

async function main() {
  bootstrap().then(({ schema }) => {
    const app = createApp(schema);
    const port = process.env.APP_PORT || 3100;
    app.listen(port);
    console.log(`Listening on port ${port}`);    
  })
}

function createApp(schema:GraphQLSchema): Koa {
    const app = new Koa();
    const router = new KoaRouter();
    const config : Config = {
        schema: schema,
        introspection: true,//these lines are required to use the gui 
        playground: true,//   of playground    
    }

    const server : ApolloServer = new ApolloServer(config);
    
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