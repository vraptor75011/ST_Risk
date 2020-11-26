const gw = require('glob-watcher');
import * as path from 'path';
import createEntitiesIndex, { entitiesParams } from './createEntitiesIndex';
import createMigrationsIndex, {
  migrationsParams,
} from './createMigrationsIndex';

/**
 * Utility for TypeOrm to build configuration options programmatically :
 *  - watch and builds Entities Index
 *  - watch and builds Migration Index
 *
 * Usage : ts-node-dev --respawn ./webpack/utils/createTypeOrmIndexes.ts
 *
 */

const entities: entitiesParams = {
  entitiesSrc: 'src',
  entitiesGlobPattern: '**/*.model.ts',
  entitiesOut: 'src/database/utils',
  entitiesOutFileName: 'entities.index.ts',
};

const migrations: migrationsParams = {
  migrationsSrc: 'src',
  migrationsGlobPattern: '**/migrations/*.ts',
  migrationsOut: 'src/database/utils',
  migrationsOutFileName: 'migrations.index.ts',
};

createMigrationsIndex(migrations);
createEntitiesIndex(entities);

gw(
  [
    `${path.resolve(
      __dirname,
      './../../',
      migrations.migrationsSrc,
      migrations.migrationsGlobPattern
    )}`,
    `!${path.resolve(
      __dirname,
      './../../',
      migrations.migrationsOut,
      migrations.migrationsOutFileName
    )}`,
    `${path.resolve(
      __dirname,
      './../../',
      migrations.migrationsSrc,
      entities.entitiesGlobPattern
    )}`,
    `!${path.resolve(
      __dirname,
      './../../',
      entities.entitiesOut,
      entities.entitiesOutFileName
    )}`,
  ],
  function (done: any) {
    createMigrationsIndex(migrations);
    createEntitiesIndex(entities);
    done();
  }
);
