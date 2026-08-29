export function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(String(reader.result)));
    reader.addEventListener('error', () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

export function loadImage(source: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', () => reject(new Error('Image could not be loaded')));
    image.src = source;
  });
}

export function downloadCanvas(canvas: HTMLCanvasElement, name: string): void {
  const link = document.createElement('a');
  link.download = `${name || 'tabletop-token'}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

export function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Canvas could not be exported'));
    }, 'image/png');
  });
}

export function downloadBlob(blob: Blob, name: string): void {
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.download = name;
  link.href = url;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function copyCanvas(canvas: HTMLCanvasElement): Promise<boolean> {
  if (!navigator.clipboard?.write || typeof ClipboardItem === 'undefined') return false;
  const blob = await canvasToBlob(canvas);
  await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
  return true;
}

interface ZipEntry {
  name: string;
  data: Uint8Array;
}

const crc32Table = Array.from({ length: 256 }, (_, value) => {
  let crc = value;
  for (let bit = 0; bit < 8; bit += 1) crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  return crc >>> 0;
});

function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  data.forEach((value) => { crc = crc32Table[(crc ^ value) & 0xff]! ^ (crc >>> 8); });
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(view: DataView, offset: number, value: number): void {
  view.setUint16(offset, value, true);
}

function writeUint32(view: DataView, offset: number, value: number): void {
  view.setUint32(offset, value, true);
}

function createLocalEntry(entry: ZipEntry, name: Uint8Array, checksum: number): Uint8Array {
  const local = new Uint8Array(30 + name.length + entry.data.length);
  const view = new DataView(local.buffer);
  writeUint32(view, 0, 0x04034b50); writeUint16(view, 4, 20); writeUint16(view, 6, 0x800);
  writeUint16(view, 8, 0); writeUint16(view, 10, 0); writeUint16(view, 12, 0);
  writeUint32(view, 14, checksum); writeUint32(view, 18, entry.data.length); writeUint32(view, 22, entry.data.length);
  writeUint16(view, 26, name.length); local.set(name, 30); local.set(entry.data, 30 + name.length);
  return local;
}

function createCentralEntry(entry: ZipEntry, name: Uint8Array, checksum: number, offset: number): Uint8Array {
  const central = new Uint8Array(46 + name.length);
  const view = new DataView(central.buffer);
  writeUint32(view, 0, 0x02014b50); writeUint16(view, 4, 20); writeUint16(view, 6, 20); writeUint16(view, 8, 0x800);
  writeUint16(view, 10, 0); writeUint16(view, 12, 0); writeUint16(view, 14, 0); writeUint32(view, 16, checksum);
  writeUint32(view, 20, entry.data.length); writeUint32(view, 24, entry.data.length); writeUint16(view, 28, name.length);
  writeUint16(view, 30, 0); writeUint16(view, 32, 0); writeUint16(view, 34, 0); writeUint16(view, 36, 0);
  writeUint32(view, 38, 0); writeUint32(view, 42, offset); central.set(name, 46);
  return central;
}

function createZipEnd(entryCount: number, centralSize: number, offset: number): Uint8Array {
  const end = new Uint8Array(22);
  const view = new DataView(end.buffer);
  writeUint32(view, 0, 0x06054b50); writeUint16(view, 8, entryCount); writeUint16(view, 10, entryCount);
  writeUint32(view, 12, centralSize); writeUint32(view, 16, offset);
  return end;
}

export async function zipBlobs(files: Array<{ name: string; blob: Blob }>): Promise<Blob> {
  const entries: ZipEntry[] = await Promise.all(files.map(async ({ name, blob }) => ({
    name,
    data: new Uint8Array(await blob.arrayBuffer()),
  })));
  const encoder = new TextEncoder();
  const localParts: Uint8Array[] = [];
  const centralParts: Uint8Array[] = [];
  let offset = 0;

  entries.forEach((entry) => {
    const name = encoder.encode(entry.name);
    const checksum = crc32(entry.data);
    const local = createLocalEntry(entry, name, checksum);
    localParts.push(local);
    centralParts.push(createCentralEntry(entry, name, checksum, offset));
    offset += local.length;
  });

  const centralSize = centralParts.reduce((total, part) => total + part.length, 0);
  return new Blob([...localParts, ...centralParts, createZipEnd(entries.length, centralSize, offset)], { type: 'application/zip' });
}

export function cleanName(name: string): string {
  return name.replace(/\.[^/.]+$/, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'tabletop-token';
}
