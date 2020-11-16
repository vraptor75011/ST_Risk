import { GenericContainer, StartedTestContainer } from 'testcontainers';

var pgContainer: StartedTestContainer;

const init = async () => {
/* init container */
    
    pgContainer = await new GenericContainer('postgres', 'latest')
      .withEnv('POSTGRES_USER', 'test')
      .withEnv('POSTGRES_PASSWORD', 'test')
      .withExposedPorts(5432)
      .start();
//        jest.setTimeout(60000);
    /* change environment database URL to point to container URL */
        process.env.PG_URL = `postgres://test:test@localhost:${pgContainer.getMappedPort(
          5432
        )}/test`;
  console.log(pgContainer);

    /* create database schema in container */
    //      await knex.migrate.latest();
}
  
export default init
export { pgContainer };
