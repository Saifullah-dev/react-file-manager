const express = require("express");
const router = express.Router();
const fileSystemController = require("../controllers/fileSystem.controller");
const upload = require("../middlewares/multer.middleware");

router.post("/folder", fileSystemController.createFolder);
router.post("/upload", upload.single("file"), fileSystemController.uploadFile);
router.get("/", fileSystemController.getItems);
router.post("/copy", fileSystemController.copyItem);
router.put("/move", fileSystemController.moveItem);
router.patch("/rename", fileSystemController.renameItem);
router.delete("/:id", fileSystemController.deleteItem);

module.exports = router;
