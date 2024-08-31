const FileSystem = require("../../models/FileSystem.model");

const getItems = async (req, res) => {
  try {
    const files = await FileSystem.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getItems;
