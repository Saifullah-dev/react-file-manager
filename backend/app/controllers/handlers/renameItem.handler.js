const FileSystem = require("../../models/FileSystem.model");
const fs = require("fs");
const path = require("path");

const updateChildernPathRecursive = async (item) => {
  const children = await FileSystem.find({ parentId: item._id });

  for (const child of children) {
    child.path = `${item.path}/${child.name}`;
    await child.save({ timestamps: false });

    if (child.isDirectory) updateChildernPathRecursive(child);
  }
};

const renameItem = async (req, res) => {
  try {
    const { id, newName } = req.body;
    const item = await FileSystem.findById(id);
    if (!item) {
      return res.status(404).json({ error: "File or Folder not found!" });
    }

    const parentDir = `${path.dirname(item.path)}`;
    const newPath = `${parentDir}${parentDir === "/" ? "" : "/"}${newName}`;

    const oldFullPath = path.join(__dirname, "../../../public/uploads", item.path);
    const newFullPath = path.join(__dirname, "../../../public/uploads", newPath);

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

module.exports = renameItem;
