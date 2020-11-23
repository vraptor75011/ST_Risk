import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

function createMigrationsIndex() {
  console.log('Creating migrations.index.ts');
    const src = `${path.dirname(__dirname)}/src`;
  if (!fs.existsSync(src)) {
    console.log(`App api cannot be found. Path not exist: ${src}`);
    process.exit(1);
  }
  const outDir = `${src}/database/utils`;
  const tmpFile = `${outDir}/tmp.migrations.index.ts`;
  const outFile = `${outDir}/migrations.index.ts`;
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