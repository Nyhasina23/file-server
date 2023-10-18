const express = require("express");
const router = express.Router();
const multer = require("multer");
const DIR = "./public/upload/";
const {
  StaticFileController,
} = require("../controllers/staticFileControllers.controllers");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "video/mp4" ||
      file.mimetype == "audio/*"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error("Only .png, .jpg and .jpeg mp4 and audio format allowed!")
      );
    }
  },
});

router.post(
  "/uploadFile",
  upload.array("uploads", Number.POSITIVE_INFINITY),
  StaticFileController.uploadFile
);
module.exports = router;
