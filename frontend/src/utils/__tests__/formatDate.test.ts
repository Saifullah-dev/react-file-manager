import { describe, it, expect } from 'vitest';
import { formatDate } from '../formatDate.js';

describe('formatDate', () => {
  it('formats a valid date correctly', () => {
    // Use a specific date: July 15, 2024, 2:30 PM (local time)
    const date = new Date(2024, 6, 15, 14, 30); // month is 0-indexed
    const result = formatDate(date.toISOString());
    // The function uses local time via getHours(), getMinutes(), etc.
    expect(result).toBe('7/15/2024 2:30 PM');
  });

  it('returns empty string for null', () => {
    expect(formatDate(null)).toBe('');
  });

  it('returns empty string for undefined', () => {
    expect(formatDate(undefined)).toBe('');
  });

  it('returns empty string for invalid date strings', () => {
    expect(formatDate('not-a-date')).toBe('');
    expect(formatDate('abc123')).toBe('');
  });

  it('correctly handles AM times', () => {
    // 9:05 AM
    const date = new Date(2024, 0, 10, 9, 5);
    const result = formatDate(date.toISOString());
    expect(result).toBe('1/10/2024 9:05 AM');
  });

  it('correctly handles PM times', () => {
    // 3:45 PM
    const date = new Date(2024, 5, 20, 15, 45);
    const result = formatDate(date.toISOString());
    expect(result).toBe('6/20/2024 3:45 PM');
  });

  it('correctly formats midnight (12 AM)', () => {
    // Midnight: hour 0 => should display as 12 AM
    const date = new Date(2024, 2, 1, 0, 0);
    const result = formatDate(date.toISOString());
    expect(result).toBe('3/1/2024 12:00 AM');
  });

  it('correctly formats noon (12 PM)', () => {
    // Noon: hour 12 => should display as 12 PM
    const date = new Date(2024, 11, 25, 12, 0);
    const result = formatDate(date.toISOString());
    expect(result).toBe('12/25/2024 12:00 PM');
  });

  it('pads single-digit minutes with a leading zero', () => {
    // 8:03 AM
    const date = new Date(2024, 3, 5, 8, 3);
    const result = formatDate(date.toISOString());
    expect(result).toBe('4/5/2024 8:03 AM');
  });
});
