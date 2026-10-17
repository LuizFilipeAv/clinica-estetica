import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/images', { recursive: true });
for (const name of ['retrato', 'espaco', 'facial']) {
  const source = `assets/originals/${name}.png`;
  for (const [suffix, width] of [['', 1440], ['-small', 720]]) {
    await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 86, effort: 6 }).toFile(`public/images/${name}${suffix}.webp`);
  }
}
