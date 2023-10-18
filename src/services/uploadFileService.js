const { compressFile } = require("../utils/compressFile");

class uploadFileServices {
  static uploadFile = async (req, res) => {
    try {
      //get all filename
      let reqFiles = [];
      for (var i = 0; i < req.files.length; i++) {
        compressFile(req.files[i].path, req.files[i].filename);
        reqFiles.push({ name: req.files[i].filename, size: req.files[i].size });
      }

      //test if there is file
      if (reqFiles.length === 0) {
        res.status(400).send({
          message: "No file to upload",
        });
      } else {
        res.status(200).send({
          message: "File upload completed successfully",
          file: reqFiles,
        });
      }
    } catch (e) {
      res.status(500).send({
        message: "Error on  uploading file : " + e,
      });
      console.log(e);
    }
  };
}

module.exports = { uploadFileServices };
