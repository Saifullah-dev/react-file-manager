import { describe, it, expect } from 'vitest';
import { getDataSize } from '../getDataSize.js';

describe('getDataSize', () => {
  it('returns KB for small sizes', () => {
    // 1024 bytes = 1 KB
    expect(getDataSize(1024)).toBe('1.00 KB');
    // 512 bytes = 0.5 KB
    expect(getDataSize(512)).toBe('0.50 KB');
    // 100000 bytes = ~97.66 KB
    expect(getDataSize(100000)).toBe('97.66 KB');
  });

  it('returns MB for medium sizes', () => {
    // 1 MB = 1024 * 1024 = 1048576 bytes
    expect(getDataSize(1048576)).toBe('1.00 MB');
    // 5 MB = 5242880 bytes
    expect(getDataSize(5242880)).toBe('5.00 MB');
  });

  it('returns GB for large sizes', () => {
    // 1 GB = 1073741824 bytes
    expect(getDataSize(1073741824)).toBe('1.00 GB');
    // 2.5 GB
    expect(getDataSize(2684354560)).toBe('2.50 GB');
  });

  it('returns empty string for NaN input', () => {
    expect(getDataSize(NaN)).toBe('');
    expect(getDataSize(undefined as any)).toBe('');
    expect(getDataSize('not-a-number' as any)).toBe('');
  });

  it('respects decimal places parameter', () => {
    // 1024 bytes = 1 KB with 0 decimal places
    expect(getDataSize(1024, 0)).toBe('1 KB');
    // 1024 bytes = 1 KB with 3 decimal places
    expect(getDataSize(1024, 3)).toBe('1.000 KB');
    // 1500 bytes with 1 decimal place
    expect(getDataSize(1500, 1)).toBe('1.5 KB');
  });
});
