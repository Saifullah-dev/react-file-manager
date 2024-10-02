const FileSystem = require("../models/FileSystem.model");
const fs = require("fs");
const mongoose = require("mongoose");
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
  // #swagger.summary = 'Moves file/folder(s) to the destination folder.'
  /*  #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: "#/definitions/CopyItems" },
        description: 'An array of item IDs to move and the destination folder ID.'
      } */
  /*  #swagger.responses[200] = {
        schema: {message: "Item(s) moved successfully!"}
      }  
  */

  const { sourceIds, destinationId } = req.body;
  const isRootDestination = !destinationId;

  if (!sourceIds || !Array.isArray(sourceIds) || sourceIds.length === 0) {
    return res.status(400).json({ error: "Invalid request body, expected an array of sourceIds." });
  }
  try {
    const validIds = sourceIds.filter((id) => mongoose.Types.ObjectId.isValid(id));
    if (validIds.length !== sourceIds.length) {
      return res.status(400).json({ error: "One or more of the provided sourceIds are invalid." });
    }

    const sourceItems = await FileSystem.find({ _id: { $in: validIds } });
    if (sourceItems.length !== validIds.length) {
      return res.status(404).json({ error: "One or more of the provided sourceIds do not exist." });
    }

    const movePromises = sourceItems.map(async (sourceItem) => {
      const srcFullPath = path.join(__dirname, "../../public/uploads", sourceItem.path);

      if (isRootDestination) {
        const destFullPath = path.join(__dirname, "../../public/uploads", sourceItem.name);
        await fs.promises.cp(srcFullPath, destFullPath, { recursive: true });
        await fs.promises.rm(srcFullPath, { recursive: true });

        await recursiveMove(sourceItem, null);
      } else {
        const destinationFolder = await FileSystem.findById(destinationId);
        if (!destinationFolder || !destinationFolder.isDirectory) {
          throw new Error("Invalid destinationId!");
        }

        const destFullPath = path.join(
          __dirname,
          "../../public/uploads",
          destinationFolder.path,
          sourceItem.name
        );
        await fs.promises.cp(srcFullPath, destFullPath, { recursive: true });
        await fs.promises.rm(srcFullPath, { recursive: true });

        await recursiveMove(sourceItem, destinationFolder);
      }
    });

    try {
      await Promise.all(movePromises);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: "Item(s) moved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = moveItem;
