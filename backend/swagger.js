const swaggerAutogen = require("swagger-autogen")();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;

const doc = {
  info: {
    version: "1.0.0",
    title: "File System API",
    description:
      "API for managing files and folders. \n \n**Note: Use parentId: null | '' for root folder.**",
  },
  host: `localhost:${PORT}`,
  basePath: "/api/file-system",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "File Operations",
      description: "Endpoints",
    },
  ],
  "@definitions": {
    FileSystem: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          description: "The unique identifier of the item (ObjectId)",
          example: "60d0fe4f5311236168a109ca",
        },
        name: {
          type: "string",
          description: "Name of the file or folder",
          example: "Videos",
        },
        isDirectory: {
          type: "boolean",
          description: "Indicates if the item is a folder",
          example: true,
        },
        path: {
          type: "string",
          description: "Path of the file or folder",
          example: "Files/Videos",
        },
        parentId: {
          type: "string",
          description: "The parent item ID (ObjectId)",
          example: "60d0fe4f5311236168a109cb",
          nullable: true,
        },
        size: {
          type: "number",
          description: "Size of the file in bytes",
          example: null,
          nullable: true,
        },
        mimeType: {
          type: "string",
          description: "MIME type of the file",
          example: null,
          nullable: true,
        },
      },
    },
  },
  definitions: {
    Folder: {
      _id: "60d0fe4f5311236168a109ca",
      name: "Documents",
      isDirectory: true,
      path: "/Files/Documents",
      parentId: "60d0fe4f5311236168a109cb",
      size: null,
      mimeType: null,
      createdAt: "2024-09-25T12:34:29.490Z",
      updatedAt: "2024-09-25T12:34:29.490Z",
    },
    File: {
      _id: "50e6ge6d5347836199z314xc",
      name: "Requirements.pdf",
      isDirectory: true,
      path: "/Files/Documents/Requirements.pdf",
      parentId: "60d0fe4f5311236168a109ca",
      size: 1791868,
      mimeType: "application/pdf",
      createdAt: "2024-09-04T11:28:13.882Z",
      updatedAt: "2024-09-04T11:28:13.882Z",
    },
    CreateFolder: {
      $name: "Pictures",
      parentId: "",
    },
    CopyItems: {
      $sourceIds: ["50e6ge6d5347836199z314xc"],
      destinationId: "60d0fe4f5311236168a109cb",
    },
    RenameItem: {
      $id: "50e6ge6d4568712390z314xc",
      $newName: "React File Manager.png",
    },
    DeleteItems: {
      $ids: ["50e6ge6d4568712390z314xc"],
    },
    Error: {
      error: "Error message",
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app/routes/fileSystem.routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(({ data }) => {
  // Automate apply tags & Error schema to all endpoints
  Object.keys(data.paths).forEach((path) => {
    Object.keys(data.paths[path]).forEach((method) => {
      if (!data.paths[path][method].tags) {
        data.paths[path][method].tags = [];
      }
      data.paths[path][method].tags = ["File Operations"];

      if (data.paths[path][method].responses) {
        ["400", "404", "500"].forEach((statusCode) => {
          if (data.paths[path][method].responses[statusCode]) {
            data.paths[path][method].responses[statusCode].schema = {
              $ref: "#/definitions/Error",
            };
          }
        });
      }
    });
  });

  const fs = require("fs");
  fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
  //

  require("./server");
});
