# 📂 File Manager Backend

This backend provides a RESTful API for managing files and folders, intended to be used with a front-end file manager component. It allows users to perform various operations such as creating folders, uploading files, renaming, moving, copying, deleting, and downloading files. All APIs are documented using **Swagger**.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) 🟢
- [npm](https://www.npmjs.com/) 📦

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Saifullah-dev/react-file-manager.git
   ```

2. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

3. Install the dependencies:
   ```bash
   npm i
   ```

### 🎯 Running the Backend

1. Create a `.env` file based on the `.env.example` and set your environment variables accordingly.

2. Start the server:

   ```bash
   npm run devStart
   ```

   This will start the backend server on `http://localhost:3000`.

### ![swagger-icon](https://github.com/user-attachments/assets/9cb14fef-febc-4b52-873c-52dfc80e601e) API Documentation

The API documentation is generated through **Swagger** and can be viewed [here](https://app.swaggerhub.com/apis-docs/SaifullahZubair/file-system_api/1.0.0).

1. To Generate the Swagger docs:

   ```bash
   npm run genDocs
   ```

2. Access the Swagger documentation:
   Open [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/) in your browser to see all available API endpoints and their details.

### ![postman-icon](https://github.com/user-attachments/assets/b0bd6b21-056e-4934-a4d6-b8dc6f7fd6d5) Postman Collection

You can download and use the Postman collection from [here](https://github.com/user-attachments/files/17149486/File.Management.API.postman_collection.json).

## 🔧 API Endpoints

The backend supports the following file system operations:

- **📁 Create a Folder**: `/folder`
- **⬆️ Upload a File**: `/upload`
- **📋 Copy a File/Folder**: `/copy`
- **📂 Get All Files/Folders**: `/`
- **⬇️ Download a File**: `/download/:id`
- **📤 Move a File/Folder**: `/move`
- **✏️ Rename a File/Folder**: `/rename`
- **🗑️ Delete a File/Folder**: `/:id`

Refer to the [Swagger Documentation](http://localhost:3000/api-docs/) for detailed request/response formats.

## 🗂️ Folder Structure

```
backend/
│
├── app/
│   ├── config/
│   │   └── db.config.js        # Database configuration (if applicable)
│   ├── controllers/            # API controllers for various file system operations
│   │   ├── copyItem.controller.js
│   │   ├── createFolder.controller.js
│   │   ├── deleteItem.controller.js
│   │   ├── downloadFile.controller.js
│   │   ├── getItems.controller.js
│   │   ├── moveItem.controller.js
│   │   ├── renameItem.controller.js
│   │   └── uploadFile.controller.js
│   ├── middlewares/            # Custom middlewares
│   │   ├── errorHandler.middleware.js
│   │   └── multer.middleware.js
│   ├── models/
│   │   └── FileSystem.model.js # Mongoose model for file system (if using a DB)
│   └── routes/
│       └── fileSystem.routes.js # Route definitions for file system operations
│
├── public/
│   └── uploads/                # Uploaded files will be stored here
│
├── swagger.js                   # Swagger configuration
├── package.json
├── server.js                    # Entry point of the application
└── .env                         # Environment variables
```

### 📁 Uploads and Folder Creation

- All uploaded files and folders created through the API are placed in the `/public/uploads/` directory. Ensure this directory has the appropriate permissions set to allow file storage.

## ⚠️ Error Handling

Custom error handling is provided via the middleware in `errorHandler.middleware.js`.

## 📜 License

React File Manager is [MIT Licensed](LICENSE).
