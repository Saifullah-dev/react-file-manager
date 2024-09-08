const mongoose = require("mongoose");

const fileSystemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isDirectory: {
      type: Boolean,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FileSystem",
      default: null,
    },
    size: {
      type: Number,
      default: null, // For files only
    },
    mimeType: {
      type: String,
      default: null, // For files only
    },
  },
  { timestamps: true }
);

const FileSystem = mongoose.model("FileSystem", fileSystemSchema);

module.exports = FileSystem;
