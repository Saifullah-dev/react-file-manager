const FileSystem = require("../models/FileSystem.model");

const uploadFile = async (req, res) => {
  // #swagger.summary = 'Uploads a new file.'
  /*
      #swagger.auto = false
      #swagger.consumes = ['multipart/form-data']  
      #swagger.parameters['file'] = {
          in: 'formData',
          type: 'file',
          required: 'true',
      }
      #swagger.parameters['parentId'] = {
          in: 'formData',
          type: 'string',
      }
      #swagger.responses[201] = {
      schema: { $ref: '#/definitions/File' }
      }
      #swagger.responses[400]
      #swagger.responses[500]
  */
  try {
    const { parentId } = req.body;
    const file = req.file;

    let filePath = "";
    if (parentId) {
      const parentFolder = await FileSystem.findById(parentId);
      if (!parentFolder || !parentFolder.isDirectory) {
        return res.status(400).json({ error: "Invalid parentId!" });
      }
      filePath = `${parentFolder.path}/${file.originalname}`;
    } else {
      filePath = `/${file.originalname}`;
    }

    const newFile = new FileSystem({
      name: file.originalname,
      isDirectory: false,
      path: filePath,
      parentId: parentId || null,
      size: file.size,
      mimeType: file.mimetype,
    });

    await newFile.save();

    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = uploadFile;
