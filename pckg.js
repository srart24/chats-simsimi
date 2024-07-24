const fs = require('fs').promises;
const path = require('path');

const libPath = path.join(process.cwd(), 'dist');

async function writePackageJson() {
  try {
    await fs.access(libPath);

    const paths = {
      cjs: path.join(libPath, 'cjs'),
      esm: path.join(libPath, 'esm')
    };

    for (const [key, dir] of Object.entries(paths)) {
      try {
        await fs.access(dir);
        const type = key === 'cjs' ? 'commonjs' : 'module';
        await fs.writeFile(path.join(dir, 'package.json'), JSON.stringify({ type }, null, 2));
        console.log(`Write ${key.toUpperCase()} package.json`);
      } catch {
        console.warn(`${key.toUpperCase()} folder not found`);
      }
    }

  } catch {
    console.error('Dist folder not found');
    process.exit(1);
  }
}

if (require.main === module) {
  writePackageJson().catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}
