import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

/**
 * All paths relative to root dir
 *
 */
interface entitiesParams {
  entitiesSrc: string;
  entitiesGlobPattern: string;
  entitiesOut: string;
  entitiesOutFileName: string;
}

export { entitiesParams };

function createEntitiesIndex(params: entitiesParams): void {
  const rootDir = path.resolve(__dirname, './../..');
  console.log('Creating entities index');
  const src = path.resolve(rootDir, params.entitiesSrc);
  if (!fs.existsSync(src)) {
    console.log(`App api cannot be found. Path not exist: ${src}`);
    process.exit(1);
  }
  const outDir = path.resolve(rootDir, params.entitiesOut);
  const tmpFile = path.resolve(outDir, 'tmp.' + params.entitiesOutFileName);
  const outFile = path.resolve(outDir, params.entitiesOutFileName);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }
  for (const item of fg.sync(`${src}/**/*.model.ts`)) {
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

export default createEntitiesIndex;
