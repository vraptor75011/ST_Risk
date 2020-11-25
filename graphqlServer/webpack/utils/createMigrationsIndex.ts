import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

/**
 * All paths relative to root dir
 *
 */

interface migrationsParams {
  migrationsSrc: string;
  migrationsGlobPattern: string;
  migrationsOut: string;
  migrationsOutFileName: string;
}

export { migrationsParams };

function createMigrationsIndex(params: migrationsParams): void {
  const rootDir = path.resolve(__dirname, './../..');
  console.log('Creating migrations index');
  const src = path.resolve(rootDir, params.migrationsSrc);
  if (!fs.existsSync(src)) {
    console.log(`App api cannot be found. Path not exist: ${src}`);
    process.exit(1);
  }
  const outDir = path.resolve(rootDir, params.migrationsOut);
  const tmpFile = path.resolve(outDir, 'tmp.' + params.migrationsOutFileName);
  const outFile = path.resolve(outDir, params.migrationsOutFileName);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }
  for (const item of fg.sync(`${src}/**/migrations/*.ts`)) {
    const filePath = path.relative(outDir, item).replace(/\.ts$/, '');
    const data = `export * from '${filePath}'\n`;
    fs.writeFileSync(tmpFile, data, { flag: 'a+' });
  }
  if (fs.existsSync(outFile) && fs.existsSync(tmpFile)) {
    fs.unlinkSync(outFile);
    console.log(`Old file '${outFile}' removed`);
  }
  if (fs.existsSync(tmpFile)) {
    fs.renameSync(tmpFile, outFile);
    console.log(`New file ${outFile} saved`);
  }
}

export default createMigrationsIndex;
