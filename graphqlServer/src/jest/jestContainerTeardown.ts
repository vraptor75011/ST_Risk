import { pgContainer } from './jestContainerSetup';

const teardown = async () => {
    await pgContainer.stop();
}

export default teardown