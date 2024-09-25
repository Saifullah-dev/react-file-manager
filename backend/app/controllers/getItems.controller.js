const FileSystem = require("../models/FileSystem.model");

const getItems = async (req, res) => {
  // #swagger.summary = 'Get all items (files & folders)'
  try {
    const files = await FileSystem.find();
    /* 
    #swagger.responses[200] = {
      description: 'Successful response',
      schema:[{$ref: "#/definitions/FileSystem"}]
    } 
    */
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getItems;
