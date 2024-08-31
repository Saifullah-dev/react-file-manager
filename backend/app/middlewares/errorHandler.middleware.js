const multer = require("multer");

const errorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.code });
  }

  res.status(500).json({ error: err.message });
};

module.exports = errorHandler;
