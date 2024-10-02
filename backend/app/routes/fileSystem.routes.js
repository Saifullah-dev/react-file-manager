const router = require("express").Router();
const upload = require("../middlewares/multer.middleware");
const createFolderController = require("../controllers/createFolder.controller");
const uploadFileController = require("../controllers/uploadFile.controller");
const getItemsController = require("../controllers/getItems.controller");
const copyItemController = require("../controllers/copyItem.controller");
const moveItemController = require("../controllers/moveItem.controller");
const renameItemController = require("../controllers/renameItem.controller");
const deleteItemController = require("../controllers/deleteItem.controller");
const downloadFileController = require("../controllers/downloadFile.controller");

router.post("/folder", createFolderController);
router.post("/upload", upload.single("file"), uploadFileController);
router.post("/copy", copyItemController);
router.get("/", getItemsController);
router.get("/download", downloadFileController);
router.put("/move", moveItemController);
router.patch("/rename", renameItemController);
router.delete("/", deleteItemController);

module.exports = router;
