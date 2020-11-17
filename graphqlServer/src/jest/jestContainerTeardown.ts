import { pgContainer } from './jestContainerSetup';

const teardown = async () => {
    /* delete schema and data from container */
    //     await knex.destroy();

/* stop Postgres contrainer */
//    console.log(pgContainer);
    await pgContainer.stop();
}

export default teardown