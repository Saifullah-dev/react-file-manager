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
- **Column Sorting**: Click on column headers in list view to sort files by name, modified date, or
  size. Click again to toggle between ascending (▲) and descending (▼) order. Folders are always
  displayed before files regardless of the sort criteria.

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
  customActions?: object // Optional: used to add custom buttons on the file. See `Custom File actions` part
};
```

## ⚙️ Props

| Name                     | Type                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `acceptedFileTypes`      | string                                                                                                                          | (Optional) A comma-separated list of allowed file extensions for uploading specific file types (e.g., `.txt, .png, .pdf`). If omitted, all file types are accepted.                                                                                                                                                                                                                                                                                                                                                             |
| `className`              | string                                                                                                                          | CSS class names to apply to the FileManager root element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `collapsibleNav`         | boolean                                                                                                                         | Enables a collapsible navigation pane on the left side. When `true`, a toggle will be shown to expand or collapse the navigation pane. `default: false`.                                                                                                                                                                                                                                                                                                                                                                        |
| `defaultNavExpanded`     | boolean                                                                                                                         | Sets the default expanded (`true`) or collapsed (`false`) state of the navigation pane when `collapsibleNav` is enabled. This only affects the initial render. `default: true`.                                                                                                                                                                                                                                                                                                                                                 |
| `enableFilePreview`      | boolean                                                                                                                         | A boolean flag indicating whether to use the default file previewer in the file manager `default: true`.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `filePreviewPath`        | string                                                                                                                          | The base URL for file previews e.g.`https://example.com`, file path will be appended automatically to it i.e. `https://example.com/yourFilePath`.                                                                                                                                                                                                                                                                                                                                                                               |
| `filePreviewComponent`   | (file: [File](#-file-structure)) => React.ReactNode                                                                             | (Optional) A callback function that provides a custom file preview. It receives the selected file as its argument and must return a valid React node, JSX element, or HTML. Use this prop to override the default file preview behavior. Example: [Custom Preview Usage](#custom-file-preview).                                                                                                                                                                                                                                 |
| `fileUploadConfig`       | { url: string; method?: "POST" \| "PUT"; headers?: { [key: string]: string }; withCredentials?: boolean }                       | Configuration object for file uploads. It includes the upload URL (`url`), an optional HTTP method (`method`, default is `"POST"`), and an optional `headers` object for setting custom HTTP headers in the upload request. The `method` property allows only `"POST"` or `"PUT"` values. The `headers` object can accept any standard or custom headers required by the server. The `withCredentials` property allows sending HTTP cookies in the request. Example: `{ url: "https://example.com/fileupload", method: "PUT", headers: { Authorization: "Bearer " + TOKEN, "X-Custom-Header": "value" }, withCredentials: true }` |
| `files`                  | Array<[File](#-file-structure)>                                                                                                 | An array of file and folder objects representing the current directory structure. Each object includes `name`, `isDirectory`, and `path` properties.                                                                                                                                                                                                                                                                                                                                                                            |
| `fontFamily`             | string                                                                                                                          | The font family to be used throughout the component. Accepts any valid CSS font family (e.g., `'Arial, sans-serif'`, `'Roboto'`). You can customize the font styling to match your application's theme. `default: 'Nunito Sans, sans-serif'`.                                                                                                                                                                                                                                                                                   |
| `height`                 | string \| number                                                                                                                | The height of the component `default: 600px`. Can be a string (e.g., `'100%'`, `'10rem'`) or a number (in pixels).                                                                                                                                                                                                                                                                                                                                                                                                              |
| `initialPath`            | string                                                                                                                          | The path of the directory to be loaded initially e.g. `/Documents`. This should be the path of a folder which is included in `files` array. Default value is `""`                                                                                                                                                                                                                                                                                                                                                               |
| `isLoading`              | boolean                                                                                                                         | A boolean state indicating whether the application is currently performing an operation, such as creating, renaming, or deleting a file/folder. Displays a loading state if set `true`.                                                                                                                                                                                                                                                                                                                                         |
| `language` | string | A language code used for translations (e.g., `"en-US"`, `"fr-FR"`, `"tr-TR"`). Defaults to `"en-US"` for English. Allows the user to set the desired translation language manually. <br><br>**Available languages:** <br> 🇸🇦 `ar-SA` (Arabic, Saudi Arabia) <br> 🇩🇰 `da-DK` (Danish, Denmark) <br> 🇩🇪 `de-DE` (German, Germany) <br> 🇺🇸 `en-US` (English, United States) <br> 🇪🇸 `es-ES` (Spanish, Spain) <br> 🇮🇷 `fa-IR` (Persian, Iran) <br> 🇫🇮 `fi-FI` (Finnish, Finland) <br> 🇫🇷 `fr-FR` (French, France) <br> 🇮🇱 `he-IL` (Hebrew, Israel) <br> 🇮🇳 `hi-IN` (Hindi, India) <br> 🇮🇹 `it-IT` (Italian, Italy) <br> 🇯🇵 `ja-JP` (Japanese, Japan) <br> 🇰🇷 `ko-KR` (Korean, South Korea) <br> 🇳🇴 `nb-NO` (Norwegian, Norway) <br> 🇧🇷 `pt-BR` (Portuguese, Brazil) <br> 🇵🇹 `pt-PT` (Portuguese, Portugal) <br> 🇷🇺 `ru-RU` (Russian, Russia) <br> 🇸🇪 `sv-SE` (Swedish, Sweden) <br> 🇹🇷 `tr-TR` (Turkish, Turkey) <br> 🇺🇦 `uk-UA` (Ukrainian, Ukraine) <br> 🇵🇰 `ur-UR` (Urdu, Pakistan) <br> 🇻🇳 `vi-VN` (Vietnamese, Vietnam) <br> 🇨🇳 `zh-CN` (Chinese, Simplified) <br> 🇵🇱 `pl-PL` (Polish, Poland) |
| `layout`                 | "list" \| "grid"                                                                                                                | Specifies the default layout style for the file manager. Can be either "list" or "grid". Default value is "grid".                                                                                                                                                                                                                                                                                                                                                                                                               |
| `maxFileSize`            | number                                                                                                                          | For limiting the maximum upload file size in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `onCopy`                 | (files: Array<[File](#-file-structure)>) => void                                                                                | (Optional) A callback function triggered when one or more files or folders are copied providing copied files as an argument. Use this function to perform custom actions on copy event.                                                                                                                                                                                                                                                                                                                                         |
| `onCut`                  | (files: Array<[File](#-file-structure)>) => void                                                                                | (Optional) A callback function triggered when one or more files or folders are cut, providing the cut files as an argument. Use this function to perform custom actions on the cut event.                                                                                                                                                                                                                                                                                                                                       |
| `onCreateFolder`         | (name: string, parentFolder: [File](#-file-structure)) => void                                                                  | A callback function triggered when a new folder is created. Use this function to update the files state to include the new folder under the specified parent folder using create folder API call to your server.                                                                                                                                                                                                                                                                                                                |
| `onDelete`               | (files: Array<[File](#-file-structure)>) => void                                                                                | A callback function is triggered when one or more files or folders are deleted.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `onDownload`             | (files: Array<[File](#-file-structure)>) => void                                                                                | A callback function triggered when one or more files or folders are downloaded.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `onError`                | (error: { type: string, message: string }, file: [File](#-file-structure)) => void                                              | A callback function triggered whenever there is an error in the file manager. Where error is an object containing `type` ("upload", etc.) and a descriptive error `message`.                                                                                                                                                                                                                                                                                                                                                    |
| `onFileOpen`             | (file: [File](#-file-structure)) => void                                                                                        | A callback function triggered when a file or folder is opened.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `onFolderChange`         | (path: string) => void                                                                                                          | A callback function triggered when the active folder changes. Receives the full path of the current folder as a string parameter. Useful for tracking the active folder path.                                                                                                                                                                                                                                                                                                                                                   |
| `onFileUploaded`         | (response: { [key: string]: any }) => void                                                                                      | A callback function triggered after a file is successfully uploaded. Provides JSON `response` holding uploaded file details, use it to extract the uploaded file details and add it to the `files` state e.g. `setFiles((prev) => [...prev, JSON.parse(response)]);`                                                                                                                                                                                                                                                            |
| `onFileUploading`        | (file: [File](#-file-structure), parentFolder: [File](#-file-structure)) => { [key: string]: any }                              | A callback function triggered during the file upload process. You can also return an object with key-value pairs that will be appended to the `FormData` along with the file being uploaded. The object can contain any number of valid properties.                                                                                                                                                                                                                                                                             |
| `onLayoutChange`         | (layout: "list" \| "grid") => void                                                                                              | A callback function triggered when the layout of the file manager is changed.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `onPaste`                | (files: Array<[File](#-file-structure)>, destinationFolder: [File](#-file-structure), operationType: "copy" \| "move") => void  | A callback function triggered when when one or more files or folders are pasted into a new location. Depending on `operationType`, use this to either copy or move the `sourceItem` to the `destinationFolder`, updating the files state accordingly.                                                                                                                                                                                                                                                                           |
| `onRefresh`              | () => void                                                                                                                      | A callback function triggered when the file manager is refreshed. Use this to refresh the `files` state to reflect any changes or updates.                                                                                                                                                                                                                                                                                                                                                                                      |
| `onRename`               | (file: [File](#-file-structure), newName: string) => void                                                                       | A callback function triggered when a file or folder is renamed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `onSelectionChange`      | (files: Array<[File](#-file-structure)>) => void                                                                                | (Optional) A callback triggered whenever a file or folder is **selected or deselected**. The function receives the updated array of selected files or folders, allowing you to handle selection-related actions such as displaying file details, enabling toolbar actions, or updating the UI.                                                                                                                                                                                                                                  |
| `onSelect`⚠️(deprecated) | (files: Array<[File](#-file-structure)>) => void                                                                                | (Optional) Legacy callback triggered only when a file or folder is **selected**. This prop is deprecated and will be removed in the next major release. Please migrate to `onSelectionChange`.                                                                                                                                                                                                                                                                                                                                  |
| `onSortChange`           | (sortConfig: { key: "name" \| "modified" \| "size", direction: "asc" \| "desc" }) => void                                       | (Optional) A callback function triggered when the sorting order changes. Receives the new sort configuration with the column key and direction. Useful for persisting sort preferences or updating external state.                                                                                                                                                                                                                                                                                                              |
| `permissions`            | { create?: boolean; upload?: boolean; move?: boolean; copy?: boolean; rename?: boolean; download?: boolean; delete?: boolean; } | An object that controls the availability of specific file management actions. Setting an action to `false` hides it from the toolbar, context menu, and any relevant UI. All actions default to `true` if not specified. This is useful for implementing role-based access control or restricting certain operations. Example: `{ create: false, delete: false }` disables folder creation and file deletion.                                                                                                                   |
| `primaryColor`           | string                                                                                                                          | The primary color for the component's theme. Accepts any valid CSS color format (e.g., `'blue'`, `'#E97451'`, `'rgb(52, 152, 219)'`). This color will be applied to buttons, highlights, and other key elements. `default: #6155b4`.                                                                                                                                                                                                                                                                                            |
| `style`                  | object                                                                                                                          | Inline styles applied to the FileManager root element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `width`                  | string \| number                                                                                                                | The width of the component `default: 100%`. Can be a string (e.g., `'100%'`, `'10rem'`) or a number (in pixels).                                                                                                                                                                                                                                                                                                                                                                                                                |

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

## 🛡️ Permissions

Control file management actions using the `permissions` prop (optional). Actions default to `true`
if not specified.

```jsx
<FileManager
  // Other props...
  permissions={{
    create: false, // Disable "Create Folder"
    delete: false, // Disable "Delete"
    download: true, // Enable "Download"
    copy: true,
    move: true,
    rename: true,
    upload: true,
  }}
/>
```

## </> Custom File Preview

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
## Custom File actions

A file can specify custom actions that can be displayed in the context menu and the toolbar menu.

```jsx
const customButtonExample = {
  inContextMenu     : true, // true to display in the context menu
  inToolbarMenu     : true, // true to display in the toolbar when the file is selected
  enableMultiItems  : true, // true to display the button when multiple files are selected, and all of them use the same button
  hideContextMenuOnClick : false, // true to hide on click in the context menu
  title : "customButton", // text displayed
  icon : <BiAperture />,  // icon of the button
  onClick : (selectedFiles) => {console.log("click on custom button, with selected files : ", selectedFiles)}
}

const files = [
  {
    name: "Documents",
    isDirectory: true, // Folder
    path: "/Documents", // Located in Root directory
    updatedAt: "2024-09-09T10:30:00Z", // Last updated time
    customActions : [customButtonExample]
  },
  {
    name: "Pictures",
    isDirectory: true,
    path: "/Pictures", // Located in Root directory as well
    updatedAt: "2024-09-09T11:00:00Z",
    customActions : [customButtonExample]
  },
  {
    name: "Pic.png",
    isDirectory: false, // File
    path: "/Pictures/Pic.png", // Located inside the "Pictures" folder
    updatedAt: "2024-09-08T16:45:00Z",
    size: 2048, // File size in bytes (example: 2 KB)
  },
]
```

## 🧭 Handling Current Path

By default, the file manager starts in the root directory (`""`). You can override this by passing
an `initialPath` prop. For example, to start in `/Documents`:

```jsx
<FileManager initialPath="/Documents" />
```

### Controlled usage with `currentPath`

If you want to **track and control** the current folder, you can pair `initialPath` with the
`onFolderChange` callback. A common pattern is to keep the path in React state:

```jsx
import { useState } from "react";

function App() {
  const [currentPath, setCurrentPath] = useState("/Documents");

  return (
    <FileManager
      // other props...
      initialPath={currentPath}
      onFolderChange={setCurrentPath}
    />
  );
}
```

### Important notes

- `initialPath` is applied **only once** when the `files` state is first set.
- After that, folder changes are driven by `onFolderChange`.
- If you want to keep the path in sync with user navigation, use a controlled state (as shown
  above).

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

**Database** <br> The application uses MongoDB to store file system changes (folders and images).

1. Install MongoDB if not already installed.
2. Ensure MongoDB service is running (default port: 27017).
3. Create a database named `fileManagerDB` (or as specified in `backend/.env`).

Check `backend/.env.example` for database configuration details.

> Note: `backend` here is just an example implementation of react-file-manager into your
> application. You may use any database and server combination of your choice.

## ©️ License

React File Manager is [MIT Licensed](LICENSE).
