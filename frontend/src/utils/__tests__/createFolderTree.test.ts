import { describe, it, expect } from 'vitest';
import { createFolderTree } from '../createFolderTree.js';

describe('createFolderTree', () => {
  it('creates a tree with children', () => {
    const folder = { name: 'Documents', path: 'root', isDirectory: true };
    const files = [
      { name: 'file1.txt', path: 'root/Documents', isDirectory: false },
      { name: 'file2.txt', path: 'root/Documents', isDirectory: false },
      { name: 'other.txt', path: 'root/Other', isDirectory: false },
    ];

    const result = createFolderTree(folder, files);

    expect(result.name).toBe('Documents');
    expect(result.children).toHaveLength(2);
    expect(result.children[0].name).toBe('file1.txt');
    expect(result.children[1].name).toBe('file2.txt');
  });

  it('handles empty children (folder with no child files)', () => {
    const folder = { name: 'EmptyFolder', path: 'root', isDirectory: true };
    const files = [
      { name: 'unrelated.txt', path: 'root/OtherFolder', isDirectory: false },
    ];

    const result = createFolderTree(folder, files);

    expect(result.name).toBe('EmptyFolder');
    expect(result.children).toHaveLength(0);
    expect(result.children).toEqual([]);
  });

  it('creates nested tree structure', () => {
    // The function computes child path as: copiedFile.path + "/" + copiedFile.name
    // So for Root (path: "root"), children must have path "root/Root"
    // For SubFolder (path: "root/Root"), children must have path "root/Root/SubFolder"
    const folder = { name: 'Root', path: 'root', isDirectory: true };
    const files = [
      { name: 'SubFolder', path: 'root/Root', isDirectory: true },
      { name: 'nested.txt', path: 'root/Root/SubFolder', isDirectory: false },
      { name: 'top-level.txt', path: 'root/Root', isDirectory: false },
    ];

    const result = createFolderTree(folder, files);

    expect(result.name).toBe('Root');
    expect(result.children).toHaveLength(2);

    // SubFolder should have nested.txt as child
    const subFolder = result.children.find(
      (c: any) => c.name === 'SubFolder'
    );
    expect(subFolder).toBeDefined();
    expect(subFolder.children).toHaveLength(1);
    expect(subFolder.children[0].name).toBe('nested.txt');

    // top-level.txt should have no children (it's a file)
    const topLevelFile = result.children.find(
      (c: any) => c.name === 'top-level.txt'
    );
    expect(topLevelFile).toBeDefined();
    expect(topLevelFile.children).toHaveLength(0);
  });

  it('preserves original properties on the copied file', () => {
    const folder = {
      name: 'MyFolder',
      path: 'root',
      isDirectory: true,
      size: 0,
      updatedAt: '2024-01-01',
    };
    const files: any[] = [];

    const result = createFolderTree(folder, files);

    expect(result.name).toBe('MyFolder');
    expect(result.isDirectory).toBe(true);
    expect(result.size).toBe(0);
    expect(result.updatedAt).toBe('2024-01-01');
    expect(result.children).toEqual([]);
  });
});
