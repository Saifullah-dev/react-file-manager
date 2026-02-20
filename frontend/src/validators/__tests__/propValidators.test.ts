import { describe, it, expect } from 'vitest';
import { dateStringValidator, urlValidator } from '../propValidators.js';

describe('dateStringValidator', () => {
  it('accepts valid ISO date strings', () => {
    const props = { createdAt: '2024-01-15T10:30:00Z' };
    const result = dateStringValidator(props, 'createdAt', 'TestComponent');
    expect(result).toBeUndefined();
  });

  it('accepts valid date-only strings', () => {
    const props = { createdAt: '2024-06-15' };
    const result = dateStringValidator(props, 'createdAt', 'TestComponent');
    expect(result).toBeUndefined();
  });

  it('rejects invalid date strings', () => {
    const props = { createdAt: 'not-a-date' };
    const result = dateStringValidator(props, 'createdAt', 'TestComponent');
    expect(result).toBeInstanceOf(Error);
    expect(result?.message).toContain('Invalid prop');
    expect(result?.message).toContain('createdAt');
    expect(result?.message).toContain('TestComponent');
  });

  it('accepts undefined (optional prop)', () => {
    const props = {};
    const result = dateStringValidator(
      props,
      'createdAt',
      'TestComponent'
    );
    expect(result).toBeUndefined();
  });

  it('rejects random strings that are not dates', () => {
    const props = { date: 'abc123xyz' };
    const result = dateStringValidator(props, 'date', 'MyComponent');
    expect(result).toBeInstanceOf(Error);
    expect(result?.message).toContain('abc123xyz');
  });
});

describe('urlValidator', () => {
  it('accepts valid HTTP URLs', () => {
    const props = { endpoint: 'https://example.com/api' };
    const result = urlValidator(props, 'endpoint', 'TestComponent');
    expect(result).toBeUndefined();
  });

  it('accepts valid URLs with paths and query params', () => {
    const props = { endpoint: 'https://api.example.com/v1/files?page=1' };
    const result = urlValidator(props, 'endpoint', 'TestComponent');
    expect(result).toBeUndefined();
  });

  it('rejects invalid URLs', () => {
    const props = { endpoint: 'not-a-url' };
    const result = urlValidator(props, 'endpoint', 'TestComponent');
    expect(result).toBeInstanceOf(Error);
    expect(result?.message).toContain('Invalid prop');
    expect(result?.message).toContain('endpoint');
    expect(result?.message).toContain('TestComponent');
  });

  it('rejects empty strings', () => {
    const props = { endpoint: '' };
    const result = urlValidator(props, 'endpoint', 'TestComponent');
    expect(result).toBeInstanceOf(Error);
  });

  it('accepts valid URLs with different protocols', () => {
    const props = { endpoint: 'ftp://files.example.com/docs' };
    const result = urlValidator(props, 'endpoint', 'TestComponent');
    expect(result).toBeUndefined();
  });
});
