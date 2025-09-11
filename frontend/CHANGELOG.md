# [1.27.0](https://github.com/Saifullah-dev/react-file-manager/compare/v1.26.3...v1.27.0) (2025-09-12)

### ✨ Features

- **component:** add `onSelectionChange` callback to handle both select and deselect events
  ([#213](https://github.com/Saifullah-dev/react-file-manager/pull/213))
  - This callback now triggers for **both selecting and deselecting** files, providing a unified way
    to react to any selection state change.

### ⚠️ Deprecations

- `onSelect` is now deprecated and will be removed in the next major release (`3.0.0`).

  - Please migrate to `onSelectionChange`.
  - Example:

    ```tsx
    // Before
    <FileManager onSelect={(files) => console.log(files)} />

    // After
    <FileManager onSelectionChange={(files) => console.log(files)} />
    ```
