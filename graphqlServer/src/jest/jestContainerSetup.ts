import { GenericContainer, Network, StartedTestContainer } from 'testcontainers';

var pgContainer: StartedTestContainer;

const init = async () => {
/* init container */
  const network = await new Network()
    .start();

    pgContainer = await new GenericContainer('postgres', 'latest')
      .withEnv('POSTGRES_USER', 'test')
      .withEnv('POSTGRES_PASSWORD', 'test')
      .withEnv('LC_ALL', 'en_US.UTF-8')
      .withEnv('LANG', 'en_US.UTF-8')
      .withEnv('LANGUAGE', 'en_US.UTF-8')
      .withExposedPorts(5432)
      .withNetworkMode(network.getName())
      .start();
/* change environment database URL to point to container URL */
  process.env.PG_USER = 'test';
  process.env.PG_PASSWORD = 'test';
  process.env.PG_DATABASE = '';
//  process.env.PG_HOST = pgContainer.getIpAddress(network.getName());
  process.env.PG_HOST = 'localhost';
  process.env.PG_PORT = `${pgContainer.getMappedPort(5432)}`;
  process.env.PG_USE_SSL = 'false';
//  process.env.PG_PORT = '5432';
//  process.env.PG_URL = `postgres://test:test@localhost:${pgContainer.getMappedPort(5432)}`;
   /* create database schema in container */
    //      await knex.migrate.latest();

}
export default init
export { pgContainer };
