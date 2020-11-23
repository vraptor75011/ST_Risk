const watchGlob = require('watch-glob');
import createEntitiesIndex from './createEntitiesIndex';
import createMigrationsIndex from './createMigrationsIndex';

createMigrationsIndex();
createEntitiesIndex();

watchGlob(['tmp/**/*', 'lib/**/*'], { callbackArg: 'relative' }, function (filePath:any) {
    createMigrationsIndex();
    createEntitiesIndex();
});