const FileSystem = require("../../models/FileSystem.model");
const fs = require("fs");
const path = require("path");

const deleteRecursive = async (item) => {
  const children = await FileSystem.find({ parentId: item._id });

  for (const child of children) {
    await deleteRecursive(child);
  }

  await FileSystem.findByIdAndDelete(item._id);
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await FileSystem.findById(id);
    if (!item) {
      return res.status(404).json({ error: "File or Folder not found!" });
    }

    const itemPath = path.join(__dirname, "../../../public/uploads", item.path);
    await fs.promises.rm(itemPath, { recursive: true });

    await deleteRecursive(item);

    res.status(200).json({ message: "File or Folder deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteItem;
