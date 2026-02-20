import { describe, it, expect } from 'vitest';
import sortFiles from '../sortFiles.js';

// Helper factory for creating file/folder objects
const createFile = (name: string, opts: Record<string, any> = {}) => ({
  name,
  isDirectory: false,
  ...opts,
});

const createFolder = (name: string, opts: Record<string, any> = {}) => ({
  name,
  isDirectory: true,
  ...opts,
});

describe('sortFiles', () => {
  describe('sorting by name', () => {
    it('sorts by name ascending', () => {
      const items = [
        createFile('charlie.txt'),
        createFile('alpha.txt'),
        createFile('bravo.txt'),
      ];
      const result = sortFiles(items, 'name', 'asc');
      expect(result.map((f) => f.name)).toEqual([
        'alpha.txt',
        'bravo.txt',
        'charlie.txt',
      ]);
    });

    it('sorts by name descending', () => {
      const items = [
        createFile('alpha.txt'),
        createFile('charlie.txt'),
        createFile('bravo.txt'),
      ];
      const result = sortFiles(items, 'name', 'desc');
      expect(result.map((f) => f.name)).toEqual([
        'charlie.txt',
        'bravo.txt',
        'alpha.txt',
      ]);
    });
  });

  describe('sorting by size', () => {
    it('sorts by size ascending', () => {
      const items = [
        createFile('large.txt', { size: 3000 }),
        createFile('small.txt', { size: 100 }),
        createFile('medium.txt', { size: 1500 }),
      ];
      const result = sortFiles(items, 'size', 'asc');
      expect(result.map((f) => f.name)).toEqual([
        'small.txt',
        'medium.txt',
        'large.txt',
      ]);
    });

    it('sorts by size descending', () => {
      const items = [
        createFile('large.txt', { size: 3000 }),
        createFile('small.txt', { size: 100 }),
        createFile('medium.txt', { size: 1500 }),
      ];
      const result = sortFiles(items, 'size', 'desc');
      expect(result.map((f) => f.name)).toEqual([
        'large.txt',
        'medium.txt',
        'small.txt',
      ]);
    });

    it('handles missing size values by treating them as 0', () => {
      const items = [
        createFile('has-size.txt', { size: 500 }),
        createFile('no-size.txt'),
        createFile('also-has-size.txt', { size: 100 }),
      ];
      const result = sortFiles(items, 'size', 'asc');
      expect(result.map((f) => f.name)).toEqual([
        'no-size.txt',
        'also-has-size.txt',
        'has-size.txt',
      ]);
    });
  });

  describe('sorting by modified date', () => {
    it('sorts by modified date ascending', () => {
      const items = [
        createFile('newest.txt', { updatedAt: '2024-03-01T00:00:00Z' }),
        createFile('oldest.txt', { updatedAt: '2024-01-01T00:00:00Z' }),
        createFile('middle.txt', { updatedAt: '2024-02-01T00:00:00Z' }),
      ];
      const result = sortFiles(items, 'modified', 'asc');
      expect(result.map((f) => f.name)).toEqual([
        'oldest.txt',
        'middle.txt',
        'newest.txt',
      ]);
    });

    it('sorts by modified date descending', () => {
      const items = [
        createFile('newest.txt', { updatedAt: '2024-03-01T00:00:00Z' }),
        createFile('oldest.txt', { updatedAt: '2024-01-01T00:00:00Z' }),
        createFile('middle.txt', { updatedAt: '2024-02-01T00:00:00Z' }),
      ];
      const result = sortFiles(items, 'modified', 'desc');
      expect(result.map((f) => f.name)).toEqual([
        'newest.txt',
        'middle.txt',
        'oldest.txt',
      ]);
    });

    it('handles missing date values by treating them as epoch 0', () => {
      const items = [
        createFile('has-date.txt', { updatedAt: '2024-01-15T00:00:00Z' }),
        createFile('no-date.txt'),
        createFile('also-has-date.txt', { updatedAt: '2024-06-01T00:00:00Z' }),
      ];
      const result = sortFiles(items, 'modified', 'asc');
      expect(result.map((f) => f.name)).toEqual([
        'no-date.txt',
        'has-date.txt',
        'also-has-date.txt',
      ]);
    });
  });

  describe('folders before files', () => {
    it('always puts folders before files regardless of sort key', () => {
      const items = [
        createFile('zebra.txt'),
        createFolder('alpha-folder'),
        createFile('apple.txt'),
        createFolder('zebra-folder'),
      ];
      const result = sortFiles(items, 'name', 'asc');
      // Folders come first, sorted, then files, sorted
      expect(result.map((f) => f.name)).toEqual([
        'alpha-folder',
        'zebra-folder',
        'apple.txt',
        'zebra.txt',
      ]);
    });

    it('puts folders before files when sorting descending', () => {
      const items = [
        createFile('a.txt'),
        createFolder('z-folder'),
        createFile('z.txt'),
        createFolder('a-folder'),
      ];
      const result = sortFiles(items, 'name', 'desc');
      // Folders come first (descending), then files (descending)
      expect(result.map((f) => f.name)).toEqual([
        'z-folder',
        'a-folder',
        'z.txt',
        'a.txt',
      ]);
    });
  });

  describe('fallback behavior', () => {
    it('falls back to name sorting for unknown sort keys', () => {
      const items = [
        createFile('charlie.txt'),
        createFile('alpha.txt'),
        createFile('bravo.txt'),
      ];
      const result = sortFiles(items, 'unknownKey', 'asc');
      expect(result.map((f) => f.name)).toEqual([
        'alpha.txt',
        'bravo.txt',
        'charlie.txt',
      ]);
    });
  });

  describe('default parameters', () => {
    it('uses name ascending as defaults when no sort key or direction provided', () => {
      const items = [
        createFile('charlie.txt'),
        createFile('alpha.txt'),
        createFile('bravo.txt'),
      ];
      const result = sortFiles(items);
      expect(result.map((f) => f.name)).toEqual([
        'alpha.txt',
        'bravo.txt',
        'charlie.txt',
      ]);
    });
  });
});
