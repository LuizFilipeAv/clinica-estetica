import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const manifest = JSON.parse(readFileSync('docs/assets.json', 'utf8'));
mkdirSync('docs/prompts', { recursive: true });
for (const image of manifest.images) {
  const promptFile = `docs/prompts/${image.name}.txt`;
  writeFileSync(promptFile, image.prompt);
  for (const path of [`assets/originals/${image.name}.png`, `public/images/${image.name}.webp`, `public/images/${image.name}-small.webp`]) {
    const result = spawnSync('.agents/skills/impeccable/scripts/bin/windows-x64/impeccable.exe', ['embed-prompt', path, '--prompt-file', promptFile], { encoding: 'utf8' });
    if (result.status !== 0) throw new Error(result.stderr || result.stdout || 'Could not embed provenance');
    console.log(result.stdout.trim());
  }
}
