![React File Manager](https://github.com/user-attachments/assets/cad4d71d-a2fd-4064-9fce-c0c3a7cb4613)

<div align="center">

![NPM Downloads](https://img.shields.io/npm/d18m/%40cubone%2Freact-file-manager?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40cubone%2Freact-file-manager?style=for-the-badge)
![NPM Version](https://img.shields.io/npm/v/%40cubone%2Freact-file-manager?style=for-the-badge&color=%23c87d32)

</div>

<p>
An open-source React.js package for easy integration of a file manager into applications. It provides a user-friendly interface for managing files and folders, including viewing, uploading, and deleting, with full UI and backend integration.
</p>

## ✨ Features

- **File & Folder Management**: View, upload, download, delete, copy, move, create, and rename files
  or folders seamlessly.
- **Grid & List View**: Switch between grid and list views to browse files in your preferred layout.
- **Navigation**: Use the breadcrumb trail and sidebar navigation pane for quick directory
  traversal.
- **Toolbar & Context Menu**: Access all common actions (upload, download, delete, copy, move,
  rename, etc.) via the toolbar or right-click for the same options in the context menu.
- **Multi-Selection**: Select multiple files and folders at once to perform bulk actions like
  delete, copy, move, or download.
- **Keyboard Shortcuts**: Quickly perform file operations like copy, paste, delete, and more using
  intuitive keyboard shortcuts.
- **Drag-and-Drop**: Move selected files and folders by dragging them to the desired directory,
  making file organization effortless.

![React File Manager](https://github.com/user-attachments/assets/e68f750b-86bf-450d-b27e-fd3dedebf1bd)

## 🚀 Installation

To install `React File Manager`, use the following command:

```bash
npm i @cubone/react-file-manager
```

## 💻 Usage

Here’s a basic example of how to use the File Manager Component in your React application:

```jsx
import { useState } from "react";
import { FileManager } from "@cubone/react-file-manager";
import "@cubone/react-file-manager/dist/style.css";

function App() {
  const [files, setFiles] = useState([
    {
      name: "Documents",
      isDirectory: true, // Folder
      path: "/Documents", // Located in Root directory
      updatedAt: "2024-09-09T10:30:00Z", // Last updated time
    },
    {
      name: "Pictures",
      isDirectory: true,
      path: "/Pictures", // Located in Root directory as well
      updatedAt: "2024-09-09T11:00:00Z",
    },
    {
      name: "Pic.png",
      isDirectory: false, // File
      path: "/Pictures/Pic.png", // Located inside the "Pictures" folder
      updatedAt: "2024-09-08T16:45:00Z",
      size: 2048, // File size in bytes (example: 2 KB)
    },
  ]);

  return (
    <>
      <FileManager files={files} />
    </>
  );
}

export default App;
```

## 📂 File Structure

The `files` prop accepts an array of objects, where each object represents a file or folder. You can
customize the structure to meet your application needs. Each file or folder object follows the
structure detailed below:

```typescript
type File = {
  name: string;
  isDirectory: boolean;
  path: string;
  updatedAt?: string; // Optional: Last update timestamp in ISO 8601 format
  size?: number; // Optional: File size in bytes (only applicable for files)
};
```

## ⚙️ Props

| Name                   | Type                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acceptedFileTypes`    | string                                                                                                                         | (Optional) A comma-separated list of allowed file extensions for uploading specific file types (e.g., `.txt, .png, .pdf`). If omitted, all file types are accepted.                                                                                                                                                                                                                     |
| `enableFilePreview`    | boolean                                                                                                                        | A boolean flag indicating whether to use the default file previewer in the file manager `default: true`.                                                                                                                                                                                                                                                                                |
| `filePreviewPath`      | string                                                                                                                         | The base URL for file previews e.g.`https://example.com`, file path will be appended automatically to it i.e. `https://example.com/yourFilePath`.                                                                                                                                                                                                                                       |
| `filePreviewComponent` | (file: [File](#-file-structure)) => React.ReactNode                                                                            | (Optional) A callback function that provides a custom file preview. It receives the selected file as its argument and must return a valid React node, JSX element, or HTML. Use this prop to override the default file preview behavior. Example: [Custom Preview Usage](#custom-file-preview).                                                                                         |
| `fileUploadConfig`     | { url: string; headers?: { [key: string]: string } }                                                                           | Configuration object for file uploads. It includes the upload URL (`url`) and an optional `headers` object for setting custom HTTP headers in the upload request. The `headers` object can accept any standard or custom headers required by the server. Example: `{ url: "https://example.com/fileupload", headers: { Authorization: "Bearer" + TOKEN, "X-Custom-Header": "value" } }` |
| `files`                | Array<[File](#-file-structure)>                                                                                                | An array of file and folder objects representing the current directory structure. Each object includes `name`, `isDirectory`, and `path` properties.                                                                                                                                                                                                                                    |
| `fontFamily`           | string                                                                                                                         | The font family to be used throughout the component. Accepts any valid CSS font family (e.g., `'Arial, sans-serif'`, `'Roboto'`). You can customize the font styling to match your application's theme. `default: 'Nunito Sans, sans-serif'`.                                                                                                                                           |
| `height`               | string \| number                                                                                                               | The height of the component `default: 600px`. Can be a string (e.g., `'100%'`, `'10rem'`) or a number (in pixels).                                                                                                                                                                                                                                                                      |
| `initialPath`          | string                                                                                                                         | The path of the directory to be loaded initially e.g. `/Documents`. This should be the path of a folder which is included in `files` array. Default value is `""`                                                                                                                                                                                                                       |
| `isLoading`            | boolean                                                                                                                        | A boolean state indicating whether the application is currently performing an operation, such as creating, renaming, or deleting a file/folder. Displays a loading state if set `true`.                                                                                                                                                                                                 |
| `layout`               | "list" \| "grid"                                                                                                               | Specifies the default layout style for the file manager. Can be either "list" or "grid". Default value is "grid".                                                                                                                                                                                                                                                                       |
| `maxFileSize`          | number                                                                                                                         | For limiting the maximum upload file size in bytes.                                                                                                                                                                                                                                                                                                                                     |
| `onCreateFolder`       | (name: string, parentFolder: [File](#-file-structure)) => void                                                                 | A callback function triggered when a new folder is created. Use this function to update the files state to include the new folder under the specified parent folder using create folder API call to your server.                                                                                                                                                                        |
| `onDelete`             | (files: Array<[File](#-file-structure)>) => void                                                                               | A callback function is triggered when one or more files or folders are deleted.                                                                                                                                                                                                                                                                                                         |
| `onDownload`           | (files: Array<[File](#-file-structure)>) => void                                                                               | A callback function triggered when one or more files or folders are downloaded.                                                                                                                                                                                                                                                                                                         |
| `onError`              | (error: { type: string, message: string }, file: [File](#-file-structure)) => void                                             | A callback function triggered whenever there is an error in the file manager. Where error is an object containing `type` ("upload", etc.) and a descriptive error `message`.                                                                                                                                                                                                            |
| `onFileOpen`           | (file: [File](#-file-structure)) => void                                                                                       | A callback function triggered when a file or folder is opened.                                                                                                                                                                                                                                                                                                                          |
| `onFileUploaded`       | (response: { [key: string]: any }) => void                                                                                     | A callback function triggered after a file is successfully uploaded. Provides JSON `response` holding uploaded file details, use it to extract the uploaded file details and add it to the `files` state e.g. `setFiles((prev) => [...prev, JSON.parse(response)]);`                                                                                                                    |
| `onFileUploading`      | (file: [File](#-file-structure), parentFolder: [File](#-file-structure)) => { [key: string]: any }                             | A callback function triggered during the file upload process. You can also return an object with key-value pairs that will be appended to the `FormData` along with the file being uploaded. The object can contain any number of valid properties.                                                                                                                                     |
| `onLayoutChange`       | (layout: "list" \| "grid") => void                                                                                             | A callback function triggered when the layout of the file manager is changed.                                                                                                                                                                                                                                                                                                           |
| `onPaste`              | (files: Array<[File](#-file-structure)>, destinationFolder: [File](#-file-structure), operationType: "copy" \| "move") => void | A callback function triggered when when one or more files or folders are pasted into a new location. Depending on `operationType`, use this to either copy or move the `sourceItem` to the `destinationFolder`, updating the files state accordingly.                                                                                                                                   |
| `onRefresh`            | () => void                                                                                                                     | A callback function triggered when the file manager is refreshed. Use this to refresh the `files` state to reflect any changes or updates.                                                                                                                                                                                                                                              |
| `onRename`             | (file: [File](#-file-structure), newName: string) => void                                                                      | A callback function triggered when a file or folder is renamed.                                                                                                                                                                                                                                                                                                                         |
| `primaryColor`         | string                                                                                                                         | The primary color for the component's theme. Accepts any valid CSS color format (e.g., `'blue'`, `'#E97451'`, `'rgb(52, 152, 219)'`). This color will be applied to buttons, highlights, and other key elements. `default: #6155b4`.                                                                                                                                                    |
| `width`                | string \| number                                                                                                               | The width of the component `default: 100%`. Can be a string (e.g., `'100%'`, `'10rem'`) or a number (in pixels).                                                                                                                                                                                                                                                                        |

## ⌨️ Keyboard Shortcuts

| **Action**                     | **Shortcut**       |
| ------------------------------ | ------------------ |
| New Folder                     | `Alt + Shift + N`  |
| Upload Files                   | `CTRL + U`         |
| Cut                            | `CTRL + X`         |
| Copy                           | `CTRL + C`         |
| Paste                          | `CTRL + V`         |
| Rename                         | `F2`               |
| Download                       | `CTRL + D`         |
| Delete                         | `DEL`              |
| Select All Files               | `CTRL + A`         |
| Select Multiple Files          | `CTRL + Click`     |
| Select Range of Files          | `Shift + Click`    |
| Switch to List Layout          | `CTRL + Shift + 1` |
| Switch to Grid Layout          | `CTRL + Shift + 2` |
| Jump to First File in the List | `Home`             |
| Jump to Last File in the List  | `End`              |
| Refresh File List              | `F5`               |
| Clear Selection                | `Esc`              |

## Custom File Preview

The `FileManager` component allows you to provide a custom file preview by passing the
`filePreviewComponent` prop. This is an optional callback function that receives the selected file
as an argument and must return a valid React node, JSX element, or HTML.

### Usage Example

```jsx
const CustomImagePreviewer = ({ file }) => {
  return <img src={`${file.path}`} alt={file.name} />;
};

<FileManager
  // Other props...
  filePreviewComponent={(file) => <CustomImagePreviewer file={file} />}
/>;
```

## 🤝 Contributing

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
```

**Frontend**

```bash
cd frontend
npm i
npm run dev
```

The application should now be running on `http://localhost:5173`.

**Backend**

```bash
cd backend
npm i
npm run devStart
```

The server should now be running on `http://localhost:3000`, have fun!

## ©️ License

React File Manager is [MIT Licensed](LICENSE).
