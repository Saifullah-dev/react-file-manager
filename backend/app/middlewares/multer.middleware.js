const multer = require("multer");
const path = require("path");
const FileSystem = require("../models/FileSystem.model");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    let uploadPath = path.join(__dirname, "../../public/uploads");

    if (req.body.parentId) {
      try {
        const parentFolder = await FileSystem.findById(req.body.parentId);
        if (!parentFolder || !parentFolder.isDirectory) {
          return cb(new Error("Invalid parentId!"), false);
        }
        uploadPath = path.join(__dirname, "../../public/uploads", parentFolder.path);
      } catch (error) {
        return cb(error, false);
      }
    }

    const fullFilePath = path.join(uploadPath, file.originalname);
    if (fs.existsSync(fullFilePath)) {
      return cb(new multer.MulterError("File already exists!", file), false);
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
