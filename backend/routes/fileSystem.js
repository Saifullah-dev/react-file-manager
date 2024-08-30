const express = require("express");
const router = express.Router();
const fileSystemController = require("../controllers/fileSystemController");
const upload = require("../config/multer");

router.get("/", fileSystemController.getFiles);
router.post("/folder", fileSystemController.createFolder);
router.post("/upload", upload.single("file"), fileSystemController.uploadFile);
router.delete("/:id", fileSystemController.delete);
router.patch("/rename", fileSystemController.rename);
router.post("/copy", fileSystemController.copyItem);
router.put("/move", fileSystemController.moveItem);

module.exports = router;
