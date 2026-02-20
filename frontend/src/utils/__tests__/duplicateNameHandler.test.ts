import { describe, it, expect } from 'vitest';
import { duplicateNameHandler } from '../duplicateNameHandler.js';

// Helper to create file objects
const file = (name: string, isDirectory = false) => ({ name, isDirectory });

describe('duplicateNameHandler', () => {
  it('returns original name if no duplicates exist', () => {
    const files = [file('other.txt'), file('another.txt')];
    expect(duplicateNameHandler('unique.txt', false, files)).toBe('unique.txt');
  });

  it('appends (1) for the first duplicate of a file', () => {
    const files = [file('report.txt')];
    expect(duplicateNameHandler('report.txt', false, files)).toBe(
      'report (1).txt'
    );
  });

  it('appends (2) when (1) already exists for a file', () => {
    const files = [file('report.txt'), file('report (1).txt')];
    expect(duplicateNameHandler('report.txt', false, files)).toBe(
      'report (2).txt'
    );
  });

  it('handles directories (no extension)', () => {
    const files = [file('Documents', true)];
    expect(duplicateNameHandler('Documents', true, files)).toBe(
      'Documents (1)'
    );
  });

  it('appends incrementing numbers for directory duplicates', () => {
    const files = [
      file('Documents', true),
      file('Documents (1)', true),
      file('Documents (2)', true),
    ];
    expect(duplicateNameHandler('Documents', true, files)).toBe(
      'Documents (3)'
    );
  });

  it('handles files with extensions correctly', () => {
    const files = [file('photo.png'), file('photo (1).png')];
    expect(duplicateNameHandler('photo.png', false, files)).toBe(
      'photo (2).png'
    );
  });

  it('returns original directory name if no duplicates exist', () => {
    const files = [file('OtherFolder', true)];
    expect(duplicateNameHandler('MyFolder', true, files)).toBe('MyFolder');
  });
});
