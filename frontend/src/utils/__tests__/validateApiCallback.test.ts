import { describe, it, expect, vi } from 'vitest';
import { validateApiCallback } from '../validateApiCallback.js';

describe('validateApiCallback', () => {
  it('calls callback when it is a function', () => {
    const callback = vi.fn();
    validateApiCallback(callback, 'onFileUpload');
    expect(callback).toHaveBeenCalledOnce();
  });

  it('logs error when callback is not a function', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    validateApiCallback('not-a-function', 'onFileUpload');

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('onFileUpload')
    );
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('Missing prop')
    );

    consoleErrorSpy.mockRestore();
  });

  it('logs error when callback is undefined', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    validateApiCallback(undefined, 'onDelete');

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('onDelete')
    );

    consoleErrorSpy.mockRestore();
  });

  it('passes arguments correctly to the callback', () => {
    const callback = vi.fn();
    validateApiCallback(callback, 'onRename', 'arg1', 'arg2', 42);
    expect(callback).toHaveBeenCalledWith('arg1', 'arg2', 42);
  });

  it('passes no arguments when none are provided', () => {
    const callback = vi.fn();
    validateApiCallback(callback, 'onOpen');
    expect(callback).toHaveBeenCalledWith();
  });
});
