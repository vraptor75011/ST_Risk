

const teardown = async () => {
    /* delete schema and data from container */
    //     await knex.destroy();

    /* stop Postgres contrainer */
    await window.pgContainer.stop();
}

export default teardown