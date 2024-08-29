const express = require("express");
const router = express.Router();
const fileSystemController = require("../controllers/fileSystemController");
const upload = require("../config/multer");

router.get("/", fileSystemController.getFiles);
router.post("/folder", fileSystemController.createFolder);
router.post("/upload", upload.single("file"), fileSystemController.uploadFile);

module.exports = router;
