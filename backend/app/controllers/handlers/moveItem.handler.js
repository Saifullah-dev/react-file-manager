const FileSystem = require("../../models/FileSystem.model");
const fs = require("fs");
const path = require("path");

const recursiveMove = async (sourceItem, destinationFolder) => {
  const moveItem = new FileSystem({
    name: sourceItem.name,
    isDirectory: sourceItem.isDirectory,
    path: `${destinationFolder?.path ?? ""}/${sourceItem.name}`,
    parentId: destinationFolder?._id || null,
    size: sourceItem.size,
    mimeType: sourceItem.mimeType,
  });

  await moveItem.save();
  await FileSystem.findByIdAndDelete(sourceItem._id);

  const children = await FileSystem.find({ parentId: sourceItem._id });
  for (const child of children) {
    await recursiveMove(child, moveItem);
  }
};

const moveItem = async (req, res) => {
  try {
    const { sourceId, destinationId } = req.body;
    const isRootDestination = !destinationId;

    if (!sourceId) {
      return res.status(400).json({ error: "sourceId is required!" });
    }

    const sourceItem = await FileSystem.findById(sourceId);
    if (!sourceItem) {
      return res.status(404), json({ error: "Source File/Folder not found!" });
    }

    const srcFullPath = path.join(__dirname, "../../../public/uploads", sourceItem.path);

    if (isRootDestination) {
      const destFullPath = path.join(__dirname, "../../../public/uploads", sourceItem.name);
      await fs.promises.cp(srcFullPath, destFullPath, { recursive: true });
      await fs.promises.rm(srcFullPath, { recursive: true });

      await recursiveMove(sourceItem, null);
    } else {
      const destinationFolder = await FileSystem.findById(destinationId);
      if (!destinationFolder || !destinationFolder.isDirectory) {
        return res.status(400).json({ error: "Invalid destinationId!" });
      }

      const destFullPath = path.join(
        __dirname,
        "../../../public/uploads",
        destinationFolder.path,
        sourceItem.name
      );
      await fs.promises.cp(srcFullPath, destFullPath, { recursive: true });
      await fs.promises.rm(srcFullPath, { recursive: true });

      await recursiveMove(sourceItem, destinationFolder);
    }

    res.status(200).json({ message: "Item(s) moved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = moveItem;
