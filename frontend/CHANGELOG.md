# [1.32.0](https://github.com/Saifullah-dev/react-file-manager/compare/v1.31.0...v1.32.0) (2025-10-19)

### 🧩 Internationalization (i18n)

- **Added:** Persian (Iran) locale support (`fa-IR`)

# [1.30.0](https://github.com/Saifullah-dev/react-file-manager/compare/v1.27.0...v1.30.0) (2025-10-07)

### 🧩 Internationalization (i18n)

- **Added:** Portuguese (Portugal) locale support (`pt-PT`)  
  ([#226](https://github.com/Saifullah-dev/react-file-manager/pull/226))

- **Refactored:** All locale imports and resource keys now use **consistent full locale codes**  
  (e.g., `en-US`, `fr-FR`, `ar-SA`, `pt-BR`, `pt-PT`, etc.) for better clarity and alignment with
  [i18next language conventions](https://www.i18next.com/overview/configuration-options#languages-namespace).

### ⚠️ Breaking Changes

- Language codes used in `i18n` initialization have been updated from short forms like `"en"`, `"fr"`, `"pt"`
  to **full locale codes** such as `"en-US"`, `"fr-FR"`, `"pt-BR"`, `"pt-PT"`, etc.
- If your application sets or changes languages manually, please update your code accordingly:

  ```js
  // Before
  <FileManager language="pt" files={files} />;

  // After
  <FileManager language="pt-PT" files={files} />;
  ```
A full list of supported locale keys is available in the documentation.

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
