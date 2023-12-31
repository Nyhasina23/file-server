const express = require("express");
const router = express.Router();
const multer = require("multer");
const DIR = "./public/";
const writeFileController = require("../controllers/writeFileController");

const {
  StaticFileController,
} = require("../controllers/staticFileControllers.controllers");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = Date.now().toString() + ".jpg";

    cb(null, fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

router.post("/", StaticFileController.receiveFromServer);
router.post(
  "/upload",
  upload.array("images", Number.POSITIVE_INFINITY),
  StaticFileController.upload
);
router.post("/history/write", (req, res) => writeFileController(req, res));
module.exports = router;
