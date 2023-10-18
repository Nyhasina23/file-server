const fs = require("fs");
const {
  StaticFileServices,
} = require("../services/staticFileServices.services");
const { uploadFileServices } = require("../services/uploadFileService");
class StaticFileController {
  //receive
  static receiveFromServer = async (req, res) => {
    const response = await StaticFileServices.receiveFromServer(req);
    res.status(response.status).send(response.data);
  };
  //upload
  static upload = async (req, res) => {
    try {
      const response = await StaticFileServices.upload(req);
      res.status(response.status).send(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error on upload file");
    }
  };

  //upload file
  static uploadFile = async (req, res) => {
    await uploadFileServices.uploadFile(req, res);
  };
}

module.exports = { StaticFileController };
