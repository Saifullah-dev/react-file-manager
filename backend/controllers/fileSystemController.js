const FileSystem = require("../models/FileSystem");
const fs = require("fs");
const path = require("path");

// Get all files + folders
exports.getFiles = async (req, res) => {
  try {
    const files = await FileSystem.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//

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

// Upload File
exports.uploadFile = async (req, res) => {
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
//

// Delete File/Folder
const deleteRecursive = async (item) => {
  const children = await FileSystem.find({ parentId: item._id });

  for (const child of children) {
    await deleteRecursive(child);
  }

  await FileSystem.findByIdAndDelete(item._id);
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await FileSystem.findById(id);
    if (!item) {
      return res.status(404).json({ error: "File or Folder not found!" });
    }

    const itemPath = path.join(__dirname, "../uploads", item.path);
    await fs.promises.rm(itemPath, { recursive: true });

    await deleteRecursive(item);

    res.status(200).json({ message: "File or Folder deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//

// Rename File/Folder
const updateChildernPathRecursive = async (item) => {
  const children = await FileSystem.find({ parentId: item._id });

  for (const child of children) {
    child.path = `${item.path}/${child.name}`;
    await child.save();

    if (child.isDirectory) updateChildernPathRecursive(child);
  }
};

exports.rename = async (req, res) => {
  try {
    const { id, newName } = req.body;
    const item = await FileSystem.findById(id);
    if (!item) {
      return res.status(404).json({ error: "File or Folder not found!" });
    }

    const parentDir = `${path.dirname(item.path)}`;
    const newPath = `${parentDir}${parentDir === "/" ? "" : "/"}${newName}`;

    const oldFullPath = path.join(__dirname, "../uploads", item.path);
    const newFullPath = path.join(__dirname, "../uploads", newPath);

    if (fs.existsSync(newFullPath)) {
      return res.status(400).json({ error: "A file or folder with that name already exists!" });
    }

    await fs.promises.rename(oldFullPath, newFullPath);

    item.name = newName;
    item.path = newPath;

    await item.save();

    if (item.isDirectory) {
      await updateChildernPathRecursive(item);
    }

    res.status(200).json({ message: "File or Folder renamed successfully!", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//
