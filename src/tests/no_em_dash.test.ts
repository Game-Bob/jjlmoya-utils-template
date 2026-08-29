import { describe, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

function getFiles(dir: string, ext: string[]): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results.push(...getFiles(fullPath, ext));
    } else if (ext.some((e) => file.endsWith(e))) {
      results.push(fullPath);
    }
  }
  return results;
}

const EM_DASH = '\u2014';

describe('Em Dash Prohibition', () => {
  const files = [
    ...getFiles(path.join(process.cwd(), 'src', 'tool'), ['.ts']),
    ...getFiles(path.join(process.cwd(), 'src', 'category'), ['.ts']),
  ].filter(f => f.includes('i18n'));

  it.each(files)('should not contain em dash (—) in %s', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(process.cwd(), filePath);

    const lines = content.split('\n');
    const findings: { line: number; text: string }[] = [];

    lines.forEach((line, index) => {
      if (line.includes(EM_DASH)) {
        findings.push({ line: index + 1, text: line.trim() });
      }
    });

    if (findings.length > 0) {
      const list = findings.map((f) => `  Line ${f.line}: ${f.text}`).join('\n');
      throw new Error(`Em dash (—) found in ${relativePath}:\n${list}`);
    }
  });
});
