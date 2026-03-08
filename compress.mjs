import { readdir, readFile, writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';

const dir = './public/images';
const files = await readdir(dir);

for (const file of files) {
    if (!file.endsWith('.png')) continue;
    const inputPath = join(dir, file);
    const outputPath = join(dir, file.replace('.png', '.jpg'));

    await sharp(inputPath)
        .jpeg({ quality: 70 })
        .resize({ width: 1600, withoutEnlargement: true })
        .toFile(outputPath);

    await unlink(inputPath);
    console.log(`${file} -> ${file.replace('.png', '.jpg')}`);
}
console.log('Done!');
