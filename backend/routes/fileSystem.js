const express = require("express");
const router = express.Router();
const fileSystemController = require("../controllers/fileSystemController");

router.post("/folder", fileSystemController.createFolder);

module.exports = router;
