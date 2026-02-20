import { describe, it, expect } from 'vitest';
import { getParentPath } from '../getParentPath.js';

describe('getParentPath', () => {
  it('returns parent path for a nested path', () => {
    expect(getParentPath('root/documents/file.txt')).toBe('root/documents');
  });

  it('returns empty string for root-level path (single segment)', () => {
    expect(getParentPath('file.txt')).toBe('');
  });

  it('handles deeply nested paths', () => {
    expect(getParentPath('a/b/c/d/e/f')).toBe('a/b/c/d/e');
  });

  it('returns parent for two-level path', () => {
    expect(getParentPath('documents/report.pdf')).toBe('documents');
  });

  it('handles undefined input gracefully', () => {
    expect(getParentPath(undefined as any)).toBeUndefined();
  });
});
