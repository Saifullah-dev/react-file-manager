import { describe, it, expect } from 'vitest';
import { getFileExtension } from '../getFileExtension.js';

describe('getFileExtension', () => {
  it('returns correct extension for a simple filename', () => {
    expect(getFileExtension('document.pdf')).toBe('pdf');
  });

  it('returns correct extension for common file types', () => {
    expect(getFileExtension('image.png')).toBe('png');
    expect(getFileExtension('archive.tar.gz')).toBe('gz');
    expect(getFileExtension('script.test.js')).toBe('js');
  });

  it('handles multiple dots in filename by returning last extension', () => {
    expect(getFileExtension('my.file.name.txt')).toBe('txt');
    expect(getFileExtension('backup.2024.01.tar.gz')).toBe('gz');
  });

  it('returns filename itself for no extension (no dot)', () => {
    expect(getFileExtension('Makefile')).toBe('Makefile');
    expect(getFileExtension('README')).toBe('README');
  });
});
