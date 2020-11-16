import { pgContainer } from '../../../jest/jestContainerSetup';

describe('Database test suite', () => {
  
  beforeAll(async () => {
    console.log(pgContainer);

    /* init container */
  });

  afterAll(async () => {
    /* delete schema and data from container */
    //     await knex.destroy();

    /* stop Postgres contrainer */
    await pgContainer.stop();
  });

  test('User must be created', () => {
  /* test with matchers */
    console.log(pgContainer);

  });
});
