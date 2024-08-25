# React File Manager

An open-source React.js package for easy integration of a file manager into applications. It provides a user-friendly interface for managing files and folders, including viewing, uploading, and deleting, with full UI and backend integration.

## Features

- **View Files and Folders**: Display the directory structure with folders and files.
- **Upload Files**: Upload new files to a selected directory.
- **Delete Files and Folders**: Remove unwanted files or folders.
- **Toolbar**: Access common file operations such as upload, delete, and refresh with a convenient toolbar.
- **Breadcrumb Navigation**: Easily navigate through the directory structure.
- **Navigation Pane**: Easily switch between folders and directories with a sidebar navigation pane.
- **Context Menu**: Right-click to open a context menu with options for cutting, copying, pasting, renaming, and deleting files or folders.

## Installation

To install `React File Manager`, use the following command:

```bash
npm i @cubone/react-file-manager
```

## Usage

Here’s a basic example of how to use the File Manager Component in your React application:

```javascript
import { useState } from "react";
import { FileManager } from "@cubone/react-file-manager";
import "@cubone/react-file-manager/dist/style.css";

function App() {
  const [files, setFiles] = useState([
    {
      name: "Documents",
      isDirectory: true,
      path: "", // Root directory
    },
    {
      name: "Pictures",
      isDirectory: true,
      path: "", // Root directory
    },
    {
      name: "Pic.png",
      isDirectory: false,
      path: "/Pictures", // Located inside the "Pictures" folder
    },
  ]);

  return (
    <>
      <FileManager files={files} />
    </>
  );
}
```
## Props

| Name       | Type                                                                                           | Description                                                                 |
|-----------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `files`         | `Array<{ name: string, isDirectory: boolean, path: string }>`                                 | An array of file and folder objects representing the current directory structure. Each object includes `name`, `isDirectory`, and `path` properties. |
| `isLoading`     | `boolean`                                                                                      | A boolean indicating whether the application is currently performing an operation, such as creating, renaming, or deleting a file/folder. Displays a loading state if `true`. |
| `fileUploadConfig`| `{ url: string; headers?: { [key: string]: string } }` | Configuration object for file uploads. It includes the upload URL (`url`) and an optional `headers` object for setting custom HTTP headers in the upload request. The `headers` object can accept any standard or custom headers required by the server. Example: `{ url: "https://example.com/fileupload", headers: { Authorization: "Bearer" + TOKEN, "X-Custom-Header": "value" } }` |
| `onCreateFolder`| `(files: { name: string, isDirectory: boolean, path: string }[], folderName: string, folderPath: string) => void` | A callback function triggered when a new folder is created. Update the `files` state to include the new folder in the specified path. |
| `onRename`      | `(files: { name: string, isDirectory: boolean, path: string }[], selectedFile: { name: string, isDirectory: boolean, path: string }, newName: string) => void` | A callback function triggered when a file or folder is renamed. Update the `files` state to reflect the new name for the specified file or folder. |
| `onDelete`      | `(files: { name: string, isDirectory: boolean, path: string }[], file: { name: string, isDirectory: boolean, path: string }) => void` | A callback function triggered when a file or folder is deleted. Update the `files` state to remove the specified file or folder from the structure. |
| `onPaste`       | `(files: { name: string, isDirectory: boolean, path: string }[], pastePath: string, clipBoard: { isMoving: boolean, files: { name: string, isDirectory: boolean, path: string, children?: { name: string, isDirectory: boolean, path: string }[] }[] }) => void` | A callback function triggered when a file or folder is pasted (moved or copied). Update the files state to reflect the new location of the pasted items based on the clipBoard data. |
| `onRefresh`     | `() => void`                                                                                   | A callback function triggered when the file manager is refreshed. Use this to reload or refresh the `files` state to reflect any changes or updates. |

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/branch-name`).
6. Open a Pull Request.

Get started by running following commands:

```bash
git clone https://github.com/Saifullah-dev/react-file-manager.git
cd react-file-manager
npm i
npm run dev
```
The application should now be running on `http://localhost:5173`, have fun!

## License

React File Manager is [MIT Licensed](LICENSE).
