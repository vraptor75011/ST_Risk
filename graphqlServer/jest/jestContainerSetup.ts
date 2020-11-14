import { GenericContainer } from 'testcontainers';

//let pgContainer: StartedTestContainer;

const init = async () => {
/* init container */
    
    pgContainer = await new GenericContainer('postgres', 'latest')
      .withEnv('POSTGRES_USER', 'test')
      .withEnv('POSTGRES_PASSWORD', 'test')
      .withExposedPorts(5432)
      .start();
    //    jest.setTimeout(60000);

    /* change environment database URL to point to container URL */
        process.env.PG_URL = `postgres://test:test@localhost:${myGlobals.pgContainer.getMappedPort(
          5432
        )}/test`;

    /* create database schema in container */
    //      await knex.migrate.latest();
}
  
export default init