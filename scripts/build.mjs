import { mkdir, copyFile, writeFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'app.js', 'styles.css']) await copyFile(`web/${file}`, `dist/${file}`);
await writeFile('dist/.nojekyll', '');
console.log('Static website built in dist/');
