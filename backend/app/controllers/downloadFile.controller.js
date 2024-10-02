const FileSystem = require("../models/FileSystem.model");
const path = require("path");
const fs = require("fs");

const downloadFile = async (req, res) => {
  // #swagger.summary = 'Downloads a file.'
  /*  #swagger.parameters['filePath'] = {
          in: 'query',
          type: 'string',
          required: 'true',
      }
      #swagger.responses[200] = {description:'File Downloaded Successfully'}
  */
  try {
    const { filePath } = req.query;
    const fileName = filePath.split("/").pop();
    const fullFilePath = path.join(__dirname, "../../public/uploads", filePath);

    if (fs.existsSync(fullFilePath)) {
      res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
      res.sendFile(fullFilePath);
    } else {
      res.status(404).send("File not found");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = downloadFile;
