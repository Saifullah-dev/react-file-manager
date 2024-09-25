const FileSystem = require("../models/FileSystem.model");
const path = require("path");

const downloadFile = async (req, res) => {
  // #swagger.summary = 'Downloads a file.'
  // #swagger.produces = ["application/octet-stream"]
  /*
    #swagger.responses[200] = {
      description: 'A file is successfully downloaded.',
      content: {
        'application/octet-stream': {
          schema: {
            type: 'string',
            format: 'binary'
          }
        }
      }
    }
  */
  try {
    const { id } = req.params;

    const file = await FileSystem.findById(id);
    if (!file || file.isDirectory) {
      res.status(404).json({ error: "File not found!" });
    }

    const filePath = path.join(__dirname, "../../public/uploads", file.path);
    res.header("Access-Control-Expose-Headers", "Content-Disposition");
    res.download(filePath, file.name);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = downloadFile;
