const FileSystem = require("../models/FileSystem.model");
const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");

const deleteRecursive = async (item) => {
  const children = await FileSystem.find({ parentId: item._id });

  for (const child of children) {
    await deleteRecursive(child);
  }

  await FileSystem.findByIdAndDelete(item._id);
};

const deleteItem = async (req, res) => {
  // #swagger.summary = 'Deletes file/folder(s).'
  /*  #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: "#/definitions/DeleteItems" },
        description: 'An array of item IDs to delete.'
      }
  */
  /*  #swagger.responses[200] = {
        schema: {message: "File(s) or Folder(s) deleted successfully."}
      }  
  */
  const { ids } = req.body;

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: "Invalid request body, expected an array of ids." });
  }

  try {
    const validIds = ids.filter((id) => mongoose.Types.ObjectId.isValid(id));
    if (validIds.length !== ids.length) {
      return res.status(400).json({ error: "One or more of the provided ids are invalid." });
    }

    const items = await FileSystem.find({ _id: { $in: validIds } });
    if (items.length !== validIds.length) {
      return res.status(404).json({ error: "One or more of the provided ids do not exist." });
    }

    const deletePromises = items.map(async (item) => {
      const itemPath = path.join(__dirname, "../../public/uploads", item.path);
      await fs.promises.rm(itemPath, { recursive: true });

      await deleteRecursive(item);
    });

    await Promise.all(deletePromises);

    res.status(200).json({ message: "File(s) or Folder(s) deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteItem;
