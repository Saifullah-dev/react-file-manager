const FileSystem = require("../models/FileSystem");
const fs = require("fs");
const path = require("path");

// Create Folder
exports.createFolder = async (req, res) => {
  try {
    const { name, parentId } = req.body;

    // Path calculation
    let folderPath = "";
    if (parentId) {
      const parentFolder = await FileSystem.findById(parentId);
      if (!parentFolder || !parentFolder.isDirectory) {
        return res.status(400).json({ error: "Invalid parent folder" });
      }
      folderPath = `${parentFolder.path}/${name}`;
    } else {
      folderPath = `/${name}`; // Root Folder
    }
    //

    // Physical folder creation using fs
    const fullFolderPath = path.join(__dirname, "../uploads", folderPath);
    if (!fs.existsSync(fullFolderPath)) {
      await fs.promises.mkdir(fullFolderPath, { recursive: true });
    } else {
      return res.status(400).json({ error: "Folder already exists!" });
    }
    //

    const newFolder = new FileSystem({
      name,
      isDirectory: true,
      path: folderPath,
      parentId: parentId || null,
    });

    await newFolder.save();

    res.status(201).json(newFolder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//
