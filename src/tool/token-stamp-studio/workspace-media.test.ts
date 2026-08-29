import { describe, expect, it } from 'vitest';
import { zipBlobs } from './workspace-media';

describe('zipBlobs', () => {
  it('creates a readable zip with every exported png', async () => {
    const archive = await zipBlobs([
      { name: 'hero.png', blob: new Blob([new Uint8Array([1, 2, 3])]) },
      { name: 'mage.png', blob: new Blob([new Uint8Array([4, 5, 6])]) },
    ]);
    const bytes = new Uint8Array(await archive.arrayBuffer());
    const end = new DataView(bytes.buffer, bytes.byteOffset + bytes.byteLength - 22, 22);
    const content = new TextDecoder().decode(bytes);

    expect(archive.type).toBe('application/zip');
    expect(bytes.slice(0, 4)).toEqual(new Uint8Array([0x50, 0x4b, 0x03, 0x04]));
    expect(end.getUint16(8, true)).toBe(2);
    expect(content).toContain('hero.png');
    expect(content).toContain('mage.png');
  });
});
