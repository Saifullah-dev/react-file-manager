const FileSystem = require("../models/FileSystem.model");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const archiver = require("archiver");

const downloadFile = async (req, res) => {
  // Todo: Update download request query swagger docs.
  // #swagger.summary = 'Downloads file/folder(s).'
  /*  #swagger.parameters['filePath'] = {
          in: 'query',
          type: 'string',
          required: 'true',
      }
      #swagger.responses[200] = {description:'File Downloaded Successfully'}
  */
  try {
    let files = req.query.files;
    const isSingleFile = mongoose.Types.ObjectId.isValid(files);
    const isMultipleFiles = Array.isArray(files);

    if (!files || (!isSingleFile && !isMultipleFiles)) {
      return res
        .status(400)
        .json({ error: "Invalid request body, expected a file ID or an array of file IDs." });
    }

    if (isSingleFile) {
      const file = await FileSystem.findById(files);
      if (!file) return res.status(404).json({ error: "File not found!" });

      if (file.isDirectory) {
        files = [files];
      } else {
        const filePath = path.join(__dirname, "../../public/uploads", file.path);
        if (fs.existsSync(filePath)) {
          res.setHeader("Content-Disposition", `attachment; filename="${file.name}"`);
          return res.sendFile(filePath);
        } else {
          return res.status(404).send("File not found");
        }
      }
    }

    const multipleFiles = await FileSystem.find({ _id: { $in: files } });
    if (!multipleFiles || multipleFiles.length !== files.length) {
      return res.status(404).json({ error: "One or more of the provided file IDs do not exist." });
    }

    const archive = archiver("zip", { zlib: { level: 9 } });

    archive.on("error", (err) => {
      throw err;
    });

    archive.pipe(res);

    multipleFiles.forEach((file) => {
      const filePath = path.join(__dirname, "../../public/uploads", file.path);
      if (fs.existsSync(filePath)) {
        if (file.isDirectory) {
          archive.directory(filePath, file.name);
        } else {
          archive.file(filePath, { name: file.name });
        }
      } else {
        console.log("File not found");
      }
    });

    await archive.finalize();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = downloadFile;
