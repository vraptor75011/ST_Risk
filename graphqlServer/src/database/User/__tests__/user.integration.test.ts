import { GenericContainer, StartedTestContainer } from 'testcontainers';

describe('Database test suite', () => {
  
  let pgContainer:StartedTestContainer;

  beforeAll(async () => {
    /* init container */
    pgContainer = await new GenericContainer('postgres', 'latest')
      .withEnv('POSTGRES_USER', 'test')
      .withEnv('POSTGRES_PASSWORD', 'test')
      .withExposedPorts(5432)
      .start();
    //    jest.setTimeout(60000);

    /* change environment database URL to point to container URL */
        process.env.PG_URL = `postgres://test:test@localhost:${pgContainer.getMappedPort(
          5432
        )}/test`;

    /* create database schema in container */
    //      await knex.migrate.latest();
  },30000);

  afterAll(async () => {
    /* delete schema and data from container */
    //     await knex.destroy();

    /* stop Postgres contrainer */
    await pgContainer.stop();
  });

  test('User must be created', () => {
  /* test with matchers */
    console.log(process.env.PG_URL);

  });
});
